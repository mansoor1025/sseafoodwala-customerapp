// src/store/useAuthStore.js
import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDeviceId } from "../utils/getDeviceId";

export const useAuthStore = create((set, get) => ({
    user: null,
    token: null,
    isRehydrated: false,

    // Load token on app launch
    loadSession: async () => {
        const deviceId = await getDeviceId();
        const tokenKey = `token_${deviceId}`;

        const storedToken = await AsyncStorage.getItem(tokenKey);

        if (storedToken) {
            set({ token: storedToken });
        }

        set({ isRehydrated: true });
    },

    // After login
    login: async (token, user) => {
        const deviceId = await getDeviceId();
        console.log("deviceId******", deviceId);

        const tokenKey = `token_${deviceId}`;

        await AsyncStorage.setItem(tokenKey, token);

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
