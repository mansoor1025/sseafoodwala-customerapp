import { GoogleSignin } from '@react-native-google-signin/google-signin';

// Initialize
export const configureGoogleSignIn = () => {
    GoogleSignin.configure({
        // The Web Client ID is still needed if you want offline access (refresh token) 
        // for a backend server or if you're targeting web/Expo Go.
        webClientId: '113351662068-gj89u7d8h9m84f4rvqo08luflbpil70o.apps.googleusercontent.com',

        // *** CRITICAL: ADD YOUR ANDROID CLIENT ID HERE ***
        androidClientId: '113351662068-a1akdiuirrrrilr4hhicc8ucp1h4s8gi.apps.googleusercontent.com', // Replace with your full Android Client ID

        offlineAccess: true,
        forceCodeForRefreshToken: true,
    });
};


export const signInWithGoogle = async () => {
    try {
        console.log("checker ********");
        
        await GoogleSignin.hasPlayServices(); // ensures device supports Google Play Services
        const userInfo = await GoogleSignin.signIn();
        console.log('Google user info:', userInfo);

        // Send userInfo.idToken to backend to create your JWT session
        return userInfo;
    } catch (error) {
        console.log('Google Sign-In error:', JSON.stringify(error, null, 2));

        throw error;
    }
};