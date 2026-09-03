// import { Link } from "react-router-dom";

// function ConsumerDashboard() {
//   return (
//     <div className="min-h-screen bg-gray-100">

//       <nav className="bg-green-700 text-white px-8 py-5 flex justify-between">
//         <h1 className="text-2xl font-bold">🛒 Consumer Panel</h1>

//         <div className="flex gap-6">
//           <Link to="/" className="hover:text-yellow-300">
//             Home
//           </Link>

//           <Link to="/products" className="hover:text-yellow-300">
//             Products
//           </Link>
//         </div>
//       </nav>

//       <main className="p-8">

//         <h1 className="text-4xl font-bold text-gray-800">
//           Welcome 👋
//         </h1>

//         <p className="text-gray-600 mt-2">
//           Find fresh products from farmers near you.
//         </p>

//         <div className="grid md:grid-cols-4 gap-6 mt-8">

//           <div className="bg-white p-6 rounded-xl shadow">
//             <p className="text-gray-500">Orders</p>
//             <h2 className="text-3xl font-bold mt-2">12</h2>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow">
//             <p className="text-gray-500">Cart Items</p>
//             <h2 className="text-3xl font-bold mt-2">4</h2>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow">
//             <p className="text-gray-500">Wishlist</p>
//             <h2 className="text-3xl font-bold mt-2">8</h2>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow">
//             <p className="text-gray-500">Nearby Farmers</p>
//             <h2 className="text-3xl font-bold mt-2">15</h2>
//           </div>

//         </div>

//         <div className="mt-10">

//           <h2 className="text-2xl font-bold mb-5">
//             Explore Fresh Products
//           </h2>

//           <Link
//             to="/products"
//             className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800"
//           >
//             🛒 Browse Products
//           </Link>

//         </div>

//       </main>
//     </div>
//   );
// }

// export default ConsumerDashboard;


import { Link } from "react-router-dom";
import { useState } from "react";

