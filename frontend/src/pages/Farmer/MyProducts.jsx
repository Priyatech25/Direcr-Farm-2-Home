// import { Link } from "react-router-dom";
// import {
//   FaEdit,
//   FaTrash,
//   FaEye,
//   FaPlus,
//   FaSearch,
// } from "react-icons/fa";
// import { useState } from "react";

// function MyProducts() {
//   const [search, setSearch] = useState("");

//   const [products] = useState([
//     {
//       id: 1,
//       name: "Fresh Tomato",
//       category: "Vegetable",
//       price: 40,
//       quantity: 50,
//       status: "Available",
//       image:
//         "https://images.unsplash.com/photo-1546470427-e5ac89cd0b9d?w=500",
//     },
//     {
//       id: 2,
//       name: "Organic Mango",
//       category: "Fruit",
//       price: 120,
//       quantity: 25,
//       status: "Available",
//       image:
//         "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500",
//     },
//     {
//       id: 3,
//       name: "Potato",
//       category: "Vegetable",
//       price: 35,
//       quantity: 80,
//       status: "Available",
//       image:
//         "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500",
//     },
//   ]);

//   const filteredProducts = products.filter((item) =>
//     item.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">

//       <div className="flex justify-between items-center mb-8">

//         <h1 className="text-4xl font-bold text-green-700">
//           🌾 My Products
//         </h1>

//         <Link to="/add-product">
//           <button className="bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-green-800">
//             <FaPlus />
//             Add Product
//           </button>
//         </Link>

//       </div>

//       {/* Search */}

//       <div className="bg-white rounded-xl shadow-lg p-5 mb-8 flex items-center gap-3">

//         <FaSearch className="text-gray-500" />

//         <input
//           type="text"
//           placeholder="Search Product..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="outline-none w-full"
//         />

//       </div>

//       {/* Product Grid */}

//       <div className="grid md:grid-cols-3 gap-8">

//         {filteredProducts.map((item) => (

//           <div
//             key={item.id}
//             className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
//           >

//             <img
//               src={item.image}
//               alt={item.name}
//               className="h-52 w-full object-cover"
//             />

//             <div className="p-5">

//               <h2 className="text-2xl font-bold">
//                 {item.name}
//               </h2>

//               <p className="text-gray-500 mt-1">
//                 {item.category}
//               </p>

//               <div className="mt-4 space-y-1">

//                 <p>
//                   <strong>Price :</strong> ₹{item.price}/Kg
//                 </p>

//                 <p>
//                   <strong>Quantity :</strong> {item.quantity} Kg
//                 </p>

//                 <p>
//                   <strong>Status :</strong>

//                   <span className="text-green-700 font-semibold ml-2">
//                     {item.status}
//                   </span>

//                 </p>

//               </div>

//               {/* Buttons */}

//               <div className="flex justify-between mt-6">

//                 <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600">
//                   <FaEye />
//                   View
//                 </button>

//                 <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-yellow-600">
//                   <FaEdit />
//                   Edit
//                 </button>

//                 <button className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-700">
//                   <FaTrash />
//                   Delete
//                 </button>

//               </div>

//             </div>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// }

// export default MyProducts;



// import { useEffect, useState } from "react";
// import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
// import { db } from "../../firebase/firebase";

// function MyProducts() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchProducts = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "products"));

//       const productList = querySnapshot.docs.map((item) => ({
//         id: item.id,
//         ...item.data(),
//       }));

//       setProducts(productList);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       alert("Unable to load products.");
//     }

//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this product?"
//     );

//     if (!confirmDelete) return;

//     try {
//       await deleteDoc(doc(db, "products", id));

//       setProducts((currentProducts) =>
//         currentProducts.filter((product) => product.id !== id)
//       );

//       alert("Product deleted successfully.");
//     } catch (error) {
//       console.error("Delete error:", error);
//       alert("Unable to delete product.");
//     }
//   };

//   return (
//     <div className="my-products-page">

//       {/* Header */}
//       <div className="page-header">
//         <div>
//           <p className="subtitle">FARMER PORTAL</p>
//           <h1>My Products 🌾</h1>
//           <p className="description">
//             Manage the products you have added to FarmDirect.
//           </p>
//         </div>

//         <div className="product-count">
//           <strong>{products.length}</strong>
//           <span>Products</span>
//         </div>
//       </div>

//       {/* Loading */}
//       {loading && (
//         <div className="message-box">
//           Loading your products...
//         </div>
//       )}

//       {/* No Products */}
//       {!loading && products.length === 0 && (
//         <div className="empty-box">
//           <div className="empty-icon">🌱</div>

//           <h2>No Products Yet</h2>

//           <p>
//             You haven't added any farm products yet.
//           </p>
//         </div>
//       )}

//       {/* Products */}
//       {!loading && products.length > 0 && (
//         <div className="products-grid">

//           {products.map((product) => (
//             <div className="product-card" key={product.id}>

//               <div className="product-image">
//                 <span>🥕</span>
//               </div>

//               <div className="product-content">

//                 <span className="category">
//                   {product.category || "Farm Product"}
//                 </span>

//                 <h2>
//                   {product.name || "Unnamed Product"}
//                 </h2>

//                 <p className="product-description">
//                   {product.description || "Fresh farm product."}
//                 </p>

//                 <div className="product-details">

