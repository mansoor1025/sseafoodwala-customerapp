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
        const tokenKey = `token_${deviceId}`;
        const storeUserDetail = await AsyncStorage.getItem(tokenKey);

        if (storeUserDetail) {
            set({ user: storeUserDetail });
            return storeUserDetail
        }

        return null
    },

    // After login
    login: async (token, user, loginBackScreen) => {
        const deviceId = await getDeviceId();
        const tokenKey = `token_${deviceId}`;
        await AsyncStorage.setItem(tokenKey, JSON.stringify(user));
        set({ token, user });
    },

    // Logout
    logout: async () => {
        const deviceId = await getDeviceId();
        const tokenKey = `token_${deviceId}`;

        await AsyncStorage.removeItem(tokenKey);
        set({ token: null, user: null });
    },
}));
