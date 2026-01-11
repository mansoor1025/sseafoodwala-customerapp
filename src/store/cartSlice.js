import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
  isLoaded: false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart(state, action) {
      state.items = action.payload.items;
      state.totalCount = action.payload.totalCount;
      state.totalPrice = action.payload.totalPrice;
      state.isLoaded = true;
    },
    clearCart(state) {
      return initialState;
    }
  }
});

export const { setCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
