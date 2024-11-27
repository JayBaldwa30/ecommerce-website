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
    <div className="relative pt-5 md:pt-10 md:pl-[135px] md:pr-[135px]">
      {/* {isFetching && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white ">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      )} */}

      <div className="flex justify-between">
        <div>
          <div className="w-[20px] h-[40px] border-2 border-red-500 rounded-[4px] bg-red-500">
            <h4 className="pl-[36px] pt-[10px] pb-[10px] text-red-500 text-center font-bold">
              Products
            </h4>
          </div>

          <h1 className="font-semibold text-4xl pb-14 pt-4">
            Explore Our Products
          </h1>
        </div>
        <div className="flex gap-2">
          {page > 1 && (
            <button
              onClick={handlePreviousPage}
              disabled={isFetching}
              className="px-4 py-2 roundedhover:underline"
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              onClick={handleNextPage}
              disabled={isFetching}
              className="px-4 py-2 rounded hover:underline"
            >
              Next
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6 md:grid-cols-4 relative">
        {isFetching && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white ">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
          </div>
        )}
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
