import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../redux/features/apiSlice";
import { useAddToCartMutation } from "../../redux/features/cartslice";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const CART_KEY = "cartItems";

const getCartItems = () => JSON.parse(localStorage.getItem(CART_KEY)) || [];
const saveCartItems = (items) =>
  localStorage.setItem(CART_KEY, JSON.stringify(items));

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, error, isLoading } = useGetProductQuery(id);
  const [addToCart] = useAddToCartMutation();
  // const navigate = useNavigate();

  // Local state for quantity
  const [quantity, setQuantity] = useState(1);

  // Increment quantity
  const handleIncrement = () => setQuantity((prev) => prev + 1);

  // Decrement quantity (min: 1)
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  const handleAddToCart = async () => {
    try {
      const cartItems = getCartItems();

      const existingItem = cartItems.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity; // Update existing item's quantity
      } else {
        cartItems.push({ ...product, quantity }); // Add new item with selected quantity
        await addToCart({ ...product, quantity });
      }

      saveCartItems(cartItems);
      const notify = () => toast("Added to Cart!");
      notify();

      // navigate(`/cart`);
    } catch (err) {
      console.error("Failed to add product to cart:", err);
    }
  };

  if (isLoading)
    return (
      <div className="text-3xl font-bold text-center">
        Loading product details...
      </div>
    );

  if (error)
    return (
      <div className="text-3xl font-bold text-center">
        Failed to load product details: {error.message}
      </div>
    );

  if (!product)
    return (
      <div className="text-3xl font-bold text-center">Product not found</div>
    );

  return (
    <>
      <div className="flex max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Image Container */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={product.images}
            alt={product.name}
            className="w-full h-auto max-h-64 object-contain rounded-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 ml-6">
          <h1 className="text-4xl font-semibold text-gray-700 mb-2">
            {product.title}
          </h1>

          <h3 className="font-bold text-xl mt-4">Description:</h3>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-bold text-gray-900 mb-2">
            Price: ${product.price}
          </p>

          {/* Quantity Controls */}
          <div className="flex items-center mb-4">
            <button
              onClick={handleDecrement}
              className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded"
            >
              -
            </button>
            <span className="mx-4 text-lg font-semibold">{quantity}</span>
            <button
              onClick={handleIncrement}
              className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded"
            >
              +
            </button>
          </div>

          <div className="space-y-2 pb-4">
            {/* Warranty Information */}
            <div>
              <p className="text-md font-bold text-gray-900 mb-2 inline">
                Warranty:{" "}
              </p>
              <span className="text-gray-600">
                {product.warrantyInformation}
              </span>
            </div>

            {/* Shipping Information */}
            <div>
              <p className="text-md font-bold text-gray-900 mb-2 inline ">
                Shipping:{" "}
              </p>
              <span className="text-gray-600">
                {product.shippingInformation}
              </span>
            </div>
          </div>
          <p className="text-md text-gray-500">
            <span className="font-bold">Category:</span> {product.category}
          </p>

          <ReactStars count={5} value={3} size={24} activeColor="#ffd700" />

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ProductDetails;
