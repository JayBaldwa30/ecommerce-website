import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/apiSlice";
import { cartSlice } from "../features/cartSlice";

const store = configureStore({
  reducer: {
    [cartSlice.reducerPath]: cartSlice.reducer, 
    [apiSlice.reducerPath]: apiSlice.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(cartSlice.middleware)
      .concat(apiSlice.middleware), 
});

export default store;
