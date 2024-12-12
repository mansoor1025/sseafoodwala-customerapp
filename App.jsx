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
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="BottomTab">
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
