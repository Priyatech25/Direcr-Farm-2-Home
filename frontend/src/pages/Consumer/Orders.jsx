import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { getConsumerOrders } from "../../services/orderService";
import { FaBoxOpen, FaTruck, FaCheckCircle, FaClipboardList } from "react-icons/fa";

function Orders() {
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      if (currentUser) {
        try {
          const data = await getConsumerOrders(currentUser.uid);
          // Sort by newest first
          data.sort((a, b) => b.createdAt - a.createdAt);
          setOrders(data);
        } catch (error) {
          console.error("Error fetching consumer orders:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchOrders();
  }, [currentUser]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center pt-24"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div></div>;
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Pending': return <FaClipboardList className="text-yellow-500 text-2xl" />;
      case 'Packed': return <FaBoxOpen className="text-blue-500 text-2xl" />;
      case 'Out for Delivery': return <FaTruck className="text-orange-500 text-2xl" />;
      case 'Delivered': return <FaCheckCircle className="text-green-500 text-2xl" />;
      default: return <FaClipboardList className="text-gray-500 text-2xl" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
          <FaBoxOpen className="text-green-700" /> My Orders
        </h1>

        {orders.length === 0 ? (
          <div className="bg-white rounded-2xl shadow p-12 text-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-2">No Orders Yet</h2>
            <p className="text-gray-500">Looks like you haven't placed any orders.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 p-4 border-b flex flex-wrap justify-between items-center gap-4">
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Order Placed</p>
                    <p className="font-semibold text-gray-700">
                      {order.createdAt?.toDate ? order.createdAt.toDate().toLocaleDateString() : 'Recently'}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Total</p>
                    <p className="font-semibold text-green-700">Rs {order.totalAmount}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Order #</p>
                    <p className="font-mono text-gray-700">{order.id.slice(0,10)}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    {getStatusIcon(order.status)}
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{order.status || 'Pending'}</h3>
                      <p className="text-gray-500 text-sm">
                        {order.status === 'Delivered' ? 'Your package has been delivered.' : 'We are preparing your order.'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {order.items?.map((item, index) => (
                      <div key={index} className="flex gap-4 items-center">
                        {item.imageUrl ? (
                          <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-lg bg-gray-100" />
                        ) : (
                          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-400">No Img</div>
                        )}
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800">{item.name}</h4>
                          <p className="text-sm text-gray-500">Qty: {item.quantity} kg</p>
                        </div>
                        <div className="font-bold text-gray-700">Rs {item.price * item.quantity}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
