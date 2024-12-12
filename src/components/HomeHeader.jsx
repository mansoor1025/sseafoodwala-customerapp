import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import DrawableIcon from '../assets/icons/DrawableIcon.svg';
const HomeHeader = () => {
  return (
    <View style={styles.container}>
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
    borderBottomWidth: 1, // Apply bottom border for Cart tab
    paddingBottom: 10,
    borderBottomColor: '#d3d3d3',
    padding: 15,
    backgroundColor: '#FFFFFF', // Required for shadow visibility
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 3}, // Shadow appears only at the bottom
    shadowOpacity: 0.1, // Adjust shadow transparency
    shadowRadius: 3, // Blur effect for shadow
    elevation: 4, // Required for Android shadow
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
