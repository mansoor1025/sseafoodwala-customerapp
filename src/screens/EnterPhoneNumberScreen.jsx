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

const EnterPhoneNumberScreen = () => {
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
          />
        </View>
        <Text style={styles.phonenumberValidationText}>
          <Text style={{color: 'rgba(0, 0, 0, 0.5)'}}>
            Phone Number Validation{' '}
          </Text>
          <Text style={{color: '#FD8D1F'}}>Error</Text>
        </Text>

        <TouchableOpacity style={styles.getOtpCodeButton} activeOpacity={0.7}>
          <Text style={styles.getOtpText}>Get OTP Code</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
