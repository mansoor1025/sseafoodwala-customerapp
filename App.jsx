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
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialState="Login"
        screenOptions={{headerShown: false, animation: 'slide_from_bottom'}}>
        <Stack.Screen
          name="BillingAddress"
          component={BillingAddressScreen}
        />

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
        <Stack.Screen name="BottomTab" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
