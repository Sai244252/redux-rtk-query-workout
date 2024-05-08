import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";

import { productsApi } from "./service/dummydata";

export const store = configureStore({
  name: "",
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  //middleware only helps with caching ( boilerplate code)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);
