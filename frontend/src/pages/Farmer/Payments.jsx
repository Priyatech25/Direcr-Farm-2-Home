import { FaMoneyBillWave, FaDownload, FaSearch } from "react-icons/fa";
import { useState } from "react";

function Payments() {
  const [search, setSearch] = useState("");

  const payments = [
    {
      id: "ORD1001",
      customer: "Priya",
      amount: 1200,
      method: "UPI",
      status: "Paid",
      date: "04-08-2026",
    },
    {
      id: "ORD1002",
      customer: "Rahul",
      amount: 800,
      method: "Card",
      status: "Paid",
      date: "03-08-2026",
    },
    {
      id: "ORD1003",
      customer: "Sneha",
      amount: 450,
      method: "Cash",
      status: "Pending",
      date: "02-08-2026",
    },
  ];

  const filtered = payments.filter((item) =>
    item.customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-green-700 mb-8">
        💳 Payment History
      </h1>

      {/* Summary */}

      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white rounded-xl shadow-lg p-6">
          <FaMoneyBillWave className="text-green-700 text-4xl mb-3"/>
          <h3>Total Earnings</h3>
          <h1 className="text-3xl font-bold">
            ₹2,45,800
          </h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3>This Month</h3>
          <h1 className="text-3xl font-bold">
            ₹42,500
          </h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3>Pending Payments</h3>
          <h1 className="text-3xl font-bold text-red-600">
            ₹5,400
          </h1>
        </div>

      </div>

      {/* Search */}

      <div className="bg-white p-5 rounded-xl shadow-lg flex items-center gap-3 mb-8">

        <FaSearch />

        <input
          type="text"
          placeholder="Search Customer..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className="outline-none w-full"
        />

      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-green-700 text-white">

            <tr>

              <th className="p-4">Order ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Date</th>
              <th>Status</th>
              <th>Invoice</th>

            </tr>

          </thead>

          <tbody>

            {filtered.map((item)=>(

              <tr
                key={item.id}
                className="border-b text-center hover:bg-gray-50"
              >

                <td className="p-4">{item.id}</td>

                <td>{item.customer}</td>

                <td>₹{item.amount}</td>

                <td>{item.method}</td>

                <td>{item.date}</td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      item.status==="Paid"
                        ? "bg-green-600"
                        : "bg-red-600"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

                <td>

                  <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">

                    <FaDownload />

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Payments;