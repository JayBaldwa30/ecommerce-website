import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../redux/features/apiSlice";
import { useAddToCartMutation } from "../../redux/features/cartslice";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { getCartItems, saveCartItems } from "../utils/localStorage";
import wishlist from "../../assets/wishlist.png";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, error, isLoading } = useGetProductQuery(id);
  const [addToCart] = useAddToCartMutation();
  const [buttonColour, setButtonColour] = useState("");

  // Local state for quantity
  const [quantity, setQuantity] = useState(1);

  // Increment quantity
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
    setButtonColour("decrement");
  };

  // Decrement quantity
  const handleDecrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
    setButtonColour("increment");
  };

  // Handle Add to Cart
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
      toast.success("Added to Cart!");
    } catch (err) {
      console.error("Failed to add product to cart:", err);
      toast.error("Failed to add product to cart.");
    }
    alert('Added to Cart!')
  };

  // Loading State
  if (isLoading) {
    return (
      <div className="text-3xl font-bold text-center">
        Loading product details...
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="text-3xl font-bold text-center">
        Failed to load product details: {error.message}
      </div>
    );
  }

  // Product Not Found
  if (!product) {
    return (
      <div className="text-3xl font-bold text-center">Product not found</div>
    );
  }

  return (
    <>
      <div className="flex max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Image Container */}
        <div className="flex flex-1">
          {/* First container: List of images */}
          <div className="flex flex-col gap-4 h-full shrink-0">
            {Array.isArray(product.images) &&
              Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="border border-gray-300 p-1">
                  <img
                    src={product.images[index % product.images.length]} // Cycle through images
                    alt={`${product.title} - Image ${index + 1}`}
                    className="h-[105px] w-20 object-cover"
                  />
                </div>
              ))}
          </div>

          {/* Second container: Single larger image */}
          <div className="flex-1 border border-gray-300 ml-4">
            <img
              src={Array.isArray(product.images) ? product.images[0] : ""}
              alt={product.title || "Product Image"}
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Product Details Container */}
        <div className="flex-1 ml-6 p-4">
          <h1 className="text-4xl font-semibold text-gray-700 mb-2">
            {product.title}
          </h1>
          <ReactStars
            count={5}
            value={product.rating || 3}
            size={24}
            activeColor="#ffd700"
          />
          <p className="text-xl font-semibold text-gray-900 mb-2">
            ${product.price}
          </p>
          <p className="text-gray-600 mb-4 border-grayborder border-b pb-4">
            {product.description || "No description available"}
          </p>
          <p className="text-gray-600 mb-4 border-grayborder">Colours:</p>
          <p className="text-gray-600 mb-4 border-grayborder">Size:</p>

          {/* Quantity Controls */}
          <div className="flex items-center justify-between mb-4   ">
            <div className="border border-grayborder rounded">
              <button
                onClick={handleDecrement}
                className={
                  buttonColour === "decrement"
                    ? "bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded"
                    : "bg-red-500  px-3 py-1 rounded text-white"
                }
              >
                -
              </button>
              <span className="mx-4 text-lg font-semibold">{quantity}</span>
              <button
                onClick={handleIncrement}
                className={
                  buttonColour === "increment"
                    ? "bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded"
                    : "bg-red-500 px-3 py-1 rounded text-white"
                }
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded "
            >
              Add to Cart
            </button>
            <div className="border rounded border-grayborder">
              <img src={wishlist} alt="" />
            </div>
          </div>

          {/* Warranty Information */}
          <div className="space-y-2 pb-4">
            <div>
              <p className="text-md font-bold text-gray-900 mb-2 inline">
                Warranty:{" "}
              </p>
              <span className="text-gray-600">
                {product.warrantyInformation || "No warranty information"}
              </span>
            </div>

            {/* Shipping Information */}
            <div>
              <p className="text-md font-bold text-gray-900 mb-2 inline">
                Shipping:{" "}
              </p>
              <span className="text-gray-600">
                {product.shippingInformation || "No shipping information"}
              </span>
            </div>
          </div>

          <p className="text-md text-gray-500">
            <span className="font-bold">Category:</span> {product.category}
          </p>


        </div>
      </div>

      
    </>
  );
};

export default ProductDetails;
