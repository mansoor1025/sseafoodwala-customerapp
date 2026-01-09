import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { customerApiService } from '../services/customerApiService';

const EnterPhoneNumberScreen = ({ route }) => {
  const [phonenumber, setPhonenumber] = useState("")
  const [phonenumberError, setPhonenumberError] = useState(null)
  const [countdown, setCountdown] = useState(0);
  const intervalRef = useRef(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const { loginBackScreen } = route.params || "";

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startCountdown = () => {
    // avoid multiple intervals
    if (intervalRef.current) return;

    setCountdown(300); // 5 minutes

    intervalRef.current = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const navigate = useNavigation();
  const sentOtp = async () => {
    try {
      setPhonenumberError(null);
      console.log("otp func is calling ");
      console.log("phonenumber*******", phonenumber);
      // Remove starting 0 if exists
      let formattedNumber = phonenumber.startsWith("0")
        ? phonenumber.slice(1)
        : phonenumber;

      // Validate length
      if (formattedNumber.length !== 10) {
        setPhonenumberError("Number must be 10 digits");
        return
      }

      // Add country code if needed (for Pakistan +92)
      formattedNumber = "92" + formattedNumber;
      console.log("Formatted number:", formattedNumber);

      const response = await customerApiService.post('/users/sentOtp', { phonenumber: formattedNumber });
      console.log("response******", response?.data);

      navigate.navigate('OtpVerification', { formattedNumber,loginBackScreen })
    } catch (error) {
      setPhonenumberError(error?.response?.data?.message)
      startCountdown()
      setIsDisabled(true); // disable button
      // Re-enable button when countdown finishes
      setTimeout(() => {
        setIsDisabled(false);
      }, 300000); // 5 minutes
      let message = 'Something went wrong';

      if (error.response) {
        // Backend responded with error
        if (error.response.data?.message) {
          message = error.response.data.message;
        } else if (
          Array.isArray(error.response.data?.errors) &&
          error.response.data.errors.length > 0
        ) {
          message = error.response.data.errors[0].msg;
        }
      }

      Alert.alert('Error', message);
    }
  }

  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <View style={styles.phoneNumberBg}>
          <Image
            source={require('../assets/images/PhoneNumberillustration.png')}
            style={styles.phoneImage}
          />
          <Text style={styles.enterPhoneNumberText}>
            Enter Your Phone Number
          </Text>
          <Text style={styles.codeText}>
            We will send you the 4 digit verification code
          </Text>
        </View>

        <View style={styles.phoneNumberContainer}>
          <Text style={styles.countryCode}>+92</Text>
          <View style={styles.divider}></View>
          <TextInput
            placeholder="3330246433"
            placeholderTextColor={'rgba(0, 0, 0, 0.6)'}
            style={styles.textInput}
            value={phonenumber}
            onChangeText={text => setPhonenumber(text)} // update state on change
            keyboardType="phone-pad" // optional, for numeric keypad
          />
        </View>
        {phonenumberError &&
          <Text style={styles.phonenumberValidationText}>
            <Text style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
              {phonenumberError}{' '}
            </Text>

            {countdown > 0 && (
              <Text style={{ color: '#FD8D1F' }}>
                ({Math.floor(countdown / 60)}:{String(countdown % 60).padStart(2, '0')})
              </Text>
            )}

          </Text>
        }
        <TouchableOpacity
          style={[
            styles.getOtpCodeButton,
            isDisabled && { opacity: 0.5 }  // UI change
          ]}
          activeOpacity={0.7}
          onPress={() => !isDisabled && sentOtp()}  // stop press
          disabled={isDisabled}  // disable touch
        >
          <Text style={styles.getOtpText}>Get OTP Code</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  );
};

export default EnterPhoneNumberScreen;

const styles = StyleSheet.create({
  safeareaContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  container: {
    flex: 1,
    marginTop: '30%',
  },

  phoneNumberBg: {
    alignItems: 'center',
  },

  phoneImage: {
    width: '80%',
    height: 180,
    resizeMode: 'cover',
  },

  enterPhoneNumberText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 18,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.7)',
    marginTop: 30,
    marginBottom: 15,
  },

  codeText: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 12,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.7)',
  },

  phoneNumberContainer: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    borderColor: '#909090',
    borderWidth: 1,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 30,
    paddingHorizontal: 15,
  },

  countryCode: {
    fontFamily: 'InstrumentSans-Regular',
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.6)',
  },

  divider: {
    width: 0,
    borderWidth: 0.3,
    height: 30,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    marginHorizontal: 10,
  },

  textInput: {
    flex: 1,
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.6)',
  },

  phonenumberValidationText: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 14,
    marginTop: 10,
    paddingHorizontal: 20,
  },

  getOtpCodeButton: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#FD8D1F',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },

  getOtpText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 18,
    color: '#FFFFFF',
  },
});
