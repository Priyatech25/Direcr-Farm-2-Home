// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <div className="min-h-screen bg-green-50">
//       <nav className="bg-green-700 text-white px-8 py-5 flex justify-between">
//         <h1 className="text-2xl font-bold">🌾 Direct Farm 2 Home</h1>

//         <div className="flex gap-6">
//           <Link to="/" className="hover:text-yellow-300">Home</Link>
//           <Link to="/products" className="hover:text-yellow-300">Products</Link>
//           <Link to="/login" className="hover:text-yellow-300">Login</Link>
//         </div>
//       </nav>

//       <section className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-12 items-center">
//         <div>
//           <p className="text-green-700 font-semibold text-lg">
//             FARM FRESH • LOCAL • TRUSTED
//           </p>

//           <h2 className="text-5xl font-bold text-gray-800 mt-4">
//             Fresh From Farmers,
//             <span className="text-green-700"> Directly To Your Home</span>
//           </h2>

//           <p className="text-gray-600 text-lg mt-6">
//             Buy fresh vegetables, fruits, grains and other farm products
//             directly from local farmers.
//           </p>

//           <div className="flex gap-4 mt-8">
//             <Link
//               to="/products"
//               className="bg-green-700 text-white px-7 py-3 rounded-lg hover:bg-green-800"
//             >
//               Shop Now 🛒
//             </Link>

//             <Link
//               to="/login"
//               className="border border-green-700 text-green-700 px-7 py-3 rounded-lg hover:bg-green-100"
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>

//         <div>
//           <img
//             src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=900"
//             alt="Farm"
//             className="rounded-2xl shadow-xl w-full"
//           />
//         </div>
//       </section>

//       <section className="max-w-7xl mx-auto px-8 pb-20 grid md:grid-cols-4 gap-6">
//         <div className="bg-white p-6 rounded-xl shadow text-center">
//           <h3 className="text-3xl font-bold text-green-700">500+</h3>
//           <p className="text-gray-600">Farmers</p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow text-center">
//           <h3 className="text-3xl font-bold text-green-700">1000+</h3>
//           <p className="text-gray-600">Products</p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow text-center">
//           <h3 className="text-3xl font-bold text-green-700">2500+</h3>
//           <p className="text-gray-600">Customers</p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow text-center">
//           <h3 className="text-3xl font-bold text-green-700">5000+</h3>
//           <p className="text-gray-600">Orders</p>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;



