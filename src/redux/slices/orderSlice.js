import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const increaseNotify = () => toast.success("Item has been added to the cart");
const DecreaseNotify = () => toast.error("Item has been deleted from the cart");
const DecreaseNotify2 = () => toast.error("Item has been removed from the cart");

const orderSlice = createSlice({
  name: "order",
  initialState: {
    items: JSON.parse(localStorage.getItem("order")) || [],
  },
  reducers: {
    addToOrder: (state, action) => {
      const itemInCart = state.items.find((item) => item.id === action.payload.id);

      if (itemInCart) {
        itemInCart.quantity++;
        increaseNotify();
      } else {
        state.items.push(action.payload);
      }
    },
    deleteToOrder: (state, action) => {
      const itemInCart = state.items.find((item) => item.id === action.payload.id);
      if (itemInCart.quantity <= 1) {
        state.items = confirm("Are you sure want to delete this item ?") ? state.items.filter((item) => item.id !== action.payload.id) : state.items; 
        DecreaseNotify2();
      } else {
        state.items.map((item) => (item.id === action.payload.id ? item.quantity-- : item));
        DecreaseNotify();
      }
    },
  },
});

export const { addToOrder } = orderSlice.actions;
export const { deleteToOrder } = orderSlice.actions;

export default orderSlice.reducer;
