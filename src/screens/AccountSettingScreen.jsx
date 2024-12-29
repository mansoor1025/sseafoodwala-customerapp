import {StyleSheet, SafeAreaView, StatusBar, Text, View,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import ProfilePicCamera from '../components/ProfilePicCamera';
import TextInputLabel from '../components/TextInputLabel';
import ToggleSwitch from 'toggle-switch-react-native';
import SelectOnlinePayment from '../components/SelectOnlinePayment';

const AccountSettingScreen = () => {
  const handleToggle = () => {
    setIsOn(!isOn);
  };
  const onlinePaymentMethodList = [
    {
      image:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735119287/3dae7998e4ddfb250b1646b3bf6290c6_1_cmex9g.png',
      content: 'Jazz Cash',
      imageSize: {width: 39, height: 18},
    },
    {
      image:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735119308/unnamed_1_d6vq97.png',
      content: 'Easypaisa',
      imageSize: {width: 19, height: 19},
    },
    {
      image:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735119339/image_17_ps7kjv.png',
      content: 'Sadapay',
      imageSize: {width: 19, height: 20},
    },
  ];

  const [isOn, setIsOn] = useState(false);
  const [onlinePayment, setOnlinePayment] = useState('');

  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <StatusBar
        translucent
        backgroundColor="#000000"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <Header title={'Account Settings'} />
        <View style={styles.mainContent}>
          <ProfilePicCamera />
          <TextInputLabel
            label={'Phone Number'}
            placeholder={'+92 365895788554'}
          />
          <View style={styles.twoFactorAuthContainer}>
            <Text style={styles.twoFactorText}>
              Enable Two-Factor Authentication (2FA)
            </Text>

            <ToggleSwitch
              isOn={isOn}
              onColor="#07427A"
              offColor="#ecf0f1"
              size="medium"
              onToggle={handleToggle} // Update the state on toggle
            />
          </View>

          <SelectOnlinePayment title={'Save Payment Method'} onlinePaymentMethodList={onlinePaymentMethodList} setOnlinePayment={setOnlinePayment} onlinePayment={onlinePayment} />
         <TouchableOpacity style={styles.saveChangesButton}>
                       <Text style={styles.saveChangesText}>Save Changes</Text>
                     </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AccountSettingScreen;

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

  twoFactorAuthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
    justifyContent: 'space-between',
  },

  twoFactorText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.5)',
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
