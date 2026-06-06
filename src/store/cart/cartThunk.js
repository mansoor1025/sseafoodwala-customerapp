import { createAsyncThunk } from '@reduxjs/toolkit';
import { addToCartApi, getCartApi } from '../../api/cart/cart.api';
import { setCart } from './cartSlice';

export const addToCartThunk = createAsyncThunk(
  'cart/addToCart',
  async ({ item, user, count, isLiveCutting }, { dispatch, rejectWithValue }) => {

    try {
      
      const userData = typeof user === 'string' ? JSON.parse(user) : user;
      isLiveCutting = typeof isLiveCutting === 'boolean' && isLiveCutting === true ? 1 : 0

      const payload = {
        userId: userData.id,
        productId: item.id,
        price: item.price,
        unit: item.unit,
        weight: count,
        isLiveCutting: isLiveCutting ? 1 : 0,
      };

      const response = await addToCartApi(payload);
      const cartData = response.data.data;

      // Update Redux slice
      dispatch(
        setCart({
          items: cartData.items,
          totalCount: cartData.counts,
          totalPrice: cartData.totalPrice,
        })
      );

      return cartData; // ✅ this allows unwrap() to work

    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const fetchCartThunk = createAsyncThunk(
  'cart/getItemByUserId',
  async ({ userId }, { dispatch, rejectWithValue }) => {
    try {
      const response = await getCartApi({ userId });
      const cartData = response.data.data;
    
      dispatch(
        setCart({
          items: cartData.items,
          totalCount: cartData.counts,
          totalPrice: cartData.totalPrice,
        })
      );

      return cartData;
    } catch (err) {
      console.log("cart api err*****",err);
      
      return rejectWithValue(
        err.response?.data?.message || 'Failed to fetch cart'
      );
    }
  }
);
