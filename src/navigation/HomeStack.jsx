import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ReferralEarn from '../screens/ReferralEarnScreen';
import ProductListing from '../components/ProductListing';
import ProductListScreen from '../screens/ProductListScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_bottom'}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ReferralEarn" component={ReferralEarn} />
      <Stack.Screen name="ProductList" component={ProductListScreen} />
      <Stack.Screen name="ItemDetail" component={ItemDetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
