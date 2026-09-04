import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { getFarmerOrders } from "../../services/orderService";
import { getFarmerProducts } from "../../services/productService";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { FaRupeeSign, FaShoppingCart, FaBoxOpen, FaChartLine, FaStar } from "react-icons/fa";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement);

function Analytics() {
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (currentUser) {
        try {
          const [ordersData, productsData] = await Promise.all([
            getFarmerOrders(currentUser.uid),
            getFarmerProducts(currentUser.uid),
          ]);
          setOrders(ordersData);
          setProducts(productsData);
        } catch (error) {
          console.error("Error fetching analytics:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [currentUser]);

  // Compute stats from real data
  const totalRevenue = orders
    .filter(o => o.status === "Delivered")
    .reduce((sum, o) => sum + (o.totalAmount || 0), 0);

  const totalOrders = orders.length;
  const pendingOrders = orders.filter(o => o.status === "Pending").length;
  const deliveredOrders = orders.filter(o => o.status === "Delivered").length;

  // Monthly revenue: group by month
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthlyRevenue = Array(12).fill(0);
  orders.forEach(order => {
    if (order.createdAt?.toDate) {
      const month = order.createdAt.toDate().getMonth();
      monthlyRevenue[month] += order.totalAmount || 0;
    }
  });

  // Category breakdown from products
  const categoryCount = {};
  products.forEach(p => {
    categoryCount[p.category] = (categoryCount[p.category] || 0) + 1;
  });

  const barChartData = {
    labels: monthNames,
    datasets: [
      {
        label: "Monthly Revenue (Rs)",
        data: monthlyRevenue,
        backgroundColor: "rgba(34, 197, 94, 0.75)",
        borderColor: "rgba(22, 163, 74, 1)",
        borderWidth: 1,
        borderRadius: 6,
      },
    ],
  };

  const doughnutData = {
    labels: Object.keys(categoryCount).length > 0 ? Object.keys(categoryCount) : ["No Products"],
    datasets: [
      {
        data: Object.keys(categoryCount).length > 0 ? Object.values(categoryCount) : [1],
        backgroundColor: ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: { legend: { position: "top" } },
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center pt-24"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div></div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
          <FaChartLine className="text-green-700" /> Sales Analytics
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow border border-gray-100 flex items-center gap-4">
            <div className="bg-green-100 p-4 rounded-xl"><FaRupeeSign className="text-green-700 text-2xl" /></div>
            <div>
              <p className="text-gray-500 text-sm">Total Revenue</p>
              <h3 className="text-2xl font-bold text-gray-800">Rs {totalRevenue}</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow border border-gray-100 flex items-center gap-4">
            <div className="bg-blue-100 p-4 rounded-xl"><FaShoppingCart className="text-blue-600 text-2xl" /></div>
            <div>
              <p className="text-gray-500 text-sm">Total Orders</p>
              <h3 className="text-2xl font-bold text-gray-800">{totalOrders}</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow border border-gray-100 flex items-center gap-4">
            <div className="bg-yellow-100 p-4 rounded-xl"><FaBoxOpen className="text-yellow-600 text-2xl" /></div>
            <div>
              <p className="text-gray-500 text-sm">Pending Orders</p>
              <h3 className="text-2xl font-bold text-gray-800">{pendingOrders}</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow border border-gray-100 flex items-center gap-4">
            <div className="bg-purple-100 p-4 rounded-xl"><FaStar className="text-purple-600 text-2xl" /></div>
            <div>
              <p className="text-gray-500 text-sm">Delivered</p>
              <h3 className="text-2xl font-bold text-gray-800">{deliveredOrders}</h3>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="md:col-span-2 bg-white rounded-2xl shadow p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-5">Monthly Revenue (All Time)</h2>
            <Bar data={barChartData} options={chartOptions} />
          </div>

          <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-5">Products by Category</h2>
            <Doughnut data={doughnutData} options={chartOptions} />
          </div>
        </div>

        {/* Order Summary Table */}
        <div className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-800">Recent Orders</h2>
          </div>
          {orders.length === 0 ? (
            <div className="p-8 text-center text-gray-500">No orders to display yet.</div>
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
                  {orders.slice(0, 10).map(order => (
                    <tr key={order.id} className="border-b hover:bg-gray-50 transition">
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

export default Analytics;