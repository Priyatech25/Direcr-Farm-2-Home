import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Ramesh Kumar",
    role: "Farmer",
    review:
      "This platform helped me sell crops directly to customers without middlemen.",
  },
  {
    name: "Priya Sharma",
    role: "Customer",
    review:
      "Fresh vegetables delivered on time. Very satisfied with the quality.",
  },
  {
    name: "Amit Patel",
    role: "Retailer",
    review:
      "AI price prediction helped me purchase products at the right time.",
  },
];

function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-green-700">
          What Our Users Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-green-50 rounded-3xl shadow-lg p-8"
            >
              <div className="flex text-yellow-500 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-700">
                "{review.review}"
              </p>

              <h3 className="mt-6 font-bold text-xl">
                {review.name}
              </h3>

              <p className="text-green-700">
                {review.role}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;