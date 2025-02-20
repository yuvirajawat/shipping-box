import { configureStore } from "@reduxjs/toolkit";
import shippingReducer from "./features/shippingSlice";

const store = configureStore({
  reducer: {
    shipping: shippingReducer,
  },
});
export default store;
