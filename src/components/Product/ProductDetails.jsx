import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../redux/features/apiSlice";
import { useAddToCartMutation } from "../../redux/features/cartslice";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import { getCartItems, saveCartItems } from "../utils/localStorage";
import wishlist from "../../assets/wishlist.png";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, error, isLoading } = useGetProductQuery(id);
  const [addToCart] = useAddToCartMutation();
  const [buttonColour, setButtonColour] = useState("decrement");
  const [wishlistColour, setWishlistColour] = useState(true);

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
    setButtonColour("decrement");
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
    setButtonColour("increment");
  };
  const handleWishlist = () => {
    setWishlistColour((prev) => !prev);
  };

  const handleAddToCart = async () => {
    try {
      const cartItems = getCartItems();

      const existingItem = cartItems.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cartItems.push({ ...product, quantity });
        await addToCart({ ...product, quantity });
      }

      saveCartItems(cartItems);
      toast("Added To Cart Successfully!");
    } catch (err) {
      console.error("Failed to add product to cart:", err);
      toast("Failed to add product to cart.");
    }
  };

  if (isLoading) {
    return (
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-white ">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-3xl font-bold text-center">
        Failed to load product details: {error.message}
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-3xl font-bold text-center">Product not found</div>
    );
  }

  return (
    <>
      <Toaster />
      <div className="py-10">
        <div className="flex max-w-4xl mx-auto rounded-lg p-6 ">
          <div className="flex flex-1">
            <div className="flex flex-col gap-4 h-full shrink-0">
              {Array.isArray(product.images) &&
                Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="bg-gray-200 p-1">
                    <img
                      src={product.images[index % product.images.length]}
                      alt={`${product.title} - Image ${index + 1}`}
                      className="h-[105px] w-20 object-contain"
                    />
                  </div>
                ))}
            </div>

            <div className="flex flex-1 bg-gray-200 ml-4">
              <img
                src={Array.isArray(product.images) ? product.images[0] : ""}
                alt={product.title || "Product Image"}
                className="max-w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="flex-1 ml-6 p-4">
            <h1 className="text-2xl font-semibold text-gray-700 mb-2">
              {product.title}
            </h1>
            <ReactStars
              count={5}
              value={product.rating || 3}
              size={20}
              activeColor="#ffd700"
              classNames="w-[100px] "
            />
            <p className="text-xl font-semibold text-gray-900 mb-2">
              ${product.price}
            </p>
            <p className="text-gray-600 mb-4 border-grayborder border-b pb-4 text-sm">
              {product.description || "No description available"}
            </p>
            <div className="flex justify-between  items-center mb-4 w-44 h-8">
              <p className="text-gray-600  border-grayborder items-">
                Colours:
              </p>
              <div className="flex justify-between gap-5 p-1">
                <div className="border border-grayborder w-5 h-5 flex justify-center items-center p-2  rounded-xl bg-red-600 "></div>
                <div className="border border-grayborder w-5 h-5 flex justify-center items-center p-2  bg-green-600  rounded-xl"></div>
                <div className="border border-grayborder w-5 h-5 flex justify-center items-center p-2  bg-black rounded-xl"></div>
              </div>
            </div>
            {[
              "mens-shirts",
              "mens-shoes",
              "tops",
              "womens-dresses",
              "womens-shoes",
            ].includes(product.category) && (
              <div className="flex justify-between items-center mb-4 w-64 h-8">
                <p className="text-gray-600 border-grayborder items-">Size:</p>
                <div className="flex justify-between gap-5 p-1">
                  <div className="border border-grayborder w-5 h-5 flex justify-center items-center p-2 rounded">
                    XS
                  </div>
                  <div className="border border-grayborder w-5 h-5 flex justify-center items-center p-2 rounded">
                    S
                  </div>
                  <div className="border border-grayborder w-5 h-5 flex justify-center items-center p-2 rounded">
                    M
                  </div>
                  <div className="border border-grayborder w-5 h-5 flex justify-center items-center p-2 rounded bg-red-600 text-white">
                    L
                  </div>
                  <div className="border border-grayborder w-5 h-5 flex justify-center items-center p-2 rounded">
                    XL
                  </div>
                </div>
              </div>
            )}
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
              <div>
                <button
                  onClick={handleWishlist}
                  className={`w-10 h-10 p-1 rounded-full border ${
                    wishlistColour
                      ? "bg-gray-100 border-gray-300"
                      : " border-red-500 border-8"
                  } transition-colors duration-300`}
                >
                  <img
                    src={wishlist}
                    alt="Wishlist Icon"
                    className="w-full h-full object-contain"
                  />
                </button>
              </div>
            </div>

            <div className="space-y-2 pb-4">
              <div>
                <p className="text-md font-bold text-gray-900 mb-2 inline">
                  Warranty:{" "}
                </p>
                <span className="text-gray-600">
                  {product.warrantyInformation || "No warranty information"}
                </span>
              </div>

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
      </div>
    </>
  );
};

export default ProductDetails;
