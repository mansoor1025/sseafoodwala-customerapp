import {StyleSheet, Text,TouchableOpacity, Image,View} from 'react-native';
import React from 'react';
import CameraIcon from '../assets/icons/CameraIcon.svg';

const ProfilePicCamera = () => {
  return (
    <View style={styles.profilePicContainer}>
      <Image
        source={require('../assets/images/mansoor.jpg')}
        style={styles.dp}
      />
      <TouchableOpacity>
        <CameraIcon width={15} height={15} style={styles.cameraIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePicCamera;

const styles = StyleSheet.create({
  profilePicContainer: {
    marginTop: '10%',
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    borderColor: '#FD8D1F',
    borderWidth: 1,
    alignSelf: 'center',
    position: 'relative',
  },

  dp: {
    width: '100%',
    height: '100%',
    borderRadius: 80 / 2,
  },

  cameraIcon: {
    position: 'absolute', // Place on top of the image
    top: -15, // Adjust as needed
    right: 10, // Adjust as needed
  },
});
