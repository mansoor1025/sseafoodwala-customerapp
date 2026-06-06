import axios from 'axios';
import { BASE_URL } from '@env';
import { getDeviceDetails } from '../utils/getDeviceDetails';
import { useAuthStore } from '../store/useAuthStore';
import { isTokenExpiringSoon } from '../utils/tokenUtils';
// console.log("BASE_URL*******", BASE_URL);
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(p => {
    error ? p.reject(error) : p.resolve(token);
  });
  failedQueue = [];
};

export const customerApiService = axios.create({
  baseURL: `${BASE_URL}/api`, // Replace with your actual API base URL
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// ✅ Attach device headers dynamically
customerApiService.interceptors.request.use(
  async (config) => {
    // device info
    const { deviceId, deviceName } = await getDeviceDetails();

    config.headers.deviceId = deviceId;
    config.headers.deviceName = deviceName;

    const { token } = useAuthStore.getState();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/* ================= REQUEST (PROACTIVE) ================= */
customerApiService.interceptors.request.use(
  async (config) => {
    const store = useAuthStore.getState();
    const { token, refreshToken, setToken, logout, setAccessToken } = store;
    const { deviceId, deviceName } = await getDeviceDetails();

    config.headers['deviceId'] = deviceId;
    config.headers['deviceName'] = deviceName;
    config.headers['refreshToken'] = refreshToken;
    console.log("config.headers*******", config.headers);

    if (token && isTokenExpiringSoon(token, 30)) {
      console.log("token expired condition ***************");

      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const res = await axios.post(
            `${BASE_URL}/api/users/refreshAccessToken`,
            {},
            { headers: config.headers } // optional, just to be explicit

          );

          const { accessToken, userObj, refreshToken } = res?.data

          setAccessToken(accessToken, userObj, refreshToken);
          processQueue(null, res?.data?.accessToken);
        } catch (err) {
          console.log("err**********", err);

          processQueue(err, null);
          logout();
          return Promise.reject(err);
        } finally {
          isRefreshing = false;
        }
      }

      return new Promise((resolve, reject) => {
        failedQueue.push({
          resolve: (newToken) => {
            config.headers.Authorization = `Bearer ${newToken}`;
            resolve(config);
          },
          reject,
        });
      });
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  Promise.reject
);

/* ================= RESPONSE (REACTIVE) ================= */
customerApiService.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      error.response?.data?.code === 'ACCESS_TOKEN_EXPIRED' &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: (token) => {
              originalRequest.headers.Authorization = `Bearer ${token}`;
              resolve(customerApiService(originalRequest));
            },
            reject,
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;
      const { refreshToken, setToken, logout } = useAuthStore.getState();
      try {

        console.log("this refresh token api is running ****************");

        const res = await axios.post(
          `${BASE_URL}/api/users/refreshAccessToken`,
          { refreshToken }
        );

        // setToken(res.data.data.accessToken);
        processQueue(null, res.data.data.accessToken);

        originalRequest.headers.Authorization =
          `Bearer ${res.data.data.accessToken}`;

        return customerApiService(originalRequest);
      } catch (err) {
        processQueue(err, null);
        logout();
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);
