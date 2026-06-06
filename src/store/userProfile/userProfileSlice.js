import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {},
    isFirstTimeUser: true,
    isLoaded: true
};

const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
        setUserProfile(state, action) {
            state.userData = action.payload.userData;
            state.isFirstTimeUser = action.payload.isFirstTimeUser ?? false;
            state.isLoaded = false;
        },
        clearCart(state) {
            return initialState;
        }
    }
});

export const { setUserProfile, clearUserPrfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;