import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-green-50">

      {/* ================= NAVBAR ================= */}
      <nav className="bg-green-700 text-white px-8 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          🌾 Direct Farm 2 Home
        </h1>

        <div className="flex gap-6">
          <Link
            to="/"
            className="hover:text-yellow-300"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="hover:text-yellow-300"
          >
            Products
          </Link>

          <Link
            to="/login"
            className="hover:text-yellow-300"
          >
            Login
          </Link>
        </div>
      </nav>


      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-green-700 font-semibold text-lg">
            FARM FRESH • LOCAL • TRUSTED
          </p>

          <h2 className="text-5xl font-bold text-gray-800 mt-4 leading-tight">
            Fresh From Farmers,
            <span className="text-green-700">
              {" "}Directly To Your Home
            </span>
          </h2>

          <p className="text-gray-600 text-lg mt-6 leading-relaxed">
            Buy fresh vegetables, fruits, grains and other farm products
            directly from local farmers at fair prices.
          </p>

          <div className="flex gap-4 mt-8">

            <Link
              to="/products"
              className="bg-green-700 text-white px-7 py-3 rounded-lg hover:bg-green-800"
            >
              Shop Now 🛒
            </Link>

            <Link
              to="/login"
              className="border border-green-700 text-green-700 px-7 py-3 rounded-lg hover:bg-green-100"
            >
              Get Started
            </Link>

          </div>
        </div>


        <div>
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=900"
            alt="Farm"
            className="rounded-2xl shadow-xl w-full"
          />
        </div>

      </section>


      {/* ================= STATISTICS ================= */}
      <section className="max-w-7xl mx-auto px-8 pb-20 grid md:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-3xl font-bold text-green-700">
            500+
          </h3>
          <p className="text-gray-600">
            Farmers
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-3xl font-bold text-green-700">
            1000+
          </h3>
          <p className="text-gray-600">
            Products
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-3xl font-bold text-green-700">
            2500+
          </h3>
          <p className="text-gray-600">
            Customers
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-3xl font-bold text-green-700">
            5000+
          </h3>
          <p className="text-gray-600">
            Orders
          </p>
        </div>

      </section>


      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-12">
            <p className="text-green-700 font-semibold">
              FARM FRESH PRODUCTS
            </p>

            <h2 className="text-4xl font-bold text-gray-800 mt-2">
              Featured Products 🥕
            </h2>

            <p className="text-gray-600 mt-4">
              Fresh products available directly from local farmers.
            </p>
          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

            {/* Tomato */}
            <div className="bg-green-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition">

              <img
                src="https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500"
                alt="Tomatoes"
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">
                  Fresh Tomatoes 🍅
                </h3>

                <p className="text-gray-500 mt-2">
                  Local Farm
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-green-700 font-bold">
                    ₹40 / kg
                  </span>

                  <Link
                    to="/products"
                    className="bg-green-700 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    Buy
                  </Link>
                </div>
              </div>

            </div>


            {/* Potato */}
            <div className="bg-green-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition">

              <img
                src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500"
                alt="Potatoes"
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">
                  Fresh Potatoes 🥔
                </h3>

                <p className="text-gray-500 mt-2">
                  Local Farm
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-green-700 font-bold">
                    ₹35 / kg
                  </span>

                  <Link
                    to="/products"
                    className="bg-green-700 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    Buy
                  </Link>
                </div>
              </div>

            </div>


            {/* Carrot */}
            <div className="bg-green-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition">

              <img
                src="https://images.unsplash.com/photo-1445282768818-728615cc910a?w=500"
                alt="Carrots"
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">
                  Fresh Carrots 🥕
                </h3>

                <p className="text-gray-500 mt-2">
                  Local Farm
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-green-700 font-bold">
                    ₹50 / kg
                  </span>

                  <Link
                    to="/products"
                    className="bg-green-700 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    Buy
                  </Link>
                </div>
              </div>

            </div>


            {/* Mango */}
            <div className="bg-green-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition">

              <img
                src="https://images.unsplash.com/photo-1553279768-865429fa0078?w=500"
                alt="Mangoes"
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">
                  Fresh Mangoes 🥭
                </h3>

                <p className="text-gray-500 mt-2">
                  Local Farm
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-green-700 font-bold">
                    ₹80 / kg
                  </span>

                  <Link
                    to="/products"
                    className="bg-green-700 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    Buy
                  </Link>
                </div>
              </div>

            </div>

          </div>


          <div className="text-center mt-10">

            <Link
              to="/products"
              className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800"
            >
              View All Products →
            </Link>

          </div>

        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 bg-green-50">

        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-12">

            <p className="text-green-700 font-semibold">
              WHY DIRECT FARM 2 HOME?
            </p>

            <h2 className="text-4xl font-bold text-gray-800 mt-2">
              Better For Farmers. Better For You.
            </h2>

          </div>


          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-7 rounded-xl shadow text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-xl font-bold">
                Farm Fresh
              </h3>
              <p className="text-gray-600 mt-3">
                Fresh products sourced directly from local farms.
              </p>
            </div>


            <div className="bg-white p-7 rounded-xl shadow text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold">
                Fair Prices
              </h3>
              <p className="text-gray-600 mt-3">
                Better prices for farmers and consumers.
              </p>
            </div>


            <div className="bg-white p-7 rounded-xl shadow text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold">
                No Unnecessary Middlemen
              </h3>
              <p className="text-gray-600 mt-3">
                Connect farmers and consumers through one platform.
              </p>
            </div>


            <div className="bg-white p-7 rounded-xl shadow text-center">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-bold">
                Local Delivery
              </h3>
              <p className="text-gray-600 mt-3">
                Products can be delivered within the selected service area.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= FOR FARMERS ================= */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-green-700 font-semibold">
              FOR FARMERS 👨‍🌾
            </p>

            <h2 className="text-4xl font-bold text-gray-800 mt-3">
              Sell Your Products Directly
            </h2>

            <p className="text-gray-600 text-lg mt-5 leading-relaxed">
              Are you a farmer? List your farm products on our platform
              and connect directly with consumers in your service area.
            </p>


            <div className="mt-6 space-y-3 text-gray-700">

              <p>✅ Add and manage your products</p>
              <p>✅ Set your own product prices</p>
              <p>✅ Receive customer orders</p>
              <p>✅ Manage available stock</p>
              <p>✅ Connect directly with consumers</p>

            </div>


            <Link
              to="/login"
              className="inline-block mt-7 bg-green-700 text-white px-7 py-3 rounded-lg hover:bg-green-800"
            >
              Join as Farmer 👨‍🌾
            </Link>

          </div>


          <div className="bg-green-50 p-12 rounded-2xl text-center">

            <div className="text-8xl">
              👨‍🌾
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mt-5">
              Grow Your Business
            </h3>

            <p className="text-gray-600 mt-3">
              Reach more customers and sell your farm products
              directly.
            </p>

          </div>

        </div>

      </section>


      {/* ================= FOR CONSUMERS ================= */}
      <section className="py-20 bg-green-50">

        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">

          <div className="bg-white p-12 rounded-2xl shadow text-center">

            <div className="text-8xl">
              🧺
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mt-5">
              Freshness You Can Trust
            </h3>

            <p className="text-gray-600 mt-3">
              Discover products from farmers near your location.
            </p>

          </div>


          <div>

            <p className="text-green-700 font-semibold">
              FOR CONSUMERS 🛒
            </p>

            <h2 className="text-4xl font-bold text-gray-800 mt-3">
              Fresh Products, Directly From Farmers
            </h2>

            <p className="text-gray-600 text-lg mt-5 leading-relaxed">
              Browse fresh agricultural products, compare prices
              and place your order from the comfort of your home.
            </p>


            <div className="mt-6 space-y-3 text-gray-700">

              <p>🥕 Browse fresh products</p>
              <p>🔎 Search and filter products</p>
              <p>🛒 Add products to cart</p>
              <p>📦 Place orders</p>
              <p>📍 Select your delivery location</p>

            </div>


            <Link
              to="/products"
              className="inline-block mt-7 bg-green-700 text-white px-7 py-3 rounded-lg hover:bg-green-800"
            >
              Explore Products 🛒
            </Link>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-12">

            <p className="text-green-700 font-semibold">
              HOW IT WORKS
            </p>

            <h2 className="text-4xl font-bold text-gray-800 mt-2">
              Simple Farm-to-Home Process
            </h2>

          </div>


          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-green-50 p-7 rounded-xl text-center">
              <div className="text-4xl font-bold text-green-700">
                01
              </div>
              <div className="text-5xl mt-4">
                🌾
              </div>
              <h3 className="text-xl font-bold mt-4">
                Farmer Lists Product
              </h3>
              <p className="text-gray-600 mt-3">
                Farmer adds product name, price, quantity and details.
              </p>
            </div>


            <div className="bg-green-50 p-7 rounded-xl text-center">
              <div className="text-4xl font-bold text-green-700">
                02
              </div>
              <div className="text-5xl mt-4">
                🔎
              </div>
              <h3 className="text-xl font-bold mt-4">
                Consumer Chooses
              </h3>
              <p className="text-gray-600 mt-3">
                Consumer browses products and selects what they need.
              </p>
            </div>


            <div className="bg-green-50 p-7 rounded-xl text-center">
              <div className="text-4xl font-bold text-green-700">
                03
              </div>
              <div className="text-5xl mt-4">
                🛒
              </div>
              <h3 className="text-xl font-bold mt-4">
                Place Order
              </h3>
              <p className="text-gray-600 mt-3">
                Consumer adds products to the cart and places an order.
              </p>
            </div>


            <div className="bg-green-50 p-7 rounded-xl text-center">
              <div className="text-4xl font-bold text-green-700">
                04
              </div>
              <div className="text-5xl mt-4">
                🚚
              </div>
              <h3 className="text-xl font-bold mt-4">
                Delivery
              </h3>
              <p className="text-gray-600 mt-3">
                Farmer receives the order and the product reaches the consumer.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= ORDER / CONTACT SECTION ================= */}
      <section className="py-20 bg-green-700 text-white">

        <div className="max-w-5xl mx-auto px-8 text-center">

          <div className="text-6xl">
            📩
          </div>

          <h2 className="text-4xl font-bold mt-5">
            Want to Place an Order?
          </h2>

          <p className="text-green-100 text-lg mt-5 max-w-2xl mx-auto">
            For product enquiries, bulk orders or special requirements,
            contact us. We will help connect you with available farmers.
          </p>


          <div className="mt-8 bg-white text-gray-800 rounded-xl p-7 max-w-xl mx-auto">

            <p className="text-lg">
              📧 <strong>Email:</strong>
              {" "}directfarm2home@gmail.com
            </p>

            <p className="text-lg mt-3">
              📞 <strong>Phone:</strong>
              {" "}+91 98765 43210
            </p>

            <p className="text-lg mt-3">
              📍 <strong>Service:</strong>
              {" "}Local Farm-to-Home Delivery
            </p>

          </div>


          <div className="flex justify-center gap-4 mt-8 flex-wrap">

            <a
              href="mailto:directfarm2home@gmail.com"
              className="bg-white text-green-700 px-7 py-3 rounded-lg font-semibold hover:bg-green-50"
            >
              📩 Mail Us for Order
            </a>

            <Link
              to="/products"
              className="border border-white px-7 py-3 rounded-lg font-semibold hover:bg-green-600"
            >
              🛒 Browse Products
            </Link>

          </div>

        </div>

      </section>


      {/* ================= CUSTOMER REVIEWS ================= */}
      <section className="py-20 bg-green-50">

        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-12">

            <p className="text-green-700 font-semibold">
              CUSTOMER REVIEWS
            </p>

            <h2 className="text-4xl font-bold text-gray-800 mt-2">
              What Our Users Say ⭐
            </h2>

          </div>


          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-7 rounded-xl shadow">

              <div className="text-yellow-500 text-xl">
                ★★★★★
              </div>

              <p className="text-gray-600 mt-4 leading-relaxed">
                "The vegetables were fresh and reasonably priced.
                I liked buying directly from a local farmer."
              </p>

              <h4 className="font-bold mt-5">
                — Priya
              </h4>

              <p className="text-gray-500 text-sm">
                Consumer
              </p>

            </div>


            <div className="bg-white p-7 rounded-xl shadow">

              <div className="text-yellow-500 text-xl">
                ★★★★★
              </div>

              <p className="text-gray-600 mt-4 leading-relaxed">
                "The platform makes it easy to find products
                from farmers near my location."
              </p>

              <h4 className="font-bold mt-5">
                — Rahul
              </h4>

              <p className="text-gray-500 text-sm">
                Consumer
              </p>

            </div>


            <div className="bg-white p-7 rounded-xl shadow">

              <div className="text-yellow-500 text-xl">
                ★★★★★
              </div>

              <p className="text-gray-600 mt-4 leading-relaxed">
                "As a farmer, I can list my products and
                receive orders directly from customers."
              </p>

              <h4 className="font-bold mt-5">
                — Ramesh
              </h4>

              <p className="text-gray-500 text-sm">
                Farmer
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="bg-gray-900 text-white py-20">

        <div className="max-w-4xl mx-auto px-8 text-center">

          <div className="text-6xl">
            🌱
          </div>

          <h2 className="text-4xl font-bold mt-5">
            Fresh Food. Fair Prices. Stronger Farmers.
          </h2>

          <p className="text-gray-300 text-lg mt-5">
            Direct Farm 2 Home helps farmers connect directly
            with consumers and build a stronger local food system.
          </p>


          <div className="flex justify-center gap-4 mt-8 flex-wrap">

            <Link
              to="/products"
              className="bg-green-600 px-7 py-3 rounded-lg font-semibold hover:bg-green-700"
            >
              🛒 Start Shopping
            </Link>

            <a
              href="mailto:directfarm2home@gmail.com"
              className="border border-white px-7 py-3 rounded-lg font-semibold hover:bg-gray-800"
            >
              📩 Contact Us
            </a>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-950 text-white">

        <div className="max-w-7xl mx-auto px-8 py-14 grid md:grid-cols-4 gap-10">

          {/* About */}
          <div>

            <h2 className="text-xl font-bold">
              🌾 Direct Farm 2 Home
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Connecting farmers directly with consumers
              for fresh products and fair prices.
            </p>

          </div>


          {/* Quick Links */}
          <div>

            <h3 className="font-bold text-lg">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 mt-4">

              <Link
                to="/"
                className="text-gray-400 hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="text-gray-400 hover:text-white"
              >
                Products
              </Link>

              <Link
                to="/login"
                className="text-gray-400 hover:text-white"
              >
                Login
              </Link>

            </div>

          </div>


          {/* For Users */}
          <div>

            <h3 className="font-bold text-lg">
              For Users
            </h3>

            <div className="flex flex-col gap-3 mt-4">

              <Link
                to="/login"
                className="text-gray-400 hover:text-white"
              >
                Join as Farmer
              </Link>

              <Link
                to="/products"
                className="text-gray-400 hover:text-white"
              >
                Shop Products
              </Link>

              <a
                href="mailto:directfarm2home@gmail.com"
                className="text-gray-400 hover:text-white"
              >
                Contact Support
              </a>

            </div>

          </div>


          {/* Contact */}
          <div>

            <h3 className="font-bold text-lg">
              Contact Us
            </h3>

            <div className="text-gray-400 mt-4 space-y-3">

              <p>
                📧 directfarm2home@gmail.com
              </p>

              <p>
                📞 +91 98765 43210
              </p>

              <p>
                📍 Local Farm-to-Home Service
              </p>

            </div>

          </div>

        </div>


        <div className="border-t border-gray-800 text-center py-5">

          <p className="text-gray-500 text-sm">
            © 2026 Direct Farm 2 Home. All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Home;

