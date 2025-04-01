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
import React from 'react';
import PencilIcon from '../assets/icons/PencilIcon.svg';
import { useNavigation } from '@react-navigation/native';

const OtpVerificationScreen = () => {
  const navigate = useNavigation();
  const inputArr = [1, 2, 3, 4];
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
            <Text style={{fontFamily: 'InstrumentSans-Medium'}}>
              Enter the OTP sent to{' '}
            </Text>
            <Text style={{fontFamily: 'InstrumentSans-SemiBold'}}>
              +926025468564
            </Text>
          </Text>
          <PencilIcon width={20} height={20} style={styles.pencilIcon} />
        </View>

        <View style={styles.otpBoxContainer}>
          {inputArr.map((item, index) => ( // Improvement: Add a `key` prop to ensure proper rendering of dynamic elements.
            <View style={styles.inputBox} key={index}>
              <TextInput
                style={styles.inputText}
                keyboardType="numeric" // Suggestion: Limit input to numbers since it's an OTP field.
                maxLength={1} // Improvement: Limit input to a single character per box.
              />
            </View>
          ))}
        </View>

        <Text style={styles.otpValidationText}>
          <Text style={{color: 'rgba(0, 0, 0, 0.7)'}}>
            The OTP you entered is{' '}
          </Text>
          <Text style={{color: '#FD8D18'}}> incorrect.</Text>
          <Text style={{color: 'rgba(0, 0, 0, 0.7)'}}>Please try again.</Text>
        </Text>

        <Text style={styles.otpDidntRec}>
          <Text style={{color: 'rgba(0, 0, 0, 0.7)'}}>
            Didn’t receive OTP?{' '}
          </Text>
          <Text style={{color: '#FD8D18'}}>RESEND</Text>{' '}
        </Text>
        
        <TouchableOpacity style={styles.verifyButton} onPress={()=> navigate.navigate('BillingAddress')}>
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
  },

  otpValidationText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 20,
  },

  otpDidntRec: {
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
});
