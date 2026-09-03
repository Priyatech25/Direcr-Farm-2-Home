import { useState, useEffect } from "react";
import { db } from "../../firebase/firebase";
import { collection, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { FaUsers, FaTractor, FaShoppingCart, FaBoxOpen, FaTrash, FaCheck, FaBan } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";

function AdminDashboard() {
  const [stats, setStats] = useState({ users: 0, farmers: 0, consumers: 0, products: 0, orders: 0, revenue: 0 });
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      if (!db) {
        setLoading(false);
        return;
      }
      try {
        const [usersSnap, productsSnap, ordersSnap] = await Promise.all([
          getDocs(collection(db, "users")),
          getDocs(collection(db, "products")),
          getDocs(collection(db, "orders")),
        ]);

        const usersData = usersSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        const productsData = productsSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        const ordersData = ordersSnap.docs.map(d => ({ id: d.id, ...d.data() }));

        const farmers = usersData.filter(u => u.role === "Farmer");
        const consumers = usersData.filter(u => u.role === "Consumer");
        const revenue = ordersData.filter(o => o.status === "Delivered").reduce((sum, o) => sum + (o.totalAmount || 0), 0);

        setUsers(usersData);
        setProducts(productsData);
        setOrders(ordersData);
        setStats({
          users: usersData.length,
          farmers: farmers.length,
          consumers: consumers.length,
          products: productsData.length,
          orders: ordersData.length,
          revenue,
        });
      } catch (error) {
        console.error("Error fetching admin data:", error);
        toast.error("Failed to load admin data.");
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  const handleDeleteProduct = async (productId) => {
    if (window.confirm("Delete this product permanently?")) {
      try {
        await deleteDoc(doc(db, "products", productId));
        setProducts(products.filter(p => p.id !== productId));
        toast.success("Product deleted.");
      } catch (e) {
        toast.error("Failed to delete product.");
      }
    }
  };

  const handleDisableUser = async (userId, currentStatus) => {
    try {
      const newStatus = currentStatus === "disabled" ? "active" : "disabled";
      await updateDoc(doc(db, "users", userId), { status: newStatus });
      setUsers(users.map(u => u.id === userId ? { ...u, status: newStatus } : u));
      toast.success(`User ${newStatus}.`);
    } catch (e) {
      toast.error("Failed to update user status.");
    }
  };

  const tabs = ["overview", "users", "products", "orders"];

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div></div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />

      {/* Sidebar */}
      <div className="flex">
        <aside className="w-64 min-h-screen bg-green-800 text-white flex flex-col p-6 sticky top-0 hidden lg:flex">
          <h2 className="text-2xl font-bold mb-10">⚙️ Admin Panel</h2>
          <nav className="space-y-2 flex-1">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left px-4 py-3 rounded-xl font-semibold capitalize transition ${activeTab === tab ? "bg-white text-green-800" : "hover:bg-green-700"}`}
              >
                {tab}
              </button>
            ))}
          </nav>
          <p className="text-green-300 text-xs mt-auto">Admin Access Only</p>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Mobile Tabs */}
          <div className="flex gap-2 flex-wrap mb-8 lg:hidden">
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 rounded-lg font-semibold capitalize text-sm transition ${activeTab === tab ? "bg-green-700 text-white" : "bg-white text-gray-600 border"}`}>
                {tab}
              </button>
            ))}
          </div>

          {/* OVERVIEW TAB */}
          {activeTab === "overview" && (
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
                {[
                  { label: "Total Users", value: stats.users, icon: <FaUsers />, color: "bg-blue-100 text-blue-600" },
                  { label: "Farmers", value: stats.farmers, icon: <FaTractor />, color: "bg-green-100 text-green-700" },
                  { label: "Consumers", value: stats.consumers, icon: <FaUsers />, color: "bg-orange-100 text-orange-600" },
                  { label: "Products", value: stats.products, icon: <FaBoxOpen />, color: "bg-yellow-100 text-yellow-600" },
                  { label: "Orders", value: stats.orders, icon: <FaShoppingCart />, color: "bg-purple-100 text-purple-600" },
                  { label: "Revenue", value: `Rs ${stats.revenue}`, icon: "₹", color: "bg-red-100 text-red-600" },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-2xl shadow border border-gray-100">
                    <div className={`inline-flex p-2 rounded-lg mb-2 ${item.color}`}>{item.icon}</div>
                    <p className="text-gray-500 text-xs">{item.label}</p>
                    <h3 className="text-xl font-bold text-gray-800">{item.value}</h3>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
                  <h2 className="font-bold text-lg mb-4">Recent Orders</h2>
                  {orders.slice(0, 5).map(order => (
                    <div key={order.id} className="flex justify-between items-center py-3 border-b last:border-0">
                      <div>
                        <p className="font-semibold text-sm text-gray-700">#{order.id.slice(0, 8)}</p>
                        <p className="text-xs text-gray-400">{order.customerInfo?.name || "—"}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-800">Rs {order.totalAmount}</p>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${order.status === "Delivered" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>{order.status}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
                  <h2 className="font-bold text-lg mb-4">Recent Products</h2>
                  {products.slice(0, 5).map(product => (
                    <div key={product.id} className="flex justify-between items-center py-3 border-b last:border-0">
                      <div>
                        <p className="font-semibold text-sm text-gray-700">{product.name}</p>
                        <p className="text-xs text-gray-400">{product.category}</p>
                      </div>
                      <p className="font-bold text-green-700">Rs {product.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* USERS TAB */}
          {activeTab === "users" && (
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Users</h1>
              <div className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="px-6 py-4 font-semibold text-gray-600">User</th>
                        <th className="px-6 py-4 font-semibold text-gray-600">Role</th>
                        <th className="px-6 py-4 font-semibold text-gray-600">Status</th>
                        <th className="px-6 py-4 font-semibold text-gray-600">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map(user => (
                        <tr key={user.id} className="border-b hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <p className="font-semibold text-gray-800">{user.fullName || "—"}</p>
                            <p className="text-xs text-gray-400">{user.email}</p>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${user.role === "Farmer" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>{user.role}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`text-xs font-bold ${user.status === "disabled" ? "text-red-500" : "text-green-600"}`}>{user.status === "disabled" ? "Disabled" : "Active"}</span>
                          </td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => handleDisableUser(user.id, user.status)}
                              className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold ${user.status === "disabled" ? "bg-green-50 text-green-700 hover:bg-green-100" : "bg-red-50 text-red-600 hover:bg-red-100"} transition`}
                            >
                              {user.status === "disabled" ? <><FaCheck /> Enable</> : <><FaBan /> Disable</>}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* PRODUCTS TAB */}
          {activeTab === "products" && (
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Products</h1>
              <div className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="px-6 py-4 font-semibold text-gray-600">Product</th>
                        <th className="px-6 py-4 font-semibold text-gray-600">Category</th>
                        <th className="px-6 py-4 font-semibold text-gray-600">Price</th>
                        <th className="px-6 py-4 font-semibold text-gray-600">Stock</th>
                        <th className="px-6 py-4 font-semibold text-gray-600">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map(product => (
                        <tr key={product.id} className="border-b hover:bg-gray-50">
                          <td className="px-6 py-4 font-semibold text-gray-800">{product.name}</td>
                          <td className="px-6 py-4 text-gray-600">{product.category}</td>
                          <td className="px-6 py-4 text-green-700 font-bold">Rs {product.price}</td>
                          <td className="px-6 py-4 text-gray-600">{product.quantity} kg</td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => handleDeleteProduct(product.id)}
                              className="flex items-center gap-1 bg-red-50 text-red-600 hover:bg-red-100 px-3 py-1 rounded-lg text-xs font-semibold transition"
                            >
                              <FaTrash /> Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ORDERS TAB */}
          {activeTab === "orders" && (
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-6">All Orders</h1>
              <div className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="px-6 py-4 font-semibold text-gray-600">Order ID</th>
                        <th className="px-6 py-4 font-semibold text-gray-600">Customer</th>
                        <th className="px-6 py-4 font-semibold text-gray-600">Amount</th>
                        <th className="px-6 py-4 font-semibold text-gray-600">Payment</th>
                        <th className="px-6 py-4 font-semibold text-gray-600">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map(order => (
                        <tr key={order.id} className="border-b hover:bg-gray-50">
                          <td className="px-6 py-4 font-mono text-gray-600">#{order.id.slice(0, 8)}</td>
                          <td className="px-6 py-4">
                            <p className="font-semibold text-gray-800">{order.customerInfo?.name || "—"}</p>
                            <p className="text-xs text-gray-400">{order.customerInfo?.phone}</p>
                          </td>
                          <td className="px-6 py-4 font-bold text-gray-800">Rs {order.totalAmount}</td>
                          <td className="px-6 py-4 text-gray-600">{order.paymentMethod}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                              order.status === "Delivered" ? "bg-green-100 text-green-700" :
                              order.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
                              "bg-blue-100 text-blue-700"
                            }`}>{order.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;