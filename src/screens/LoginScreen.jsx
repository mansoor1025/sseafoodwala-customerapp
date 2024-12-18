import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FacebookIcon from '../assets/icons/Facebook.svg';
import GoogleIcon from '../assets/icons/GoogleIcon.svg';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logoImage}
          />
        </View>
        <Text style={styles.loginText}>Login</Text>
        <Text style={styles.preferredLogin}>
          Choose your preferred login method to continue.
        </Text>
        <TouchableOpacity style={styles.phoneNumberContinueButton}>
          <Text style={styles.phoneNumberText}>Continue With Phone Number</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.facebookButtonContainer}>
          <FacebookIcon width={25} height={25} />
          <Text style={styles.phoneNumberText}>Continue With Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.facebookButtonContainer}>
          <GoogleIcon width={25} height={25} />
          <Text style={styles.phoneNumberText}>Continue With Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeareaContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  container: {
    flex: 1,
    justifyContent: 'center', // Centers all content vertically
    alignItems: 'center', // Centers all content horizontally
  },

  logoContainer: {
    width: 112,
    height: 112,
    borderRadius: 112 / 2,
    marginBottom: 20,
  },

  logoImage: {
    width: 112,
    height: 112,
    borderRadius: 112 / 2,
  },

  loginText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 24,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.7)',
    marginTop: 20,
    marginBottom: 10,
  },

  preferredLogin: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 14, // Slightly larger for better readability
    color: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'center',
  },

  phoneNumberContinueButton: {
    marginTop: 50,
    width: '80%',
    height: 45,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },

  phoneNumberText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.7)',
  },

  facebookButtonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    width: '80%',
    height: 45,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 30,
  },
});
