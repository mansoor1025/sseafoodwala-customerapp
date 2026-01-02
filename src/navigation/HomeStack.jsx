import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ReferralEarn from '../screens/ReferralEarnScreen';
import ProductListScreen from '../screens/ProductListScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';
import CheckoutScreens from '../screens/CheckoutScreens';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ReferralEarn" component={ReferralEarn} />
      <Stack.Screen name="ProductList" component={ProductListScreen} />
      <Stack.Screen name="ItemDetail" component={ItemDetailScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreens} />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
