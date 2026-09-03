// import { useState } from "react";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "../../firebase/firebase";
// import { useNavigate } from "react-router-dom";

// function AddProduct() {
//   const navigate = useNavigate();

//   const [product, setProduct] = useState({
//     name: "",
//     category: "",
//     price: "",
//     quantity: "",
//     description: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setProduct({
//       ...product,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);

//     try {
//   await addDoc(collection(db, "products"), {
//     ...product,
//     createdAt: new Date(),
//   });

//   alert("✅ Product Added Successfully!");

//   navigate("/my-products");

// } catch (error) {
//   console.error("Firebase Error:", error);
//   alert(error.message);
// }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-green-50 flex justify-center items-center p-10">

//       <div className="bg-white w-full max-w-3xl rounded-3xl shadow-xl p-10">

//         <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">
//           🌾 Add New Product
//         </h1>

//         <form
//           onSubmit={handleSubmit}
//           className="space-y-5"
//         >

//           <input
//             type="text"
//             name="name"
//             placeholder="Product Name"
//             value={product.name}
//             onChange={handleChange}
//             className="w-full border rounded-lg p-3"
//             required
//           />

//           <input
//             type="text"
//             name="category"
//             placeholder="Category"
//             value={product.category}
//             onChange={handleChange}
//             className="w-full border rounded-lg p-3"
//             required
//           />

//           <input
//             type="number"
//             name="price"
//             placeholder="Price"
//             value={product.price}
//             onChange={handleChange}
//             className="w-full border rounded-lg p-3"
//             required
//           />

//           <input
//             type="number"
//             name="quantity"
//             placeholder="Quantity"
//             value={product.quantity}
//             onChange={handleChange}
//             className="w-full border rounded-lg p-3"
//             required
//           />

//           <textarea
//             name="description"
//             rows="5"
//             placeholder="Description"
//             value={product.description}
//             onChange={handleChange}
//             className="w-full border rounded-lg p-3"
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800"
//           >
//             {loading ? "Saving..." : "Add Product"}
//           </button>

//         </form>

//       </div>

//     </div>
//   );
// }

// export default AddProduct;


import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await addDoc(collection(db, "products"), {
        ...product,
        price: Number(product.price),
        quantity: Number(product.quantity),
        createdAt: new Date(),
      });

      alert("✅ Product Added Successfully!");

      navigate("/farmer-dashboard");
    } catch (error) {
      console.error("Firebase Error:", error);
      alert("❌ " + error.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-green-50 flex justify-center items-center p-6">

      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🌾</div>

          <h1 className="text-3xl font-bold text-green-700">
            Add New Product
          </h1>

          <p className="text-gray-500 mt-2">
            Add your fresh farm products for customers
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Product Name */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Product Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Example: Fresh Tomatoes"
              value={product.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Category
            </label>

            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="">Select Category</option>
              <option value="Vegetables">🥕 Vegetables</option>
              <option value="Fruits">🍎 Fruits</option>
              <option value="Grains">🌾 Grains</option>
              <option value="Dairy">🥛 Dairy</option>
              <option value="Organic">🌱 Organic Products</option>
            </select>
          </div>

          {/* Price + Quantity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Price (₹)
              </label>

              <input
                type="number"
                name="price"
                placeholder="Example: 60"
                value={product.price}
                onChange={handleChange}
                min="0"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Quantity (kg)
              </label>

              <input
                type="number"
                name="quantity"
                placeholder="Example: 50"
                value={product.quantity}
                onChange={handleChange}
                min="0"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Product Description
            </label>

            <textarea
              name="description"
              rows="5"
              placeholder="Describe your product..."
              value={product.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Product Preview */}
          <div className="bg-green-50 border border-green-100 rounded-2xl p-5">

            <h2 className="font-bold text-green-700 mb-3">
              🌱 Product Preview
            </h2>

            <div className="flex justify-between items-center">

              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {product.name || "Product Name"}
                </h3>

                <p className="text-gray-500">
                  {product.category || "Category"}
                </p>
              </div>

              <div className="text-right">
                <p className="text-2xl font-bold text-green-700">
                  ₹{product.price || "0"}
                </p>

                <p className="text-sm text-gray-500">
                  {product.quantity || "0"} kg available
                </p>
              </div>

            </div>

            {product.description && (
              <p className="text-gray-600 text-sm mt-4">
                {product.description}
              </p>
            )}

          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-3">

            <button
              type="button"
              onClick={() => navigate("/farmer-dashboard")}
              className="w-1/3 border border-gray-300 text-gray-700 py-3 rounded-xl hover:bg-gray-100"
            >
              ← Back
            </button>

            <button
              type="submit"
              disabled={loading}
              className="w-2/3 bg-green-700 text-white py-3 rounded-xl font-semibold hover:bg-green-800 disabled:bg-gray-400"
            >
              {loading ? "Saving Product..." : "🌱 Add Product"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddProduct;

