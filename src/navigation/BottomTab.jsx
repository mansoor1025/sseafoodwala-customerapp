import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddToCartScreen from '../screens/AddToCartScreen';
import PreviousOrderScreen from '../screens/PreviousOrderScreen';
import CartIcon from '../assets/icons/cartIcon.svg';
import PreviousOrder from '../assets/icons/previousOrderIcon.svg';
import HomeIcon from '../assets/icons/HomeIcon.svg';
import NotificationIcon from '../assets/icons/notificationIcon.svg';
import UserSettingIcon from '../assets/icons/userSettingIcon.svg';
import {Dimensions} from 'react-native';
import Icon from '../components/Icons'; 
import ReferralEarn from '../screens/ReferralEarnScreen';
import HomeStack from './HomeStack';
import CartStack from './CartStack';
import NotificationScreen from '../screens/NotificationScreen';
import UserSettingScreen from '../screens/UserSettingScreen';

const screenWidth = Dimensions.get('window').width; 

const Tab = createBottomTabNavigator();

const BottomTab = ({route}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#FD8D1F',
        tabBarInactiveTintColor: '#BCBCBC',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1, // Apply top border for Cart tab
          borderBottomWidth: 1, // Apply bottom border for Cart tab
          height: 56,
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Cart"
        component={CartStack}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View style={styles.iconStyles}>
              <CartIcon
                width={25}
                height={22}
                fill={focused ? '#FD8D1F' : color}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="order"
        component={PreviousOrderScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View style={styles.iconStyles}>
              <PreviousOrder
                width={25}
                height={25}
                fill={focused ? '#FD8D1F' : color}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View style={styles.iconStyles}>
              <HomeIcon
                width={25}
                height={25}
                fill={focused ? '#FD8D1F' : color}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View style={styles.iconStyles}>
              <NotificationIcon
                width={25}
                height={25}
                fill={focused ? '#FD8D1F' : color}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="UserSetting"
        component={UserSettingScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View style={styles.iconStyles}>
              <UserSettingIcon
                width={25}
                height={25}
                fill={focused ? '#FD8D1F' : color}
              />
            </View>
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

  iconStyles: {
    marginTop: 15,
  },
});
