import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    //Get ALL PRODUCTS (READING DATA)

    getAllProduct: builder.query({
      query: () => "/products",
    }),
  }),
});

//`use${getAllProducts}Query` or useMutation - for updating / post queries

export const { useGetAllProductQuery } = productsApi;
