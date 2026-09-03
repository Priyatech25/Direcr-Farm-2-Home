import { FaUsers, FaShoppingCart, FaLeaf, FaStar } from "react-icons/fa";

function Statistics() {
  const stats = [
    { icon: <FaUsers />, value: "5,000+", label: "Farmers" },
    { icon: <FaShoppingCart />, value: "12,000+", label: "Orders" },
    { icon: <FaLeaf />, value: "800+", label: "Products" },
    { icon: <FaStar />, value: "4.9", label: "Customer Rating" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-green-50 rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
          >
            <div className="text-4xl text-green-700 mb-3 flex justify-center">
              {item.icon}
            </div>

            <h2 className="text-3xl font-bold text-green-700">
              {item.value}
            </h2>

            <p className="mt-2 text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;