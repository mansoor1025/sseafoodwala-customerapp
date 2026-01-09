import { adminApi } from '../adminApiService';
import { BASE_URL } from '@env';
import { customerApiService } from '../customerApiService';
import { useAuthStore } from '../../store/useAuthStore';
import { Alert } from 'react-native';

export const getFetchData = async (url, setState = false, customerApiFlag) => {
  try {
    let response;

    if (customerApiFlag) {
      response = await customerApiService.get(url);
    }
    else {
      response = await adminApi.get(url);
    }

    if (setState) {
      setState(response?.data?.data);
    }

    return response?.data?.data
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

export const imageUrlWrapper = url => {
  if (!url) return '';

  // If full URL, return as is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  // Otherwise add BASE_URL
  return `${BASE_URL}${url}`;
};

export const addToCart = async (item, user, count, navigate, isLiveCutting, loginBackScreen) => {
  try {

    const navScreen = !user ? 'Login' : null
    const userData = typeof user === 'string' ? JSON.parse(user) : user;
    isLiveCutting = typeof isLiveCutting === 'boolean' && isLiveCutting === true ? 1 : 0
   
    if (navScreen) {
      navigate.navigate(navScreen, { loginBackScreen })
    }
    else {
      const data = {
        "userId": userData?.id,
        "productId": item?.id,
        "price": item?.price,
        "unit": item?.unit,
        "weight": count,
        "isLiveCutting": isLiveCutting
      }

      const response = await customerApiService.post('/cart/addToCart', { ...data });
      console.log("response******", response?.data);
      Alert.alert('Success', 'Item added to cart');
    }

  } catch (error) {
    let message = error.message;
    console.error(message);

    if (error.response) {
      // Backend responded with error
      if (error.response.data?.message) {
        message = error.response.data.message;
      } else if (
        Array.isArray(error.response.data?.errors) &&
        error.response.data.errors.length > 0
      ) {
        message = error.response.data.errors[0].msg;
      }
    }

    Alert.alert('Error', message);
  }
};
