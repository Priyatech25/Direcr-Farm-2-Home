import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { getFarmerProducts, deleteProduct } from "../../services/productService";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";

function MyProducts() {
  const { currentUser } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      if (currentUser) {
        try {
          const data = await getFarmerProducts(currentUser.uid);
          setProducts(data);
        } catch (error) {
          console.error("Error fetching products:", error);
          toast.error("Failed to load products");
        } finally {
          setLoading(false);
        }
      }
    };
    fetchProducts();
  }, [currentUser]);

  const handleDelete = async (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(productId);
        setProducts(products.filter(p => p.id !== productId));
        toast.success("Product deleted successfully");
      } catch (error) {
        console.error("Error deleting product:", error);
        toast.error("Failed to delete product");
      }
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center pt-24"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div></div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <Toaster position="top-right" />
      
      <div className="max-w-7xl mx-auto px-8 mb-10 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">My Farm Products</h1>
          <p className="text-gray-500 mt-2">Manage your inventory and product listings.</p>
        </div>
        
        <Link to="/farmer/add-product">
          <button className="bg-green-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-green-800 transition shadow">
            <FaPlus /> Add New Product
          </button>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-8 pb-20">
        {products.length === 0 ? (
          <div className="bg-white rounded-2xl shadow p-12 text-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">No Products Found</h2>
            <p className="text-gray-500 mb-6">You haven't listed any farm products yet.</p>
            <Link to="/farmer/add-product">
              <button className="bg-green-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-800 transition">
                List First Product
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100">
                <div className="h-48 bg-gray-100 relative">
                  {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                  )}
                  <span className="absolute top-3 right-3 bg-white text-green-700 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    {product.category}
                  </span>
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{product.name}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2 min-h-[40px] mb-4">
                    {product.description || "No description provided."}
                  </p>
                  
                  <div className="bg-gray-50 rounded-xl p-3 mb-5 grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-gray-500">Price</p>
                      <p className="font-bold text-green-700">Rs {product.price}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Stock</p>
                      <p className="font-bold text-gray-800">{product.quantity} kg</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 transition"
                      onClick={() => toast.error("Edit feature coming soon!")}
                    >
                      <FaEdit /> Edit
                    </button>
                    <button 
                      className="flex-1 bg-red-50 text-red-600 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-red-100 transition"
                      onClick={() => handleDelete(product.id)}
                    >
                      <FaTrash /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyProducts;
