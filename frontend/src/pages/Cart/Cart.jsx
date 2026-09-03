import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(data);
  }, []);

  const updateCart = (items) => {
    setCartItems(items);
    localStorage.setItem("cart", JSON.stringify(items));
  };

  const increaseQty = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    updateCart(updated);
  };

  const decreaseQty = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    updateCart(updated);
  };

  const removeItem = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);

    updateCart(updated);
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-green-700 mb-8">
        🛒 Shopping Cart
      </h1>

      {cartItems.length === 0 ? (

        <div className="bg-white rounded-xl shadow-lg p-10 text-center">

          <h2 className="text-2xl mb-5">
            Cart is Empty 😔
          </h2>

          <Link to="/products">
            <button className="bg-green-700 text-white px-8 py-3 rounded-lg">
              Go Shopping
            </button>
          </Link>

        </div>

      ) : (

        <div className="bg-white rounded-xl shadow-lg p-6">

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="flex justify-between items-center border-b py-5"
            >

              <div>

                <h2 className="text-2xl font-bold">
                  {item.name}
                </h2>

                <p className="text-gray-500">
                  ₹{item.price}
                </p>

              </div>

              <div className="flex gap-3 items-center">

                <button
                  onClick={() => decreaseQty(item.id)}
                  className="bg-gray-300 px-3 py-1 rounded"
                >
                  -
                </button>

                <h2>{item.quantity}</h2>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="bg-green-700 text-white px-3 py-1 rounded"
                >
                  +
                </button>

              </div>

              <h2 className="font-bold">
                ₹{item.price * item.quantity}
              </h2>

              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Remove
              </button>

            </div>

          ))}

          <div className="flex justify-between mt-8">

            <h1 className="text-3xl font-bold">
              Total : ₹{total}
            </h1>

            <Link to="/checkout">
              <button className="bg-green-700 text-white px-8 py-3 rounded-lg">
                Proceed to Checkout
              </button>
            </Link>

          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;