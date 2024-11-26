import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <>
      <div
        className="border p-4 rounded cursor-pointer hover:shadow-md"
        onClick={handleClick}
      >
        <img
          src={product.images}
          alt={product.title}
          className="h-32 mx-auto"
        />
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-gray-500">${product.price}</p>
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
  }).isRequired,
};

export default ProductCard;
