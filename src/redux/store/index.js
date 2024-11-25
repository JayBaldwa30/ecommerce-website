import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/apiSlice.js";
import cartSlice from "../features/cartslice.js";

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
