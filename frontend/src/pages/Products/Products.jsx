// import { Link } from "react-router-dom";

// const products = [
//   {
//     id: 1,
//     name: "Fresh Tomatoes",
//     price: 40,
//     unit: "Kg",
//     farmer: "Ravi Farms",
//   },
//   {
//     id: 2,
//     name: "Organic Potatoes",
//     price: 35,
//     unit: "Kg",
//     farmer: "Green Valley Farm",
//   },
//   {
//     id: 3,
//     name: "Fresh Mangoes",
//     price: 80,
//     unit: "Kg",
//     farmer: "Sunrise Farm",
//   },
//   {
//     id: 4,
//     name: "Fresh Carrots",
//     price: 50,
//     unit: "Kg",
//     farmer: "Nature Farm",
//   },
// ];

// function Products() {
//   return (
//     <div className="min-h-screen bg-green-50">

//       <nav className="bg-green-700 text-white px-8 py-5 flex justify-between">
//         <h1 className="text-2xl font-bold">
//           🌾 Direct Farm 2 Home
//         </h1>

//         <div className="flex gap-6">
//           <Link to="/">Home</Link>
//           <Link to="/consumer-dashboard">Dashboard</Link>
//         </div>
//       </nav>

//       <main className="max-w-7xl mx-auto p-8">

//         <h1 className="text-4xl font-bold text-gray-800">
//           Fresh Farm Products 🥕
//         </h1>

//         <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-xl shadow-lg overflow-hidden"
//             >

//               <div className="h-40 bg-green-100 flex items-center justify-center text-6xl">
//                 🥬
//               </div>

//               <div className="p-5">

//                 <h2 className="text-xl font-bold">
//                   {product.name}
//                 </h2>

//                 <p className="text-gray-500 mt-2">
//                   👨‍🌾 {product.farmer}
//                 </p>

//                 <p className="text-green-700 font-bold text-xl mt-3">
//                   ₹{product.price} / {product.unit}
//                 </p>

//                 <button className="w-full mt-4 bg-green-700 text-white py-2 rounded-lg hover:bg-green-800">
//                   Add to Cart 🛒
//                 </button>

//               </div>
//             </div>
//           ))}

//         </div>

//       </main>
//     </div>
//   );
// }

// export default Products;



