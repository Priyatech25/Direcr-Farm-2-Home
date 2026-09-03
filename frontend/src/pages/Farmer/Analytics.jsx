import {
  FaRupeeSign,
  FaShoppingCart,
  FaBoxOpen,
  FaChartLine,
} from "react-icons/fa";

function Analytics() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-green-700 mb-8">
        📊 Analytics Dashboard
      </h1>

      {/* Summary Cards */}

      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="bg-white rounded-xl shadow-lg p-6">
          <FaRupeeSign className="text-4xl text-green-700 mb-3" />
          <h2 className="text-gray-500">Total Revenue</h2>
          <h1 className="text-3xl font-bold">₹1,24,500</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <FaShoppingCart className="text-4xl text-blue-600 mb-3" />
          <h2 className="text-gray-500">Orders</h2>
          <h1 className="text-3xl font-bold">326</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <FaBoxOpen className="text-4xl text-yellow-500 mb-3" />
          <h2 className="text-gray-500">Products Sold</h2>
          <h1 className="text-3xl font-bold">842 Kg</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <FaChartLine className="text-4xl text-purple-600 mb-3" />
          <h2 className="text-gray-500">Growth</h2>
          <h1 className="text-3xl font-bold">+18%</h1>
        </div>

      </div>

      {/* Top Selling Products */}

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">

        <h2 className="text-2xl font-bold mb-5">
          🥇 Top Selling Products
        </h2>

        <table className="w-full">

          <thead className="bg-green-700 text-white">

            <tr>
              <th className="p-3">Product</th>
              <th>Sold</th>
              <th>Revenue</th>
            </tr>

          </thead>

          <tbody>

            <tr className="border-b text-center">
              <td className="p-3">Tomato</td>
              <td>320 Kg</td>
              <td>₹12,800</td>
            </tr>

            <tr className="border-b text-center">
              <td className="p-3">Potato</td>
              <td>270 Kg</td>
              <td>₹9,450</td>
            </tr>

            <tr className="text-center">
              <td className="p-3">Mango</td>
              <td>180 Kg</td>
              <td>₹21,600</td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* Monthly Sales */}

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-white rounded-xl shadow-lg p-6">

          <h2 className="text-xl font-bold mb-5">
            Monthly Sales
          </h2>

          <div className="space-y-4">

            <div>
              <p>January</p>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-green-600 h-4 rounded-full w-3/4"></div>
              </div>
            </div>

            <div>
              <p>February</p>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-blue-600 h-4 rounded-full w-2/3"></div>
              </div>
            </div>

            <div>
              <p>March</p>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-yellow-500 h-4 rounded-full w-5/6"></div>
              </div>
            </div>

            <div>
              <p>April</p>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-purple-600 h-4 rounded-full w-1/2"></div>
              </div>
            </div>

          </div>

        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">

          <h2 className="text-xl font-bold mb-5">
            Business Summary
          </h2>

          <ul className="space-y-4">

            <li>✅ Best Selling Product : Tomato</li>

            <li>✅ Total Customers : 198</li>

            <li>✅ Pending Orders : 16</li>

            <li>✅ Delivered Orders : 310</li>

            <li>✅ Monthly Profit : ₹42,500</li>

            <li>✅ Customer Rating : ⭐ 4.9 / 5</li>

          </ul>

        </div>

      </div>

    </div>
  );
}

export default Analytics;