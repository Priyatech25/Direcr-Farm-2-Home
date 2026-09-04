import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../services/productService";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { FaSearch, FaMapMarkerAlt, FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const categories = ["All", "Vegetables", "Fruits", "Grains", "Dairy", "Organic"];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let result = products;
    if (category !== "All") {
      result = result.filter(p => p.category === category);
    }
    if (search) {
      result = result.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    }
    setFilteredProducts(result);
  }, [category, search, products]);

  const handleAddToCart = (product) => {
    addToCart(product, 1);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <Toaster position="top-right" />
      
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-8 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Fresh Farm Products</h1>
        <p className="text-gray-600 text-lg">Directly from local farmers to your home</p>
      </section>

      {/* Filters Section */}
      <section className="max-w-7xl mx-auto px-8 mb-10">
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row gap-6 items-center">
          
          {/* Search */}
          <div className="relative w-full md:w-1/2">
            <FaSearch className="absolute left-4 top-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border focus:outline-none focus:border-green-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Categories */}
          <div className="w-full md:w-1/2 flex flex-wrap gap-3">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  category === item ? "bg-green-700 text-white" : "bg-green-50 text-green-700 hover:bg-green-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-8 pb-20">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition duration-300">
                <div className="relative h-48 bg-gray-200">
                  {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                  )}
                  <span className="absolute top-3 left-3 bg-white text-green-700 px-3 py-1 rounded-full text-xs font-bold shadow">
                    {product.category}
                  </span>
                  <button 
                    onClick={() => toggleWishlist(product)}
                    className="absolute top-3 right-3 bg-white p-2 rounded-full shadow text-green-700 hover:scale-110 transition"
                  >
                    {isInWishlist(product.id) ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                  </button>
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                  <div className="mt-2 text-sm text-gray-500 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-green-600" /> Farm: {product.farmerId || "Local Farm"}
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <span className="text-2xl font-bold text-green-700">Rs {product.price}</span>
                      <span className="text-gray-500 text-sm"> /kg</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full mt-4 flex items-center justify-center gap-2 bg-green-700 text-white py-2 rounded-xl font-semibold hover:bg-green-800 transition"
                  >
                    <FaShoppingCart /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow">
            <h3 className="text-2xl font-bold text-gray-800">No Products Found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or category filter.</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default Products;
