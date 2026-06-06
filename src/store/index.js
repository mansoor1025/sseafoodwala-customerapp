import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice';
import userProfileReducer from './userProfile/userProfileSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    userProfile: userProfileReducer
  },
});
