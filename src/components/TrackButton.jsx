import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const TrackButton = ({content}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.content}>{content}</Text>
    </TouchableOpacity>
  );
};

export default TrackButton;

const styles = StyleSheet.create({
  container: {
    width: 66,
    height: 24,
    borderRadius: 3,
    borderColor: '#FD8D1F',
    borderWidth: 1,
    justifyContent:"center",
    alignItems:"center"
  },

  content: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 12,
    color: '#FD8D1F',
  },
});
