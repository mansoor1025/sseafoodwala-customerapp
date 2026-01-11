import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PreviousOrderScreen from '../screens/PreviousOrderScreen';
import CartIcon from '../assets/icons/cartIcon.svg';
import PreviousOrder from '../assets/icons/previousOrderIcon.svg';
import HomeIcon from '../assets/icons/HomeIcon.svg';
import NotificationIcon from '../assets/icons/notificationIcon.svg';
import UserSettingIcon from '../assets/icons/userSettingIcon.svg';
import HomeStack from './HomeStack';
import CartStack from './CartStack';
import NotificationScreen from '../screens/NotificationScreen';
import UserSettingScreen from '../screens/UserSettingScreen';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const BottomTab = ({ route }) => {
  const cartCount = useSelector(state => state.cart.totalCount);

  const { city } = route.params || {};
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarActiveTintColor: '#FD8D1F',
        tabBarInactiveTintColor: '#BCBCBC',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1, // Apply top border for Cart tab
          borderBottomWidth: 1, // Apply bottom border for Cart tab
          // height: 56,
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Cart"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={{ position: 'relative' }}>
              <CartIcon
                width={25}
                height={22}
                fill={focused ? '#FD8D1F' : color}
              />

              {cartCount > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>
                    {cartCount > 99 ? '99+' : cartCount}
                  </Text>
                </View>
              )}

            </View>
          ),
        }}
      />
      <Tab.Screen
        name="order"
        component={PreviousOrderScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            // <View style={styles.iconStyles}>
            <PreviousOrder
              width={25}
              height={25}
              fill={focused ? '#FD8D1F' : color}
            />
            // </View>
          ),
        }}
      />

      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        initialParams={{ city }}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            // <View style={styles.iconStyles}>
            <HomeIcon
              width={25}
              height={25}
              fill={focused ? '#FD8D1F' : color}
            />
            // </View>
          ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            // <View style={styles.iconStyles}>
            <NotificationIcon
              width={25}
              height={25}
              fill={focused ? '#FD8D1F' : color}
            />
            // </View>
          ),
        }}
      />

      <Tab.Screen
        name="UserSetting"
        component={UserSettingScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            // <View style={styles.iconStyles}>
            <UserSettingIcon
              width={25}
              height={25}
              fill={focused ? '#FD8D1F' : color}
            />
            // </View>
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
  badge: {
    position: 'absolute',
    top: -6,
    right: -10,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FD8D1F',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
