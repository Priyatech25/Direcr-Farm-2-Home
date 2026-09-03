import { useState } from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaTruck,
  FaSearch,
} from "react-icons/fa";

function Orders() {
  const [search, setSearch] = useState("");

  const [orders] = useState([
    {
      id: 1001,
      customer: "Priya",
      product: "Fresh Tomato",
      quantity: 10,
      amount: 400,
      status: "Pending",
    },
    {
      id: 1002,
      customer: "Rahul",
      product: "Organic Mango",
      quantity: 5,
      amount: 600,
      status: "Packed",
    },
    {
      id: 1003,
      customer: "Sneha",
      product: "Potato",
      quantity: 20,
      amount: 700,
      status: "Delivered",
    },
  ]);

  const filteredOrders = orders.filter((item) =>
    item.customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-green-700 mb-8">
        📦 Orders Management
      </h1>

      {/* Search */}

      <div className="bg-white p-5 rounded-xl shadow-lg flex items-center gap-3 mb-8">

        <FaSearch className="text-gray-500" />

        <input
          type="text"
          placeholder="Search Customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none w-full"
        />

      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-green-700 text-white">

            <tr>

              <th className="p-4">Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredOrders.map((order) => (

              <tr
                key={order.id}
                className="border-b hover:bg-gray-50 text-center"
              >

                <td className="p-4">{order.id}</td>

                <td>{order.customer}</td>

                <td>{order.product}</td>

                <td>{order.quantity} Kg</td>

                <td>₹{order.amount}</td>

                <td>

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    {order.status}
                  </span>

                </td>

                <td>

                  <div className="flex justify-center gap-3">

                    <button className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700">
                      <FaCheckCircle />
                    </button>

                    <button className="bg-yellow-500 text-white px-3 py-2 rounded-lg hover:bg-yellow-600">
                      <FaTruck />
                    </button>

                    <button className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700">
                      <FaTimesCircle />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Orders;