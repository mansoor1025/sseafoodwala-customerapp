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
import SettingFeatures from '../components/SettingFeatures';
import LogoutIcon from '../assets/icons/LogoutIcon.svg';

const UserSettingScreen = () => {
  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <StatusBar
        translucent
        backgroundColor="#000000"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <Header title={'Settings'} />
        <View style={styles.mainContent}>
          <View style={styles.profileContainer}>
            <View style={styles.profilePic}>
              <Image
                source={require('../assets/images/mansoor.jpg')}
                style={styles.dp}
              />
            </View>

            <View>
              <Text style={styles.username}>Usman Ahmmed</Text>
              <Text style={styles.phonenumber}>
                <Text style={{fontFamily: 'InstrumentSans-Medium'}}>
                  Phone:{' '}
                </Text>
                <Text style={{fontFamily: 'InstrumentSans-SemiBold'}}>
                  +92 5463 25482
                </Text>
              </Text>
            </View>

            <TouchableOpacity style={styles.editProfileButton}>
              <Text style={styles.editProfileText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.settingFeatures}>
            <SettingFeatures feature={'Account Setting'} screen={'AccountSetting'} />
            <SettingFeatures feature={'Privacy and Policy'} />
            <SettingFeatures feature={'Refund Policy'} />
            <SettingFeatures feature={'Terms & Conditions'} />
          </View>

          <TouchableOpacity style={styles.logoutButton}>
            <LogoutIcon />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserSettingScreen;

const styles = StyleSheet.create({
  safeareaContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  container: {
    flex: 1,
  },

  mainContent: {
    padding: 20,
  },

  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,

    width: '100%',
    height: 92,
    borderRadius: 10,
    borderColor: '#d3d3d3', // Light grey border color
    backgroundColor: '#FFFFFF', // Solid background color for better shadow effect
    shadowColor: '#000000', // Darker shadow for better visibility outside
    shadowOffset: {
      width: 0,
      height: 2, // Pushes the shadow below the container
    },
    shadowOpacity: 0.1, // Lower opacity for a subtle effect
    shadowRadius: 4, // Increases the blur to push shadow further
    elevation: 3, // Adds shadow for Android
    overflow: 'visible', // Ensures shadow is rendered outside the bounds
  },

  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    borderColor: '#FD8D1F',
    borderWidth: 1,
  },

  dp: {
    width: '100%',
    height: '100%',
    borderRadius: 60 / 2,
    resizeMode: 'cover',
  },

  username: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.7)',
  },

  phonenumber: {
    fontSize: 10,
    color: 'rgba(0, 0, 0, 0.7)',
  },

  editProfileButton: {
    width: 61,
    height: 20,
    backgroundColor: '#FD8D1F',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  editProfileText: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 10,
    color: '#FFFFFF',
  },

  settingFeatures: {
    marginTop: '10%',
  },

  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: 114,
    height: 34,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    borderColor: 'rgba(7, 66, 122, 0.5)',
    borderWidth: 0.8,
    alignSelf: 'center',
    marginTop: '20%',
  },

  logoutText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.7)',
  },
});
