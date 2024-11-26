import { useEffect, useState } from "react";
import {
  useRemoveFromCartMutation,
  useUpdateQuantityMutation,
} from "../../redux/features/cartslice";
import { getCartItems, saveCartItems,  } from "../utils/localStorage";



const Cart = () => {
  const [cartItems, setCartItems] = useState(getCartItems());
  const [removeFromCart] = useRemoveFromCartMutation();
  const [updateQuantity] = useUpdateQuantityMutation();

  useEffect(() => {
    saveCartItems(cartItems);
  }, [cartItems]);

  const handleRemoveFromCart = async (id) => {
    await removeFromCart(id);
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const handleUpdateQuantity = async (id, change) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    );

    const updatedItem = updatedCart.find((item) => item.id === id);
    if (updatedItem) {
      await updateQuantity({ id, quantity: updatedItem.quantity });
    }
    setCartItems(updatedCart);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center p-4 mb-4 border border-gray-200 rounded-lg"
            >
              <div>
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleUpdateQuantity(item.id, -1)}
                  className="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="font-medium">{item.quantity}</span>
                <button
                  onClick={() => handleUpdateQuantity(item.id, 1)}
                  className="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
