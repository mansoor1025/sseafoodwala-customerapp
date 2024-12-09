import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import DrawableIcon from '../assets/icons/DrawableIcon.svg';
const HomeHeader = () => {
  return (
    <View style={[styles.container]}>
      <DrawableIcon width={30} height={30} style={styles.drawableIcon} />
      <TouchableOpacity style={styles.profilePicContainer}>
        <Image
          source={require('../assets/images/mansoor.jpg')}
          style={styles.profilePic}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Ensures vertical alignment
    borderBottomWidth: 2, // Apply bottom border for Cart tab
    paddingBottom: 15,
    borderBottomColor: '#E3E3E3',
    padding: 10,
  },

  profilePicContainer: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2, // Dynamically calculated for consistency
    borderColor: '#FD8D1F',
    borderWidth: 2,
    overflow: 'hidden', // Ensures the image stays inside the container
  },
  profilePic: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  drawableIcon: {
    marginTop: 12,
  },
});
