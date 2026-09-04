import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { FaTrash, FaShoppingCart } from "react-icons/fa";

function Cart() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  const total = getCartTotal();

  return (
    <div className="min-h-screen bg-gray-50 p-10 pt-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800 mb-8 flex items-center gap-3">
          <FaShoppingCart /> Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl shadow p-12 text-center">
            <div className="text-6xl text-gray-300 mb-4 flex justify-center"><FaShoppingCart /></div>
            <h2 className="text-2xl font-bold text-gray-700 mb-5">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Looks like you haven't added any fresh products yet.</p>
            <Link to="/products">
              <button className="bg-green-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-800 transition">
                Start Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <div className="p-8">
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col md:flex-row justify-between items-center border-b border-gray-100 py-6 last:border-0">
                  <div className="flex items-center gap-6 w-full md:w-1/2 mb-4 md:mb-0">
                    {item.imageUrl ? (
                      <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-xl shadow-sm" />
                    ) : (
                      <div className="w-20 h-20 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400">No Img</div>
                    )}
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
                      <p className="text-green-600 font-semibold mt-1">Rs {item.price} /kg</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center w-full md:w-1/2">
                    <div className="flex gap-4 items-center bg-gray-100 rounded-xl px-4 py-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-gray-600 hover:text-green-700 font-bold text-xl">-</button>
                      <span className="font-semibold w-8 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-gray-600 hover:text-green-700 font-bold text-xl">+</button>
                    </div>

                    <h2 className="font-bold text-xl text-gray-800">Rs {item.price * item.quantity}</h2>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition"
                      title="Remove Item"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 p-8 border-t border-green-100 flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <p className="text-gray-500 mb-1">Total Amount</p>
                <h1 className="text-4xl font-bold text-green-800">Rs {total}</h1>
              </div>

              <Link to="/checkout" className="w-full md:w-auto">
                <button className="w-full bg-green-700 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition shadow-lg hover:shadow-xl">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;