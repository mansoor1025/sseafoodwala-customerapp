import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SpashScreen from '../src/screens/SpashScreen';
import OfferIntroScreen from '../src/screens/OfferIntroScreen';
import LiveCuttingIntroScreen from '../src/screens/LiveCuttingIntroScreen';
import FastDeliveryIntroScreen from '../src/screens/FastDeliveryIntroScreen';
import SelectCityScreen from '../src/screens/SelectCityScreen';
import BottomTab from '../src/navigation/BottomTab';
import LoginScreen from '../src/screens/LoginScreen';
import EnterPhoneNumberScreen from '../src/screens/EnterPhoneNumberScreen';
import OtpVerificationScreen from '../src/screens/OtpVerificationScreen';
import BillingAddressScreen from '../src/screens/BillingAddressScreen';
import PaymentMethodScreen from '../src/screens/PaymentMethodScreen';
import CardInformationScreen from '../src/screens/CardInformationScreen';
import ConfirmOrderScreen from '../src/screens/ConfirmOrderScreen';
import AccountSettingScreen from '../src/screens/AccountSettingScreen';
import LiveCuttingRequestScreen from '../src/screens/LiveCuttingRequestScreen';
import SessionHistoryScreen from '../src/screens/SessionHistoryScreen';
import FeedBackScreen from '../src/screens/FeedBackScreen';
import TrackOrderScreen from '../src/screens/TrackOrderScreen';
import ReferralEarn from '../src/screens/ReferralEarnScreen';
import AddToCartScreen from '../src/screens/AddToCartScreen';
import { useAuthStore } from '../src/store/useAuthStore';
import { useDispatch } from 'react-redux';
import { fetchCartThunk } from '../src/store/cartThunk';
import Toast from 'react-native-toast-message';

const Stack = createStackNavigator();


const AppNavigator = () => {
    const dispatch = useDispatch();
    const loadSession = useAuthStore(s => s.loadSession);
    const user = useAuthStore(s => s.user);

    useEffect(() => {
        loadSession();
    }, []);

    // 🔹 Fetch cart when user becomes available
    useEffect(() => {
        if (!user) return;

        const parsedUser = typeof user === 'string' ? JSON.parse(user) : user;

        if (parsedUser?.id) {
            dispatch(fetchCartThunk({ userId: parsedUser.id }));
        }
    }, [user]);

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }}>
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
            <Toast />
        </NavigationContainer>
    );
};

export default AppNavigator;

