import { customerApiService } from './client';

export const addToCartApi = (data) => {
  return customerApiService.post('/cart/addToCart', data);
};

export const getCartApi = (data) => {
  return customerApiService.get('/cart/getItemByUserId', {
    params: {
      userId: Number(data.userId),
    },
  });
};




