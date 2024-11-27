import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import PropTypes from "prop-types";
import { Toaster } from "sonner";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <>
      {/* <Toaster /> */}
      <div
        className=" p-4 rounded cursor-pointer hover:shadow-md relative  bg-gray-100"
        onClick={handleClick}
      >
        <img src={product.images} alt={product.title} className="h-auto" />
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-gray-500 pb-2">${product.price}</p>

        <span className="pl-4 absolute bottom-0 left-0 ">
          <ReactStars
            count={5}
            value={product.rating || 3}
            size={20}
            activeColor="#ffd700"
            classNames="w-[100px] "
          />
        </span>
      </div>
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    category: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
