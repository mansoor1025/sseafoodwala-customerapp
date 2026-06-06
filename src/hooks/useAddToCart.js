import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addToCartThunk } from '../store/cart/cartThunk';
import { useAuthStore } from '../store/useAuthStore';
import Toast from 'react-native-toast-message';

export const useAddToCart = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const state = useAuthStore(state => state);
  const { user } = state
  // console.log("state******", state);

  const handleAddToCart = async (item, count, isLiveCutting, loginBackScreen) => {
    if (!user) {
      navigation.navigate('Login', { loginBackScreen });
      return;
    }

    try {
      await dispatch(
        addToCartThunk({ item, user, count, isLiveCutting })
      ).unwrap();

      Toast.show({
        type: 'success',
        text1: 'Added to cart',
        text2: 'Item successfully added to your cart',
      });
    } catch (err) {
      console.log("err?.message*****", err);

      Toast.show({
        type: 'error',
        text1: err || 'Please try again',
        text2: err || 'Please try again',
      });

    }
  };

  return { handleAddToCart };
};