//                   <div>
//                     <small>Price</small>
//                     <strong>
//                       ₹{product.price || 0}
//                     </strong>
//                   </div>

//                   <div>
//                     <small>Quantity</small>
//                     <strong>
//                       {product.quantity || 0} kg
//                     </strong>
//                   </div>

//                 </div>

//                 <div className="stock">
//                   <span className="stock-dot"></span>
//                   Available
//                 </div>

//                 <button
//                   className="delete-button"
//                   onClick={() => handleDelete(product.id)}
//                 >
//                   🗑 Delete Product
//                 </button>

//               </div>

//             </div>
//           ))}

//         </div>
//       )}

//       <style>
//         {`
//         .my-products-page {
//           min-height: 100vh;
//           background: #f5f8f3;
//           padding: 40px;
//           font-family: Arial, sans-serif;
//           color: #26382b;
//         }

//         .page-header {
//           max-width: 1200px;
//           margin: 0 auto 30px;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         .subtitle {
//           margin: 0 0 8px;
//           font-size: 11px;
//           font-weight: bold;
//           letter-spacing: 2px;
//           color: #56834f;
//         }

//         .page-header h1 {
//           margin: 0;
//           font-size: 30px;
//         }

//         .description {
//           margin-top: 8px;
//           color: #7c877f;
//           font-size: 13px;
//         }

//         .product-count {
//           background: white;
//           border: 1px solid #dfe8dc;
//           border-radius: 14px;
//           padding: 15px 22px;
//           text-align: center;
//         }

//         .product-count strong {
//           display: block;
//           font-size: 24px;
//           color: #397343;
//         }

//         .product-count span {
//           font-size: 11px;
//           color: #7d887f;
//         }

//         .products-grid {
//           max-width: 1200px;
//           margin: auto;
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 22px;
//         }

//         .product-card {
//           background: white;
//           border: 1px solid #e1e8df;
//           border-radius: 16px;
//           overflow: hidden;
//           transition: transform 0.2s, box-shadow 0.2s;
//         }

//         .product-card:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 10px 25px rgba(40, 70, 45, 0.08);
//         }

//         .product-image {
//           height: 180px;
//           background: #eaf3e7;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .product-image span {
//           font-size: 70px;
//         }

//         .product-content {
//           padding: 20px;
//         }

//         .category {
//           display: inline-block;
//           background: #e9f4e6;
//           color: #4c7e48;
//           padding: 5px 9px;
//           border-radius: 20px;
//           font-size: 10px;
//           font-weight: bold;
//         }

//         .product-content h2 {
//           margin: 12px 0 7px;
//           font-size: 19px;
//         }

//         .product-description {
//           color: #7d877f;
//           font-size: 11px;
//           line-height: 1.5;
//           min-height: 34px;
//         }

//         .product-details {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 10px;
//           margin-top: 18px;
//           padding: 12px;
//           background: #f7faf6;
//           border-radius: 10px;
//         }

//         .product-details small {
//           display: block;
//           color: #8a938c;
//           font-size: 9px;
//           margin-bottom: 5px;
//         }

//         .product-details strong {
//           color: #397343;
//           font-size: 16px;
//         }

//         .stock {
//           margin: 15px 0;
//           font-size: 10px;
//           color: #4c8149;
//           display: flex;
//           align-items: center;
//           gap: 6px;
//         }

//         .stock-dot {
//           width: 7px;
//           height: 7px;
//           background: #5da457;
//           border-radius: 50%;
//         }

//         .delete-button {
//           width: 100%;
//           border: 1px solid #f0d7d5;
//           background: #fff8f7;
//           color: #b4534b;
//           padding: 10px;
//           border-radius: 8px;
//           cursor: pointer;
//           font-size: 11px;
//           font-weight: 600;
//         }

//         .delete-button:hover {
//           background: #fff0ee;
//         }

//         .message-box,
//         .empty-box {
//           max-width: 600px;
//           margin: 70px auto;
//           background: white;
//           border: 1px solid #e1e8df;
//           border-radius: 16px;
//           padding: 50px;
//           text-align: center;
//         }

//         .empty-icon {
//           font-size: 55px;
//           margin-bottom: 15px;
//         }

//         .empty-box h2 {
//           margin: 0 0 8px;
//         }

//         .empty-box p {
//           margin: 0;
//           color: #7c877f;
//           font-size: 13px;
//         }

//         @media (max-width: 900px) {
//           .products-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         @media (max-width: 600px) {
//           .my-products-page {
//             padding: 20px;
//           }

//           .page-header {
//             align-items: flex-start;
//             gap: 15px;
//           }

//           .products-grid {
//             grid-template-columns: 1fr;
//           }
//         }
//       `}</style>

//     </div>
//   );
// }

// export default MyProducts;


function MyProducts() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f1f8f1",
        padding: "50px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ color: "green" }}>🌾 My Products</h1>

      <p>My Products page is working successfully!</p>

      <div
        style={{
          background: "white",
          padding: "25px",
          marginTop: "25px",
          borderRadius: "15px",
          maxWidth: "400px",
        }}
      >
        <h2>🥕 Fresh Tomatoes</h2>
        <p>Category: Vegetables</p>
        <p>Price: ₹60 / kg</p>
        <p>Quantity: 50 kg</p>
      </div>
    </div>
  );
}

export default MyProducts;

