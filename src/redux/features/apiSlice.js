import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ page = 1, limit = 8 } = {}) =>
        `products?limit=${limit}&skip=${(page - 1) * limit}`,
    }),

    getProduct: builder.query({
      query: (id) => `products/${id}`,
    }),

    createProduct: builder.mutation({
      query: (product) => ({
        url: "products/add",
        method: "POST",
        body: product,
      }),
    }),

    updateProduct: builder.mutation({
      query: ({ id, ...updates }) => ({
        url: `product/${id}`,
        method: "PUT",
        body: updates,
      }),
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `product/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = apiSlice;
