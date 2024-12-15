import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Header = ({title}) => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate.navigate('HomeScreen')}>
        <Ionicons name={'chevron-back'} size={30} />
      </TouchableOpacity>

      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
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

  titleText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 22,
    color: '#4D4D4D',
    textAlign: 'center',
    paddingHorizontal: 80,
    paddingVertical: 2,
  },
});
