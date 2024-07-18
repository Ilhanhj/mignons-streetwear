import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import orderSlice from "./slices/orderSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    order: orderSlice,
  },
});

export default store;