function ConsumerDashboard() {
  const [search, setSearch] = useState("");

  const products = [
    {
      name: "Fresh Tomatoes",
      category: "Vegetables",
      price: 40,
      unit: "kg",
      farmer: "Ramesh Farm",
      location: "Bengaluru",
      image:
        "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500",
    },
    {
      name: "Fresh Potatoes",
      category: "Vegetables",
      price: 35,
      unit: "kg",
      farmer: "Green Valley Farm",
      location: "Bengaluru",
      image:
        "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500",
    },
    {
      name: "Fresh Carrots",
      category: "Vegetables",
      price: 50,
      unit: "kg",
      farmer: "Nature Fresh Farm",
      location: "Bengaluru",
      image:
        "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=500",
    },
    {
      name: "Fresh Mangoes",
      category: "Fruits",
      price: 80,
      unit: "kg",
      farmer: "Sunrise Farm",
      location: "Bengaluru",
      image:
        "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500",
    },
    {
      name: "Fresh Onions",
      category: "Vegetables",
      price: 45,
      unit: "kg",
      farmer: "Sri Lakshmi Farm",
      location: "Bengaluru",
      image:
        "https://images.unsplash.com/photo-1508747703725-719777637510?w=500",
    },
    {
      name: "Organic Rice",
      category: "Grains",
      price: 65,
      unit: "kg",
      farmer: "Organic Fields",
      location: "Bengaluru",
      image:
        "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=500",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-green-50">

      {/* ================= NAVBAR ================= */}

      <nav className="bg-green-700 text-white px-8 py-5 flex justify-between items-center">

        <Link
          to="/"
          className="text-2xl font-bold"
        >
          🌾 Direct Farm 2 Home
        </Link>

        <div className="flex items-center gap-6">

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
            to="/consumer-dashboard"
            className="font-semibold text-yellow-300"
          >
            Dashboard
          </Link>

          <Link
            to="/login"
            className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-50"
          >
            Logout
          </Link>

        </div>

      </nav>


      {/* ================= WELCOME ================= */}

      <section className="max-w-7xl mx-auto px-8 pt-10">

        <div className="bg-green-700 rounded-2xl p-8 md:p-10 text-white">

          <div className="grid md:grid-cols-2 items-center gap-8">

            <div>

              <p className="text-green-200 font-semibold">
                CONSUMER DASHBOARD 🛒
              </p>

              <h1 className="text-4xl md:text-5xl font-bold mt-3">
                Welcome Back!
              </h1>

              <p className="text-green-100 text-lg mt-4">
                Discover fresh products directly from local farmers
                and get them delivered to your home.
              </p>

              <Link
                to="/products"
                className="inline-block mt-6 bg-white text-green-700 px-7 py-3 rounded-lg font-semibold hover:bg-green-50"
              >
                Explore Products →
              </Link>

            </div>

            <div className="text-center hidden md:block">

              <div className="text-9xl">
                🧺
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= QUICK STATS ================= */}

      <section className="max-w-7xl mx-auto px-8 py-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-3xl">
              🛒
            </div>

            <h3 className="text-2xl font-bold text-green-700 mt-3">
              12
            </h3>

            <p className="text-gray-500">
              Total Orders
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-3xl">
              📦
            </div>

            <h3 className="text-2xl font-bold text-green-700 mt-3">
              2
            </h3>

            <p className="text-gray-500">
              Active Orders
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-3xl">
              ❤️
            </div>

            <h3 className="text-2xl font-bold text-green-700 mt-3">
              8
            </h3>

            <p className="text-gray-500">
              Saved Products
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-3xl">
              ⭐
            </div>

            <h3 className="text-2xl font-bold text-green-700 mt-3">
              4.8
            </h3>

            <p className="text-gray-500">
              Your Rating
            </p>
          </div>

        </div>

      </section>


      {/* ================= SEARCH ================= */}

      <section className="max-w-7xl mx-auto px-8">

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-2xl font-bold text-gray-800">
            Find Fresh Products 🔎
          </h2>

          <div className="mt-5 flex flex-col md:flex-row gap-4">

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search vegetables, fruits, grains..."
              className="flex-1 border border-gray-300 rounded-lg px-5 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />

            <Link
              to="/products"
              className="bg-green-700 text-white px-7 py-3 rounded-lg text-center font-semibold"
            >
              View All Products
            </Link>

          </div>

        </div>

      </section>


      {/* ================= CATEGORIES ================= */}

      <section className="max-w-7xl mx-auto px-8 py-10">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold text-gray-800">
            Shop by Category
          </h2>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">

          <div className="bg-white rounded-xl p-5 text-center shadow hover:shadow-lg cursor-pointer">
            <div className="text-4xl">🥬</div>
            <p className="font-semibold mt-3">
              Vegetables
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 text-center shadow hover:shadow-lg cursor-pointer">
            <div className="text-4xl">🍎</div>
            <p className="font-semibold mt-3">
              Fruits
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 text-center shadow hover:shadow-lg cursor-pointer">
            <div className="text-4xl">🌾</div>
            <p className="font-semibold mt-3">
              Grains
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 text-center shadow hover:shadow-lg cursor-pointer">
            <div className="text-4xl">🌶️</div>
            <p className="font-semibold mt-3">
              Spices
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 text-center shadow hover:shadow-lg cursor-pointer">
            <div className="text-4xl">🥛</div>
            <p className="font-semibold mt-3">
              Dairy
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 text-center shadow hover:shadow-lg cursor-pointer">
            <div className="text-4xl">🌱</div>
            <p className="font-semibold mt-3">
              Organic
            </p>
          </div>

        </div>

      </section>


      {/* ================= RECOMMENDED PRODUCTS ================= */}

      <section className="bg-white py-16">

        <div className="max-w-7xl mx-auto px-8">

          <div className="flex justify-between items-center mb-8">

            <div>

              <p className="text-green-700 font-semibold">
                FRESH TODAY
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-1">
                Recommended For You 🥕
              </h2>

            </div>

            <Link
              to="/products"
              className="text-green-700 font-semibold hover:underline"
            >
              View All →
            </Link>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {filteredProducts.map((product, index) => (

              <div
                key={index}
                className="bg-green-50 rounded-xl overflow-hidden shadow hover:shadow-xl transition"
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-52 object-cover"
                />

                <div className="p-5">

                  <div className="flex justify-between items-start">

                    <div>

                      <h3 className="text-xl font-bold text-gray-800">
                        {product.name}
                      </h3>

                      <p className="text-sm text-green-700 mt-1">
                        {product.category}
                      </p>

                    </div>

                    <span className="text-yellow-500">
                      ⭐ 4.8
                    </span>

                  </div>


                  <div className="mt-4">

                    <p className="text-gray-500 text-sm">
                      👨‍🌾 {product.farmer}
                    </p>

                    <p className="text-gray-500 text-sm mt-1">
                      📍 {product.location}
                    </p>

                  </div>


                  <div className="flex justify-between items-center mt-5">

                    <div>

                      <span className="text-green-700 font-bold text-xl">
                        ₹{product.price}
                      </span>

                      <span className="text-gray-500">
                        /{product.unit}
                      </span>

                    </div>

                    <Link
                      to="/products"
                      className="bg-green-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-800"
                    >
                      Add 🛒
                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= ACTIVE ORDERS ================= */}

      <section className="max-w-7xl mx-auto px-8 py-16">

        <div className="flex justify-between items-center mb-7">

          <div>

            <p className="text-green-700 font-semibold">
              YOUR ORDERS
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-1">
              Recent Orders 📦
            </h2>

          </div>

        </div>


        <div className="bg-white rounded-xl shadow overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead className="bg-green-50">

                <tr>

                  <th className="px-6 py-4">
                    Order
                  </th>

                  <th className="px-6 py-4">
                    Product
                  </th>

                  <th className="px-6 py-4">
                    Farmer
                  </th>

                  <th className="px-6 py-4">
                    Amount
                  </th>

                  <th className="px-6 py-4">
                    Status
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-t">

                  <td className="px-6 py-5 font-semibold">
                    #DF1024
                  </td>

                  <td className="px-6 py-5">
                    Tomatoes - 5 kg
                  </td>

                  <td className="px-6 py-5">
                    Ramesh Farm
                  </td>

                  <td className="px-6 py-5 font-semibold">
                    ₹200
                  </td>

                  <td className="px-6 py-5">

                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                      Processing
                    </span>

                  </td>

                </tr>


                <tr className="border-t">

                  <td className="px-6 py-5 font-semibold">
                    #DF1018
                  </td>

                  <td className="px-6 py-5">
                    Organic Rice - 5 kg
                  </td>

                  <td className="px-6 py-5">
                    Organic Fields
                  </td>

                  <td className="px-6 py-5 font-semibold">
                    ₹325
                  </td>

                  <td className="px-6 py-5">

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      Delivered
                    </span>

                  </td>

                </tr>


                <tr className="border-t">

                  <td className="px-6 py-5 font-semibold">
                    #DF1007
                  </td>

                  <td className="px-6 py-5">
                    Mangoes - 3 kg
                  </td>

                  <td className="px-6 py-5">
                    Sunrise Farm
                  </td>

                  <td className="px-6 py-5 font-semibold">
                    ₹240
                  </td>

                  <td className="px-6 py-5">

                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      Out for Delivery
                    </span>

                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </section>


      {/* ================= FARMER CONNECTION ================= */}

      <section className="bg-green-700 py-16">

        <div className="max-w-5xl mx-auto px-8 text-center text-white">

          <div className="text-6xl">
            👨‍🌾🤝🛒
          </div>

          <h2 className="text-4xl font-bold mt-5">
            Buy Directly From Farmers
          </h2>

          <p className="text-green-100 text-lg mt-4">
            Your purchase supports local farmers and helps create
            a fairer farm-to-home supply chain.
          </p>

          <Link
            to="/products"
            className="inline-block mt-7 bg-white text-green-700 px-8 py-3 rounded-lg font-bold hover:bg-green-50"
          >
            Shop Fresh Products 🛒
          </Link>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="bg-gray-950 text-white">

        <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-4 gap-10">

          <div>

            <h2 className="text-xl font-bold">
              🌾 Direct Farm 2 Home
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Fresh products directly from local farmers
              to your home.
            </p>

          </div>


          <div>

            <h3 className="font-bold">
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
                to="/consumer-dashboard"
                className="text-gray-400 hover:text-white"
              >
                Dashboard
              </Link>

            </div>

          </div>


          <div>

            <h3 className="font-bold">
              Consumer
            </h3>

            <div className="flex flex-col gap-3 mt-4">

              <Link
                to="/products"
                className="text-gray-400 hover:text-white"
              >
                Shop Products
              </Link>

              <a
                href="#"
                className="text-gray-400 hover:text-white"
              >
                My Orders
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-white"
              >
                Help & Support
              </a>

            </div>

          </div>


          <div>

            <h3 className="font-bold">
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

export default ConsumerDashboard;

