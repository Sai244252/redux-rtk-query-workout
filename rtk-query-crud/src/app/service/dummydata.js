import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    //Get ALL PRODUCTS (READING DATA)

    getAllProduct: builder.query({
      query: () => "/products",
    }),

    getProductById: builder.query({
      query: (id) => `/product/${id}`,
    }),

    addNewProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/products/add",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newProduct,
      }),
    }),
  }),
});

//`use${getAllProducts}Query` or useMutation - for updating / post queries

export const {
  useGetAllProductQuery,
  useGetProductByIdQuery,
  useAddNewProductMutation,
} = productsApi;
