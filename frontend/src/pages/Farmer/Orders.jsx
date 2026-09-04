import { useState, useEffect } from "react";
import { getFarmerOrders, updateOrderStatus } from "../../services/orderService";
import { useAuth } from "../../context/AuthContext";
import { FaCheckCircle, FaTimesCircle, FaTruck, FaSearch, FaBox } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";

function Orders() {
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      if (currentUser) {
        try {
          const data = await getFarmerOrders(currentUser.uid);
          setOrders(data);
        } catch (error) {
          console.error("Error fetching farmer orders:", error);
          toast.error("Failed to load orders");
        } finally {
          setLoading(false);
        }
      }
    };
    fetchOrders();
  }, [currentUser]);

  const handleUpdateStatus = async (orderId, newStatus) => {
    try {
      await updateOrderStatus(orderId, newStatus);
      setOrders(orders.map(order => order.id === orderId ? { ...order, status: newStatus } : order));
      toast.success(`Order marked as ${newStatus}`);
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };

  const filteredOrders = orders.filter((item) =>
    item.customerInfo?.name?.toLowerCase().includes(search.toLowerCase()) || 
    item.id.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center pt-24"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div></div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-8">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
          <FaBox className="text-green-700" /> Order Management
        </h1>

        <div className="bg-white p-5 rounded-2xl shadow-sm flex items-center gap-4 mb-8 border border-gray-100">
          <FaSearch className="text-gray-400 text-xl ml-2" />
          <input
            type="text"
            placeholder="Search by customer name or Order ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="outline-none w-full text-lg py-2"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
          {filteredOrders.length === 0 ? (
            <div className="p-12 text-center text-gray-500">
              <h2 className="text-2xl font-bold mb-2">No Orders Found</h2>
              <p>You don't have any incoming orders yet.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-green-700 text-white">
                  <tr>
                    <th className="p-4 font-semibold">Order ID</th>
                    <th className="p-4 font-semibold">Customer</th>
                    <th className="p-4 font-semibold">Products</th>
                    <th className="p-4 font-semibold">Amount</th>
                    <th className="p-4 font-semibold">Status</th>
                    <th className="p-4 font-semibold text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="border-b hover:bg-gray-50 transition">
                      <td className="p-4 font-mono text-gray-600">#{order.id.slice(0,8)}</td>
                      <td className="p-4">
                        <div className="font-bold text-gray-800">{order.customerInfo?.name}</div>
                        <div className="text-xs text-gray-500">{order.customerInfo?.phone}</div>
                      </td>
                      <td className="p-4">
                        <div className="max-w-xs truncate">
                          {order.items?.map(i => `${i.quantity}x ${i.name}`).join(', ')}
                        </div>
                      </td>
                      <td className="p-4 font-bold text-gray-800">Rs {order.totalAmount}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          order.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                          order.status === 'Packed' ? 'bg-blue-100 text-blue-700' :
                          order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {order.status || 'Pending'}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex justify-center gap-2">
                          <button 
                            onClick={() => handleUpdateStatus(order.id, 'Packed')}
                            className="bg-blue-50 text-blue-600 p-2 rounded-lg hover:bg-blue-100 transition"
                            title="Mark as Packed"
                          >
                            <FaBox />
                          </button>
                          <button 
                            onClick={() => handleUpdateStatus(order.id, 'Out for Delivery')}
                            className="bg-yellow-50 text-yellow-600 p-2 rounded-lg hover:bg-yellow-100 transition"
                            title="Mark as Out for Delivery"
                          >
                            <FaTruck />
                          </button>
                          <button 
                            onClick={() => handleUpdateStatus(order.id, 'Delivered')}
                            className="bg-green-50 text-green-600 p-2 rounded-lg hover:bg-green-100 transition"
                            title="Mark as Delivered"
                          >
                            <FaCheckCircle />
                          </button>
                          <button 
                            onClick={() => handleUpdateStatus(order.id, 'Cancelled')}
                            className="bg-red-50 text-red-600 p-2 rounded-lg hover:bg-red-100 transition"
                            title="Cancel Order"
                          >
                            <FaTimesCircle />
                          </button>
                        </div>
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

export default Orders;