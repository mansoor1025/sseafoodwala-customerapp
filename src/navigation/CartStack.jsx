import {StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator } from '@react-navigation/stack';
import AddToCartScreen from '../screens/AddToCartScreen';
import CheckoutScreens from '../screens/CheckoutScreens';
const Stack = createStackNavigator ();

const CartStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_bottom'}}
      initialRouteName="CartScreen">
      <Stack.Screen name="CartScreen" component={AddToCartScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreens} />
    </Stack.Navigator>
  );
};

export default CartStack;

const styles = StyleSheet.create({});
