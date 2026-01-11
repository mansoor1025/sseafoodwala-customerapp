import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addToCartThunk } from '../store/cartThunk';
import { useAuthStore } from '../store/useAuthStore';
import Toast from 'react-native-toast-message';

export const useAddToCart = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useAuthStore(state => state.user);

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
        text1: 'Something went wrong',
        text2: err?.message || 'Please try again',
      });

    }
  };

  return { handleAddToCart };
};
