const products = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    price: "₹40/kg",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500",
  },
  {
    id: 2,
    name: "Organic Carrots",
    price: "₹60/kg",
    image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?w=500",
  },
  {
    id: 3,
    name: "Green Cabbage",
    price: "₹35/kg",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500",
  },
];

function ProductSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-green-700">
          Fresh Products
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Freshly harvested directly from farmers
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {product.name}
                </h3>

                <p className="text-green-700 font-semibold mt-2">
                  {product.price}
                </p>

                <button className="mt-5 w-full bg-green-700 text-white py-3 rounded-xl hover:bg-green-800">
                  Buy Now
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ProductSection;