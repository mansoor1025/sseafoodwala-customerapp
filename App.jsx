import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import SpashScreen from './src/screens/SpashScreen';
import OfferIntroScreen from './src/screens/OfferIntroScreen';
import LiveCuttingIntroScreen from './src/screens/LiveCuttingIntroScreen';
import FastDeliveryIntroScreen from './src/screens/FastDeliveryIntroScreen';
import SelectCityScreen from './src/screens/SelectCityScreen';
import BottomTab from './src/navigation/BottomTab';
import LoginScreen from './src/screens/LoginScreen';
import EnterPhoneNumberScreen from './src/screens/EnterPhoneNumberScreen';
import OtpVerificationScreen from './src/screens/OtpVerificationScreen';
import BillingAddressScreen from './src/screens/BillingAddressScreen';
import PaymentMethodScreen from './src/screens/PaymentMethodScreen';
import CardInformationScreen from './src/screens/CardInformationScreen';
import ConfirmOrderScreen from './src/screens/ConfirmOrderScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import AccountSettingScreen from './src/screens/AccountSettingScreen';
import LiveCuttingRequestScreen from './src/screens/LiveCuttingRequestScreen';
import SessionHistoryScreen from './src/screens/SessionHistoryScreen';
import FeedBackScreen from './src/screens/FeedBackScreen';
import TrackOrderScreen from './src/screens/TrackOrderScreen';
import ProductListScreen from './src/screens/ProductListScreen';
import ReferralEarn from './src/screens/ReferralEarnScreen';
import ItemDetailScreen from './src/screens/ItemDetailScreen';
import AddToCartScreen from './src/screens/AddToCartScreen';
import CheckoutScreens from './src/screens/CheckoutScreens';
import { useAuthStore } from './src/store/useAuthStore';
const Stack = createStackNavigator();


const App = () => {
  const loadSession = useAuthStore((s) => s.loadSession);
  loadSession()
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false, animation: 'slide_from_bottom'}}>
        <Stack.Screen name="Splash" component={SpashScreen} />
        <Stack.Screen name="OfferIntroScreen" component={OfferIntroScreen} />
        <Stack.Screen name="FastDelivery" component={FastDeliveryIntroScreen} />
        <Stack.Screen name="LiveCutting" component={LiveCuttingIntroScreen} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        
        {/* Home screen routes */}
        {/* <Stack.Screen name="ProductList" component={ProductListScreen} /> */}
        <Stack.Screen name="ReferralEarn" component={ReferralEarn} />
        {/* <Stack.Screen name="ItemDetail" component={ItemDetailScreen} /> */}
        <Stack.Screen name="CartScreen" component={AddToCartScreen} />
        {/* <Stack.Screen name="Checkout" component={CheckoutScreens} /> */}

        <Stack.Screen name="Login" component={LoginScreen} />

        <Stack.Screen
          name="EnterPhoneNumber"
          component={EnterPhoneNumberScreen}
        />
        <Stack.Screen
          name="OtpVerification"
          component={OtpVerificationScreen}
        />

        <Stack.Screen name="BillingAddress" component={BillingAddressScreen} />

        <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} />

        <Stack.Screen
          name="CardInformation"
          component={CardInformationScreen}
        />

        <Stack.Screen name="ConfirmOrder" component={ConfirmOrderScreen} />

        <Stack.Screen name="AccountSetting" component={AccountSettingScreen} />

        <Stack.Screen
          name="LiveCuttingRequest"
          component={LiveCuttingRequestScreen}
        />

        <Stack.Screen name="FeedBack" component={FeedBackScreen} />
        <Stack.Screen name="TrackOrderScreen" component={TrackOrderScreen} />

        <Stack.Screen name="SessionHistory" component={SessionHistoryScreen} />

       

        {/* <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} /> */}

        <Stack.Screen name="SelectCity" component={SelectCityScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
