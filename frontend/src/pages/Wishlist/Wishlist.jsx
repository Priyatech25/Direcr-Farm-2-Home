import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaTrash } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";

function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (product) => {
    addToCart(product, 1);
    removeFromWishlist(product.id);
    toast.success(`${product.name} moved to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <Toaster position="top-right" />
      <div className="max-w-5xl mx-auto px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
          <FaHeart className="text-red-500" /> My Wishlist
        </h1>

        {wishlistItems.length === 0 ? (
          <div className="bg-white rounded-2xl shadow p-12 text-center">
            <FaHeart className="text-6xl text-gray-200 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-6">Save products you love and buy them later.</p>
            <Link to="/products">
              <button className="bg-green-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-800 transition">
                Discover Products
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
                <div className="h-44 bg-gray-100 relative">
                  {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300 text-4xl"><FaHeart /></div>
                  )}
                  <button
                    onClick={() => { removeFromWishlist(product.id); toast.success("Removed from wishlist"); }}
                    className="absolute top-3 right-3 bg-white p-2 rounded-full shadow text-red-500 hover:bg-red-50 transition"
                  >
                    <FaTrash />
                  </button>
                </div>

                <div className="p-5">
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">{product.category}</span>
                  <h3 className="text-xl font-bold text-gray-800 mt-2">{product.name}</h3>
                  <p className="text-green-700 font-bold text-lg mt-1">Rs {product.price} <span className="text-gray-400 text-sm font-normal">/kg</span></p>

                  <button
                    onClick={() => handleMoveToCart(product)}
                    className="w-full mt-4 flex items-center justify-center gap-2 bg-green-700 text-white py-2.5 rounded-xl font-semibold hover:bg-green-800 transition"
                  >
                    <FaShoppingCart /> Move to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;