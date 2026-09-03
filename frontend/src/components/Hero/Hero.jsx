function Hero() {
  return (
    <section className="bg-green-50 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Section */}
        <div>
          <h1 className="text-6xl font-bold text-green-700">
            Fresh Farm Products
          </h1>

          <p className="text-gray-700 text-xl mt-6">
            Buy directly from farmers without middlemen.
            AI helps predict prices and demand for better farming.
          </p>

          <div className="mt-8 flex gap-5">
            <button className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800">
              Shop Now
            </button>

            <button className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-lg hover:bg-green-700 hover:text-white">
              AI Prediction
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800"
            alt="Farmer"
            className="rounded-3xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;