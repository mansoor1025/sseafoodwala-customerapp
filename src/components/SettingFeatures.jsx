import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ForwardArrow from '../assets/icons/ForwardArrow.svg';
import { useNavigation } from '@react-navigation/native';

const SettingFeatures = ({feature,screen}) => {
  const navigate = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={()=> navigate.navigate(screen)}>
      <Text style={styles.content}>{feature}</Text>
      <ForwardArrow width={12} height={12} />
    </TouchableOpacity>
  );
};

export default SettingFeatures;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    width: '100%',
    height: 45,
    borderRadius: 10,
    paddingHorizontal: 20,
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
    overflow: 'visible', // Ensures shadow is rendered outside the bounds,
    marginBottom:20
  },

  content: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.7)',
  },
});
