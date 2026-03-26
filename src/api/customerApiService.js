import axios from 'axios';
import { BASE_URL } from '@env';
import { getDeviceDetails } from '../utils/getDeviceDetails';
console.log("BASE_URL*******", BASE_URL);

export const customerApiService = axios.create({
    baseURL: `${BASE_URL}/api`, // Replace with your actual API base URL
    timeout: 10000, // 10 seconds timeout
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
});


// ✅ Attach device headers dynamically
customerApiService.interceptors.request.use(
    async (config) => {
        const { deviceId, deviceName } = await getDeviceDetails();
     
        config.headers.deviceId = deviceId?._j;
        config.headers.deviceName = deviceName;

        return config;
    },
    (error) => Promise.reject(error)
);