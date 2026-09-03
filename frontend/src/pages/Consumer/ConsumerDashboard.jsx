import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { getConsumerOrders } from "../../services/orderService";
import { getAllProducts } from "../../services/productService";
import { FaBoxOpen, FaHeart, FaShoppingCart, FaStore } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

function ConsumerDashboard() {
  const { currentUser } = useAuth();
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  
  const [orders, setOrders] = useState([]);
  const [recentProducts, setRecentProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (currentUser) {
          const userOrders = await getConsumerOrders(currentUser.uid);
          setOrders(userOrders);
        }
        
        const allProducts = await getAllProducts();
        setRecentProducts(allProducts.slice(0, 4)); // Show 4 latest products
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentUser]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center pt-24"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div></div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      
      {/* Dashboard Header */}
      <section className="max-w-7xl mx-auto px-8 mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, {currentUser?.email?.split('@')[0] || 'Customer'}! 👋
        </h1>
        <p className="text-gray-500 mt-2">Manage your orders and discover fresh local products.</p>
      </section>

      {/* Stats Cards */}
      <section className="max-w-7xl mx-auto px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow border border-gray-100 flex items-center gap-4">
            <div className="bg-blue-100 p-4 rounded-xl text-blue-600"><FaBoxOpen size={24} /></div>
            <div>
              <p className="text-gray-500 text-sm">Total Orders</p>
              <h3 className="text-2xl font-bold text-gray-800">{orders.length}</h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border border-gray-100 flex items-center gap-4">
            <div className="bg-green-100 p-4 rounded-xl text-green-600"><FaShoppingCart size={24} /></div>
            <div>
              <p className="text-gray-500 text-sm">Cart Items</p>
              <h3 className="text-2xl font-bold text-gray-800">{cartItems.length}</h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border border-gray-100 flex items-center gap-4">
            <div className="bg-red-100 p-4 rounded-xl text-red-500"><FaHeart size={24} /></div>
            <div>
              <p className="text-gray-500 text-sm">Wishlist</p>
              <h3 className="text-2xl font-bold text-gray-800">{wishlistItems.length}</h3>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow border border-gray-100 flex items-center gap-4 cursor-pointer hover:shadow-md transition" onClick={() => window.location.href='/products'}>
            <div className="bg-orange-100 p-4 rounded-xl text-orange-500"><FaStore size={24} /></div>
            <div>
              <p className="text-gray-500 text-sm">Browse Products</p>
              <h3 className="text-md font-bold text-green-700 mt-1">Shop Now &rarr;</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Orders */}
      <section className="max-w-7xl mx-auto px-8 mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Recent Orders</h2>
          <Link to="/consumer-orders" className="text-green-700 font-semibold hover:underline">View All</Link>
        </div>
        
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          {orders.length === 0 ? (
            <div className="p-8 text-center text-gray-500">You haven't placed any orders yet.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-green-50 border-b border-green-100">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-gray-700">Order ID</th>
                    <th className="px-6 py-4 font-semibold text-gray-700">Date</th>
                    <th className="px-6 py-4 font-semibold text-gray-700">Total</th>
                    <th className="px-6 py-4 font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.slice(0, 5).map(order => (
                    <tr key={order.id} className="border-b last:border-0 hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-mono text-gray-600">#{order.id.slice(0, 8)}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {order.createdAt?.toDate ? order.createdAt.toDate().toLocaleDateString() : 'Just now'}
                      </td>
                      <td className="px-6 py-4 font-bold text-gray-800">Rs {order.totalAmount}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          order.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                          order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-8 pb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Farm Products</h2>
        {recentProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentProducts.map(product => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow">
                <div className="h-40 bg-gray-200">
                   {product.imageUrl && <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p className="text-green-700 font-bold mt-1">Rs {product.price}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No products available at the moment.</p>
        )}
      </section>

    </div>
  );
}

export default ConsumerDashboard;
