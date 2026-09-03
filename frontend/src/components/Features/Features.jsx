import { FaChartLine, FaSeedling, FaRobot } from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaChartLine />,
      title: "Price Prediction",
      description:
        "Predict future crop prices using Machine Learning.",
    },
    {
      icon: <FaRobot />,
      title: "Demand Forecast",
      description:
        "Estimate future market demand using AI models.",
    },
    {
      icon: <FaSeedling />,
      title: "Resource Optimization",
      description:
        "Recommend better farming decisions for higher yield.",
    },
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-green-700">
          AI Powered Features
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Smart Agriculture powered by Artificial Intelligence
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition duration-300"
            >

              <div className="text-5xl text-green-700 mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;