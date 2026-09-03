import { FaTruck, FaLeaf, FaRobot, FaShieldAlt } from "react-icons/fa";

function WhyChooseUs() {
  const reasons = [
    {
      icon: <FaLeaf />,
      title: "100% Fresh Produce",
      description: "Directly sourced from verified farmers.",
    },
    {
      icon: <FaRobot />,
      title: "AI Powered",
      description: "Machine learning predicts crop prices and demand.",
    },
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      description: "Quick delivery from nearby farms to your doorstep.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Trusted Platform",
      description: "Secure payments and verified sellers.",
    },
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-green-700">
          Why Choose Us?
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Smart Agriculture meets Smart Shopping
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition"
            >
              <div className="text-5xl text-green-700 flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;