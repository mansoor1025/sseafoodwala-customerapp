// src/utils/getDeviceId.js
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

export const getDeviceId = async () => {
    let id = await AsyncStorage.getItem("device_id");

    if (!id) {
        id = uuid.v4();
        await AsyncStorage.setItem("device_id", id);
    }

    return id;
};
