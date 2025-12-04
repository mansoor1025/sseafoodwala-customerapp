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
import Header from '../components/Header';
import TextInputLabel from '../components/TextInputLabel';
import ProfilePicCamera from '../components/ProfilePicCamera';

const EditProfileScreen = () => {
  dasd
  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <StatusBar
        translucent
        backgroundColor="#000000"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <Header title={'Edit Profile'} />
        <View style={styles.mainContent}>
          <ProfilePicCamera />

          <View style={styles.formContainer}>
            <TextInputLabel label={'Full Name'} placeholder={'Usman Ahmmed'} />
            <TextInputLabel
              label={'Email Address'}
              placeholder={'usmanahmmed.com'}
            />
            <TextInputLabel
              label={'Mobile Number'}
              placeholder={'+92 365895788554'}
            />
            <TextInputLabel
              label={'Delivery Address'}
              placeholder={'Karachi,Pakistan'}
            />
            <TouchableOpacity style={styles.saveChangesButton}>
              <Text style={styles.saveChangesText}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  safeareaContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  container: {
    flex: 1,
  },

  mainContent: {},

  formContainer: {
    padding: 20,
  },

  saveChangesButton: {
    marginTop: '10%',
    width: '100%',
    height: 40,
    backgroundColor: '#FD8D1F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  saveChangesText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 14,
    color: '#FFFFFF',
  },
});
