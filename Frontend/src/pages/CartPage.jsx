import React from "react";
import { useCart } from "../components/CartContext.jsx";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="max-w-screen-lg mx-auto mt-24 p-4">
      {/* Header + Back Button */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400 transition"
        >
          Back
        </button>
      </div>

      {/* Cart Content */}
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <div className="space-y-4 mb-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border p-3 rounded-md shadow-sm"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-500">{item.title}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold">₹{item.price}</span>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total Price Section */}
          <div className="flex justify-between items-center text-lg font-bold border-t pt-4">
            <span>Total Price:</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
