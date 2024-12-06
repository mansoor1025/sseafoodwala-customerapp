import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddToCartScreen from '../screens/AddToCartScreen';
import PreviousOrderScreen from '../screens/PreviousOrderScreen';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FD8D1F',
        tabBarInactiveTintColor: '#BCBCBC',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          paddingBottom: 10,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Cart"
        component={AddToCartScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Entypo
              name="shopping-cart"
              color={focused ? '#FD8D1F' : color}
              size={30}
            />
          ),
        }}
      />

      <Tab.Screen
        name="order"
        component={PreviousOrderScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Entypo
              name="shopping-cart"
              color={focused ? '#FD8D1F' : color}
              size={30}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Fontisto
              name="home"
              color={focused ? '#FD8D1F' : color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../assets/icons/notificationIcon.png')}
              style={[
                styles.notificationIcons,
                focused ? {color: '#FD8D1F'} : {color: '#BCBCBC'},
              ]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  notificationIcons: {
    width: 26,
    height: 26,
  },
});
