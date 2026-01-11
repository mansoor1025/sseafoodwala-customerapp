import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addToCartThunk } from '../store/cartThunk';
import { useAuthStore } from '../store/useAuthStore';

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

      Alert.alert('Success', 'Item added to cart');
    } catch (err) {
        console.log("err?.message*****",err);
        
      Alert.alert('Error', err?.message || 'Something went wrong');
    }
  };

  return { handleAddToCart };
};
