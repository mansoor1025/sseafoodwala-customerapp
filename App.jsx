import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialState="Login"
        screenOptions={{headerShown: false, animation: 'slide_from_bottom'}}>
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="TrackOrderScreen" component={TrackOrderScreen} />
        <Stack.Screen name="FeedBack" component={FeedBackScreen} />
        <Stack.Screen name="SessionHistory" component={SessionHistoryScreen} />
        <Stack.Screen
          name="LiveCuttingRequest"
          component={LiveCuttingRequestScreen}
        />

        <Stack.Screen name="AccountSetting" component={AccountSettingScreen} />

        <Stack.Screen name="ConfirmOrder" component={ConfirmOrderScreen} />

        <Stack.Screen
          name="CardInformation"
          component={CardInformationScreen}
        />

        <Stack.Screen name="BillingAddress" component={BillingAddressScreen} />

        <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} />

        <Stack.Screen
          name="OtpVerification"
          component={OtpVerificationScreen}
        />
        <Stack.Screen
          name="EnterPhoneNumber"
          component={EnterPhoneNumberScreen}
        />
        <Stack.Screen name="Login" component={LoginScreen} />

        <Stack.Screen name="Splash" component={SpashScreen} />
        <Stack.Screen name="OfferIntroScreen" component={OfferIntroScreen} />
        <Stack.Screen name="LiveCutting" component={LiveCuttingIntroScreen} />
        <Stack.Screen name="FastDelivery" component={FastDeliveryIntroScreen} />
        <Stack.Screen name="SelectCity" component={SelectCityScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
