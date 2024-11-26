import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchResultsPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products); 
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchQuery && products.length > 0) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  if (loading) return <div>Loading...</div>;
  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen" onClick={handleClick}>
      <h2 className="text-l font-bold text-gray-800 mb-6">
        Search Results for:{" "}
        <span className="text-indigo-600">{searchQuery}</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={product.images}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {product.description}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
