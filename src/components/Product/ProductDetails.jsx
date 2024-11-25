import { useParams, useNavigate } from "react-router-dom";
import { useGetProductQuery } from "../../redux/features/apiSlice";
import { useAddToCartMutation } from "../../redux/features/cartslice";

const CART_KEY = "cartItems";

const getCartItems = () => JSON.parse(localStorage.getItem(CART_KEY)) || [];
const saveCartItems = (items) =>
  localStorage.setItem(CART_KEY, JSON.stringify(items));

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, error, isLoading } = useGetProductQuery(id);
  const [addToCart] = useAddToCartMutation();
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    try {
      const cartItems = getCartItems();

      const existingItem = cartItems.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cartItems.push({ ...product, quantity: 1 });
        await addToCart(product);
      }

      saveCartItems(cartItems);
      navigate(`/cart`);
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
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6">
      <img
        src={product.images}
        alt={product.name}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">
        {product.name}
      </h1>
      <h3 className="font-bold text-xl ">Description:</h3>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-xl font-bold text-gray-900 mb-2">
        Price: ${product.price}
      </p>
      <p className="text-md text-gray-500">
        <span className="font-bold">Category:</span> {product.category}
      </p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
