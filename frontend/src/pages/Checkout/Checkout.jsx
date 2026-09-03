import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { createOrder } from "../../services/orderService";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

function Checkout() {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "Cash on Delivery",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    if (!currentUser) {
        toast.error("You must be logged in to place an order.");
        return;
    }
    
    if (cartItems.length === 0) {
        toast.error("Your cart is empty!");
        return;
    }

    setLoading(true);
    
    try {
        // Group items by farmerId if needed, but for simplicity we save one order with all items
        // In a real marketplace, you might split orders per farmer
        const orderData = {
            consumerId: currentUser.uid,
            farmerId: cartItems[0]?.farmerId || "unknown", // Simple assignment for demonstration
            customerInfo: formData,
            items: cartItems,
            totalAmount: getCartTotal(),
            paymentMethod: formData.payment,
            paymentStatus: formData.payment === "Cash on Delivery" ? "Pending" : "Completed",
            status: "Pending"
        };
        
        await createOrder(orderData);
        
        clearCart();
        toast.success("Order Placed Successfully!");
        
        setTimeout(() => {
            navigate("/consumer-orders");
        }, 1500);
        
    } catch (error) {
        console.error("Order error:", error);
        toast.error("Failed to place order.");
    } finally {
        setLoading(false);
    }
  };

  if (cartItems.length === 0) {
      return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center p-10">
              <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-700 mb-4">Your Cart is Empty</h2>
                  <button onClick={() => navigate("/products")} className="bg-green-700 text-white px-6 py-2 rounded-lg">Go to Products</button>
              </div>
          </div>
      );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-10 pt-24">
      <Toaster position="top-right" />
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* Checkout Form */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-green-800 mb-8 border-b pb-4">
            Shipping Details
          </h1>

          <form onSubmit={placeOrder} className="space-y-6">
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
            </div>

            <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                <input
                    type="tel"
                    name="phone"
                    placeholder="+91 9876543210"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
            </div>

            <div>
                <label className="block text-gray-700 font-semibold mb-2">Delivery Address</label>
                <textarea
                    name="address"
                    placeholder="Enter your full address"
                    required
                    rows="3"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
            </div>

            <div>
                <label className="block text-gray-700 font-semibold mb-2">Payment Method</label>
                <select
                    name="payment"
                    value={formData.payment}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-3 rounded-xl bg-white focus:ring-2 focus:ring-green-500 focus:outline-none"
                >
                    <option value="Cash on Delivery">Cash on Delivery (COD)</option>
                    <option value="UPI">UPI / Online Payment (Sandbox)</option>
                    <option value="Card">Credit/Debit Card (Sandbox)</option>
                </select>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-700 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition disabled:bg-gray-400"
            >
                {loading ? "Processing..." : "Place Order Now"}
            </button>
          </form>
        </div>
        
        {/* Order Summary */}
        <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Order Summary</h2>
                
                <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
                    {cartItems.map(item => (
                        <div key={item.id} className="flex justify-between items-center text-sm">
                            <div className="flex items-center gap-3">
                                <span className="font-semibold text-gray-700">{item.quantity}x</span>
                                <span className="text-gray-600 truncate max-w-[120px]">{item.name}</span>
                            </div>
                            <span className="font-semibold text-gray-800">Rs {item.price * item.quantity}</span>
                        </div>
                    ))}
                </div>
                
                <div className="border-t pt-4 space-y-3">
                    <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <span>Rs {getCartTotal()}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                        <span>Delivery Fee</span>
                        <span>Rs 50</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold text-green-800 mt-4 pt-4 border-t border-gray-200">
                        <span>Total</span>
                        <span>Rs {getCartTotal() + 50}</span>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}

export default Checkout;