import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserProfile, updateUserProfile } from '../../api/userProfile/userProfile.api';
import { USER_TYPES } from '../../constants/user.constants';
import { setUserProfile } from './userProfileSlice';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const updateUserProfileThunk = createAsyncThunk(
    'users/updateUserProfile',
    async ({ data, userType }, { dispatch, rejectWithValue }) => {

        try {
            console.log("data*********", data);
            console.log("userType*********", userType);
            let response = {}
            const apiCall = userType === USER_TYPES.LOGGEDIN ? true : false;

            if (apiCall) {
                response = await updateUserProfile(data);
                console.log("response**********", response);

            }
            const payload = {
                userData: { ...data },
                isFirstTimeUser: false,
            }
            console.log("payload********", payload);

            dispatch(
                setUserProfile(payload)
            );

            const deviceId = await DeviceInfo.getUniqueId();
            const key = `guestUserProfile_${deviceId}`;

            await AsyncStorage.removeItem(key);
            await AsyncStorage.setItem(key, JSON.stringify({ ...payload }));

            return response; // ✅ this allows unwrap() to work

        } catch (error) {
            return rejectWithValue(error || error.message);
        }
    }
);

export const fetchUserProfileThunk = createAsyncThunk(
    'users/getUserProfile',
    async ({ userType }, { dispatch, rejectWithValue }) => {
        try {
            let response = null
            console.log("userType*******", userType);

            if (userType === USER_TYPES.GUEST) {
                const deviceId = await DeviceInfo.getUniqueId();
                const key = `guestUserProfile_${deviceId}`;
                const raw = await AsyncStorage.getItem(key);
                const guestData = raw ? JSON.parse(raw) : null;
                response = guestData ? guestData : { userData: {}, isFirstTimeUser: true }
            }

            if (userType === USER_TYPES.LOGGEDIN) {
                const apiResponse = await getUserProfile();
                response = { userData: apiResponse?.data?.data, isFirstTimeUser: false }
                // console.log("api response********", response);

            }

            // const resData = response.data.data;
            // console.log("resData********", resData);
            if (response) {
                dispatch(
                    setUserProfile(response)
                );
            }


            return response;
        } catch (err) {
            console.log("fetchUserProfileThunk err*****", err);

            return rejectWithValue(
                err.response || 'Failed to fetch cart'
            );
        }
    }
);

