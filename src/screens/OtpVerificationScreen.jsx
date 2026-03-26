import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import PencilIcon from '../assets/icons/PencilIcon.svg';
import { useNavigation } from '@react-navigation/native';
import { customerApiService } from '../api/customerApiService';
import { useAuthStore } from "../store/useAuthStore";
import Toast from 'react-native-toast-message';

const OtpVerificationScreen = ({ route }) => {
  const inputRefs = useRef([]);
  const { formattedNumber, loginBackScreen } = route.params || "";
  const navigate = useNavigation();
  const inputArr = [1, 2, 3, 4];
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [otpException, setotpException] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const intervalRef = useRef(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [phonenumberError, setPhonenumberError] = useState(null)
  const login = useAuthStore((s) => s.login);

  const verifyOtp = async () => {
    try {
      const finalOtp = otp.join("");
      const response = await customerApiService.post('/users/verifyOtp', { phonenumber: formattedNumber, otp: parseInt(finalOtp) });
      login(response?.data?.data?.accessToken, response?.data?.data?.userObj, response?.data?.data?.refreshToken);
      navigate.navigate(loginBackScreen)
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: error?.response?.data?.message || 'Please try again',
        text2: error?.response?.data?.message || 'Please try again',
      });
      if (error?.response?.data?.message) {
        setotpException(true)
      }
    }
  }

  const resendOtp = async () => {
    try {
      const response = await customerApiService.post('/sentOtp', { phonenumber: formattedNumber });
    } catch (error) {
      startCountdown()
      setPhonenumberError(error?.response?.data?.message)
      setIsDisabled(true);
      setTimeout(() => {
        setIsDisabled(false);
        setPhonenumberError(null)
      }, 300000); // 5 minutes

    }
  }

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

  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <View style={styles.otpBg}>
          <Image
            source={require('../assets/images/verificationIllustration.png')}
            style={styles.otpImage}
          />
        </View>
        <Text style={styles.otpverifyText}>OTP Verification</Text>
        <View style={styles.sentOtpContainer}>
          <Text style={styles.enterOtpText}>
            <Text style={{ fontFamily: 'InstrumentSans-Medium' }}>
              Enter the OTP sent to{' '}
            </Text>
            <Text style={{ fontFamily: 'InstrumentSans-SemiBold' }}>
              +{formattedNumber}
            </Text>
          </Text>
          <TouchableOpacity onPress={() => navigate.navigate('EnterPhoneNumber')}>
            <PencilIcon width={20} height={20} style={styles.pencilIcon} />
          </TouchableOpacity>

        </View>

        <View style={styles.otpBoxContainer}>
          {inputArr.map((item, index) => (
            <View style={styles.inputBox} key={index}>
              <TextInput
                ref={(ref) => (inputRefs.current[index] = ref)}
                style={styles.inputText}
                keyboardType="numeric"
                maxLength={1}
                onChangeText={(text) => {
                  const newOtp = [...otp];
                  newOtp[index] = text;
                  setOtp(newOtp);

                  if (text && index < inputArr.length - 1) {
                    inputRefs.current[index + 1].focus();
                  }
                  if (!text && index > 0) {
                    inputRefs.current[index - 1].focus();
                  }
                }}
              />
            </View>
          ))}
        </View>

        {otpException && <Text style={styles.otpValidationText}>
          <Text style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
            The OTP you entered is{' '}
          </Text>
          <Text style={{ color: '#FD8D18' }}> incorrect.</Text>
          <Text style={{ color: 'rgba(0, 0, 0, 0.7)' }}> Please try again.</Text>
        </Text>}

        {!phonenumberError &&
          <TouchableOpacity onPress={() => resendOtp()}>
            <Text style={styles.otpDidntRec}>
              <Text style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                Didn’t receive OTP?{' '}
              </Text>

              <Text style={{ color: '#FD8D18' }}>RESEND</Text>
            </Text>
          </TouchableOpacity>
        }

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

        <TouchableOpacity style={[styles.verifyButton, isDisabled && { opacity: 0.5 }]}
          disabled={isDisabled}
          onPress={() => !isDisabled && verifyOtp()}>
          <Text style={styles.verifyText}>Verify & Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OtpVerificationScreen;

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

  otpBg: {
    alignItems: 'center',
  },

  otpImage: {
    width: '258',
    height: 160,
    resizeMode: 'cover',
  },

  otpverifyText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 18,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.7)',
    marginTop: '10%',
  },

  sentOtpContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'center',
  },

  enterOtpText: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.7)',
  },

  pencilIcon: {
    marginHorizontal: 4,
  },

  otpBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '7%',
  },

  inputBox: {
    width: 45,
    height: 45,
    borderRadius: 8,
    borderColor: 'rgba(0, 0, 0, 0.7)',
    borderWidth: 0.8,
    backgroundColor: 'white', // Optional for better visibility
    shadowColor: '#000', // Shadow color
    shadowOffset: {
      width: 0, // Horizontal shadow offset
      height: 4, // Vertical shadow offset
    },
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 5, // Shadow blur radius
    elevation: 5, // For Android shadow
    marginHorizontal: 15,
  },

  inputText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.7)',
  },

  otpValidationText: {
    marginTop: 20,
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 14,
    textAlign: 'center',
  },

  otpDidntRec: {
    paddingVertical: 15,
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 12,
    textAlign: 'center',
  },

  verifyButton: {
    width: '90%',
    height: 45,
    backgroundColor: '#FD8D18',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: '10%',
    justifyContent: 'center',
  },

  verifyText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },

  phonenumberValidationText: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 14,
    marginTop: 15,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
});
