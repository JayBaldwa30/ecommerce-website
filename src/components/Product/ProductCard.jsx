import { useNavigate } from "react-router-dom";


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

export default ProductCard;