import { Link } from "react-router-dom";
import { useState } from "react";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const products = [
    {
      name: "Fresh Tomatoes",
      category: "Vegetables",
      price: 40,
      unit: "kg",
      farmer: "Ramesh Farm",
      location: "Bengaluru",
      image:
        "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600",
    },
    {
      name: "Fresh Potatoes",
      category: "Vegetables",
      price: 35,
      unit: "kg",
      farmer: "Green Valley Farm",
      location: "Bengaluru",
      image:
        "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600",
    },
    {
      name: "Fresh Carrots",
      category: "Vegetables",
      price: 50,
      unit: "kg",
      farmer: "Nature Fresh Farm",
      location: "Mysuru",
      image:
        "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=600",
    },
    {
      name: "Fresh Onions",
      category: "Vegetables",
      price: 45,
      unit: "kg",
      farmer: "Sri Lakshmi Farm",
      location: "Hassan",
      image:
        "https://images.unsplash.com/photo-1508747703725-719777637510?w=600",
    },
    {
      name: "Fresh Spinach",
      category: "Vegetables",
      price: 30,
      unit: "bundle",
      farmer: "Green Leaf Farm",
      location: "Bengaluru",
      image:
        "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600",
    },
    {
      name: "Fresh Cauliflower",
      category: "Vegetables",
      price: 55,
      unit: "kg",
      farmer: "Organic Fields",
      location: "Tumakuru",
      image:
        "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=600",
    },
    {
      name: "Fresh Mangoes",
      category: "Fruits",
      price: 80,
      unit: "kg",
      farmer: "Sunrise Farm",
      location: "Kolar",
      image:
        "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600",
    },
    {
      name: "Fresh Bananas",
      category: "Fruits",
      price: 55,
      unit: "dozen",
      farmer: "Sri Ganesh Farm",
      location: "Chikkaballapur",
      image:
        "https://images.unsplash.com/photo-1574226516831-e1dff420e8f8?w=600",
    },
    {
      name: "Fresh Apples",
      category: "Fruits",
      price: 140,
      unit: "kg",
      farmer: "Hill View Farm",
      location: "Shimla",
      image:
        "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600",
    },
    {
      name: "Fresh Oranges",
      category: "Fruits",
      price: 90,
      unit: "kg",
      farmer: "Orange Valley Farm",
      location: "Coorg",
      image:
        "https://images.unsplash.com/photo-1547514701-42782101795e?w=600",
    },
    {
      name: "Organic Rice",
      category: "Grains",
      price: 65,
      unit: "kg",
      farmer: "Organic Fields",
      location: "Mandya",
      image:
        "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=600",
    },
    {
      name: "Wheat",
      category: "Grains",
      price: 48,
      unit: "kg",
      farmer: "Golden Harvest Farm",
      location: "Dharwad",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600",
    },
    {
      name: "Green Chillies",
      category: "Spices",
      price: 60,
      unit: "kg",
      farmer: "Spice Garden Farm",
      location: "Mysuru",
      image:
        "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=600",
    },
    {
      name: "Fresh Ginger",
      category: "Spices",
      price: 100,
      unit: "kg",
      farmer: "Malnad Farm",
      location: "Shivamogga",
      image:
        "https://images.unsplash.com/photo-1615485291234-9d694218aeb3?w=600",
    },
    {
      name: "Fresh Milk",
      category: "Dairy",
      price: 55,
      unit: "liter",
      farmer: "Healthy Cow Farm",
      location: "Bengaluru",
      image:
        "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600",
    },
    {
      name: "Farm Fresh Eggs",
      category: "Dairy",
      price: 90,
      unit: "12 eggs",
      farmer: "Happy Hen Farm",
      location: "Bengaluru",
      image:
        "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=600",
    },
  ];

  const categories = [
    "All",
    "Vegetables",
    "Fruits",
    "Grains",
    "Spices",
    "Dairy",
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

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

        <div className="flex gap-6 items-center">

          <Link
            to="/"
            className="hover:text-yellow-300"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-yellow-300 font-semibold"
          >
            Products
          </Link>

          <Link
            to="/consumer-dashboard"
            className="hover:text-yellow-300"
          >
            Dashboard
          </Link>

          <Link
            to="/login"
            className="bg-white text-green-700 px-5 py-2 rounded-lg font-semibold"
          >
            Login
          </Link>

        </div>

      </nav>


      {/* ================= PAGE HEADER ================= */}

      <section className="bg-green-700 text-white py-16">

        <div className="max-w-7xl mx-auto px-8 text-center">

          <p className="text-green-200 font-semibold">
            🌱 FARM FRESH MARKETPLACE
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Fresh Products From Local Farmers
          </h1>

          <p className="text-green-100 text-lg mt-5 max-w-2xl mx-auto">
            Browse fresh vegetables, fruits, grains, spices and dairy
            products directly from farmers.
          </p>

        </div>

      </section>


      {/* ================= SEARCH + FILTER ================= */}

      <section className="max-w-7xl mx-auto px-8 py-10">

        <div className="bg-white p-6 rounded-2xl shadow">

          <div className="flex flex-col md:flex-row gap-4">

            <input
              type="text"
              placeholder="🔎 Search for tomatoes, mangoes, rice..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 border border-gray-300 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />

          </div>


          {/* Categories */}

          <div className="flex gap-3 flex-wrap mt-6">

            {categories.map((item) => (

              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`px-5 py-2 rounded-full font-semibold transition ${
                  category === item
                    ? "bg-green-700 text-white"
                    : "bg-green-50 text-green-700 hover:bg-green-100"
                }`}
              >
                {item}
              </button>

            ))}

          </div>

        </div>

      </section>


      {/* ================= PRODUCT COUNT ================= */}

      <section className="max-w-7xl mx-auto px-8">

        <div className="flex justify-between items-center mb-7">

          <div>

            <h2 className="text-3xl font-bold text-gray-800">
              Available Products 🛒
            </h2>

            <p className="text-gray-500 mt-2">
              {filteredProducts.length} products available
            </p>

          </div>

          <div className="text-green-700 font-semibold">
            📍 Local Farmers
          </div>

        </div>


        {/* ================= PRODUCT GRID ================= */}

        {filteredProducts.length > 0 ? (

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 pb-16">

            {filteredProducts.map((product, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-2xl transition duration-300"
              >

                {/* Product Image */}

                <div className="relative">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-52 object-cover"
                  />

                  <span className="absolute top-3 left-3 bg-white text-green-700 px-3 py-1 rounded-full text-xs font-bold shadow">
                    {product.category}
                  </span>

                  <button
                    className="absolute top-3 right-3 bg-white rounded-full w-10 h-10 shadow text-xl"
                    title="Save product"
                  >
                    ❤️
                  </button>

                </div>


                {/* Product Details */}

                <div className="p-5">

                  <h3 className="text-xl font-bold text-gray-800">
                    {product.name}
                  </h3>

                  <div className="mt-3 space-y-1">

                    <p className="text-sm text-gray-500">
                      👨‍🌾 {product.farmer}
                    </p>

                    <p className="text-sm text-gray-500">
                      📍 {product.location}
                    </p>

                    <p className="text-sm text-green-600">
                      ✓ Fresh from farm
                    </p>

                  </div>


                  {/* Rating */}

                  <div className="flex items-center gap-2 mt-4">

                    <span className="text-yellow-500">
                      ★★★★★
                    </span>

                    <span className="text-sm text-gray-500">
                      4.8
                    </span>

                  </div>


                  {/* Price */}

                  <div className="flex justify-between items-center mt-5">

                    <div>

                      <span className="text-2xl font-bold text-green-700">
                        ₹{product.price}
                      </span>

                      <span className="text-gray-500 text-sm">
                        /{product.unit}
                      </span>

                    </div>

                  </div>


                  {/* Add Cart */}

                  <button
                    onClick={() =>
                      alert(`${product.name} added to cart!`)
                    }
                    className="w-full mt-5 bg-green-700 text-white py-3 rounded-xl font-semibold hover:bg-green-800 transition"
                  >
                    🛒 Add to Cart
                  </button>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="bg-white rounded-xl p-12 text-center mb-16">

            <div className="text-6xl">
              🔎
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mt-4">
              No Products Found
            </h3>

            <p className="text-gray-500 mt-2">
              Try searching for another product or category.
            </p>

          </div>

        )}

      </section>


      {/* ================= FARMER CTA ================= */}

      <section className="bg-green-700 py-16">

        <div className="max-w-5xl mx-auto px-8 text-center text-white">

          <div className="text-6xl">
            👨‍🌾
          </div>

          <h2 className="text-4xl font-bold mt-5">
            Are You a Farmer?
          </h2>

          <p className="text-green-100 text-lg mt-4">
            Sell your fresh farm products directly to consumers
            through Direct Farm 2 Home.
          </p>

          <Link
            to="/login"
            className="inline-block mt-7 bg-white text-green-700 px-8 py-3 rounded-xl font-bold hover:bg-green-50"
          >
            Join as Farmer →
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
              Connecting farmers directly with consumers
              for fresh products and fair prices.
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
                to="/login"
                className="text-gray-400 hover:text-white"
              >
                Login
              </Link>

            </div>

          </div>


          <div>

            <h3 className="font-bold">
              Categories
            </h3>

            <div className="flex flex-col gap-3 mt-4 text-gray-400">

              <p>🥕 Vegetables</p>
              <p>🍎 Fruits</p>
              <p>🌾 Grains</p>
              <p>🌶️ Spices</p>

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

export default Products;

