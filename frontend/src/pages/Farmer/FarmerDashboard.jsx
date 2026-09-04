import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { getFarmerProducts } from "../../services/productService";
import { getFarmerOrders } from "../../services/orderService";
import {
  FaBoxOpen, FaShoppingCart, FaChartLine, FaCloudSun,
  FaRobot, FaPlus, FaList, FaClipboardList
} from "react-icons/fa";

function FarmerDashboard() {
  const { currentUser } = useAuth();
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (currentUser) {
        try {
          const [productsData, ordersData] = await Promise.all([
            getFarmerProducts(currentUser.uid),
            getFarmerOrders(currentUser.uid),
          ]);
          setProducts(productsData);
          setOrders(ordersData);
        } catch (error) {
          console.error("Error loading dashboard:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [currentUser]);

  const pendingOrders = orders.filter(o => o.status === "Pending").length;
  const revenue = orders.filter(o => o.status === "Delivered").reduce((s, o) => s + (o.totalAmount || 0), 0);

  const stats = [
    { label: "Total Products", value: products.length, icon: <FaBoxOpen />, color: "bg-green-100 text-green-700" },
    { label: "Total Orders", value: orders.length, icon: <FaShoppingCart />, color: "bg-blue-100 text-blue-600" },
    { label: "Pending Orders", value: pendingOrders, icon: <FaClipboardList />, color: "bg-yellow-100 text-yellow-600" },
    { label: "Revenue (Delivered)", value: `Rs ${revenue}`, icon: "₹", color: "bg-purple-100 text-purple-700" },
  ];

  const quickLinks = [
    { label: "Add Product", icon: <FaPlus />, to: "/farmer/add-product", color: "bg-green-700" },
    { label: "My Products", icon: <FaList />, to: "/my-products", color: "bg-blue-600" },
    { label: "Orders", icon: <FaShoppingCart />, to: "/farmer-orders", color: "bg-yellow-500" },
    { label: "Analytics", icon: <FaChartLine />, to: "/analytics", color: "bg-purple-600" },
    { label: "Weather", icon: <FaCloudSun />, to: "/weather", color: "bg-cyan-500" },
    { label: "AI Prediction", icon: <FaRobot />, to: "/ai-prediction", color: "bg-red-500" },
  ];

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center pt-24"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div></div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-8">

        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-green-700 to-green-500 rounded-2xl p-8 text-white mb-10 shadow-lg">
          <p className="text-green-100 font-semibold tracking-wider uppercase text-sm">Farmer Portal</p>
          <h1 className="text-3xl font-bold mt-2">Welcome back, {currentUser?.email?.split('@')[0]}! 🌱</h1>
          <p className="text-green-100 mt-2">Manage your farm products, track your orders, and grow your business.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl shadow border border-gray-100 flex items-center gap-4">
              <div className={`p-3 rounded-xl text-xl ${stat.color}`}>{stat.icon}</div>
              <div>
                <p className="text-gray-500 text-xs">{stat.label}</p>
                <h3 className="text-xl font-bold text-gray-800">{stat.value}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow border border-gray-100 p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-5">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, i) => (
              <Link key={i} to={link.to}
                className={`${link.color} text-white p-4 rounded-xl text-center flex flex-col items-center gap-2 hover:opacity-90 transition shadow`}
              >
                <span className="text-2xl">{link.icon}</span>
                <span className="text-sm font-semibold">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">Recent Orders</h2>
            <Link to="/farmer-orders" className="text-green-700 font-semibold hover:underline text-sm">View All</Link>
          </div>
          {orders.length === 0 ? (
            <div className="p-8 text-center text-gray-500">No orders received yet.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-gray-600">Order ID</th>
                    <th className="px-6 py-4 font-semibold text-gray-600">Customer</th>
                    <th className="px-6 py-4 font-semibold text-gray-600">Amount</th>
                    <th className="px-6 py-4 font-semibold text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.slice(0, 5).map(order => (
                    <tr key={order.id} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-mono text-gray-600">#{order.id.slice(0, 8)}</td>
                      <td className="px-6 py-4 text-gray-700">{order.customerInfo?.name || "—"}</td>
                      <td className="px-6 py-4 font-bold text-gray-800">Rs {order.totalAmount}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          order.status === "Delivered" ? "bg-green-100 text-green-700" :
                          order.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
                          "bg-blue-100 text-blue-700"
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
      </div>
    </div>
  );
}

export default FarmerDashboard;