// src/store/useAuthStore.js
import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDeviceId } from "../utils/getDeviceId";
import DeviceInfo from 'react-native-device-info';

export const useAuthStore = create((set, get) => ({
    user: null,
    token: null,
    isRehydrated: false,
    loginBackScreen: null,
    refreshToken: null,

    // Load token on app launch
    loadSession: async () => {
        const deviceId = await DeviceInfo.getUniqueId();
        const tokenKey = `token_${deviceId}`;
        
        const storeUserDetail = JSON.parse(await AsyncStorage.getItem(tokenKey));
        console.log("storeUserDetail?.user*****", storeUserDetail);

        if (storeUserDetail) {
            set({ user: storeUserDetail?.user, token: storeUserDetail?.token, refreshToken: storeUserDetail?.refreshToken });
            return storeUserDetail
        }

        return null
    },

    // After login
    login: async (token, user, refreshToken) => {
        const deviceId = await DeviceInfo.getUniqueId();
        console.log("deviceId******", deviceId);

        const tokenKey = `token_${deviceId}`;
        console.log("login tokenKey*******", tokenKey);
        console.log("refreshToken******", refreshToken);

        const checker = await AsyncStorage.setItem(tokenKey, JSON.stringify({ user, token, refreshToken }));
        console.log("checker******", checker);

        set({ token, user, refreshToken });
        console.log("all good all values are storing correcly******");

    },

    // Logout
    logout: async () => {
        const deviceId = await DeviceInfo.getUniqueId();
        const tokenKey = `token_${deviceId}`;

        await AsyncStorage.removeItem(tokenKey);
        set({ token: null, user: null, refreshToken: null });
    },

    setAccessToken: async (accessToken, user, refreshToken) => {
        console.log("setAccessToken****** is calling");

        const deviceId = await DeviceInfo.getUniqueId();
        const tokenKey = `token_${deviceId}`;

        await AsyncStorage.removeItem(tokenKey);
        set({ token: accessToken, user: user, refreshToken: refreshToken });
        await AsyncStorage.setItem(tokenKey, JSON.stringify({ user, token: accessToken, refreshToken }));
    },
}));
