import { useState } from "react";
import { useGetProductsQuery } from "../../redux/features/apiSlice";
import ProductCard from "./ProductCard";

const ProductPage = () => {
  const [page, setPage] = useState(1);
  const limit = 8;

  const { data, error, isLoading, isFetching } = useGetProductsQuery({
    page,
    limit,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    const errorMessage =
      error?.data?.message || error?.error || "Something went wrong";
    return <p>{errorMessage}</p>;
  }

  const products = data?.products || [];
  const total = data?.total || 0;
  const totalPages = Math.ceil(total / limit);

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="pt-5 md:pt-10 md:pl-[135px] md:pr-[135px]">
      <div className="flex justify-between">
        <div>
          <h1 className=" border-l-8 border-red-600 p-4">Our Products</h1>
          <p className="text-black text-4xl font-bold pt-4">
            Explore Our Products
          </p>
        </div>
        <div className="">
          <button
            onClick={handlePreviousPage}
            disabled={page === 1 || isFetching}
            className="px-4 py-2 rounded"
          >
            {isFetching && page !== 1 ? "Loading..." : "Previous"}
          </button>

          <button
            onClick={handleNextPage}
            disabled={page === totalPages || isFetching}
            className="px-4 py-2 rounded"
          >
            {isFetching && page !== totalPages ? "Loading..." : "Next"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6 md:grid-cols-4">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-4 text-center">No products available</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
