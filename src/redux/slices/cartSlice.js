import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.data.find((item) => item.id === action.payload.id);

      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.data.push(action.payload);
      }
    },
    deleteFromCart: (state, action) => {
      const itemInCart = state.data.find((item) => item.id === action.payload.id);
      if (itemInCart.quantity <= 1) {
        state.data = confirm("Are you sure want to delete this item ?") ? state.data.filter((item) => item.id !== action.payload.id) : state.data;
      } else {
        state.data.map((item) => (item.id === action.payload.id ? item.quantity-- : item));
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const { deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
