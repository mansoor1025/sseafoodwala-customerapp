// src/store/useAuthStore.js
import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDeviceId } from "../utils/getDeviceId";

export const useAuthStore = create((set, get) => ({
    user: null,
    token: null,
    isRehydrated: false,
    loginBackScreen: null,

    // Load token on app launch
    loadSession: async () => {
        const deviceId = await getDeviceId();
        console.log("lead session ********* deviceId", deviceId);

        const tokenKey = `token_${deviceId}`;
        const loginBackScreenKey = `loginBackScreen_${deviceId}`;

        const storeUserDetail = await AsyncStorage.getItem(tokenKey);
        const loginBackScreen = await AsyncStorage.getItem(loginBackScreenKey);

        console.log("storeUserDetail*******", storeUserDetail);
        console.log("loginBackScreen*******", loginBackScreen);
        
        if (storeUserDetail) {
            set({ user: storeUserDetail, loginBackScreen });
            return storeUserDetail
        }

        return null
    },

    // After login
    login: async (token, user, loginBackScreen) => {
        const deviceId = await getDeviceId();
        console.log("deviceId******", deviceId);

        const tokenKey = `token_${deviceId}`;
        const loginBackScreenKey = `loginBackScreen_${deviceId}`;
        console.log("tokenKey*******", tokenKey);

        await AsyncStorage.setItem(tokenKey, JSON.stringify(user));
        await AsyncStorage.setItem(loginBackScreenKey, loginBackScreen);

        set({ token, user, loginBackScreen });
    },

    // Logout
    logout: async () => {
        const deviceId = await getDeviceId();
        const tokenKey = `token_${deviceId}`;

        await AsyncStorage.removeItem(tokenKey);
        set({ token: null, user: null });
    },
}));
