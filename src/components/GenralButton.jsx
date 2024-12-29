import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const GenralButton = ({content, bgColor = '#FD8D18', customStyle}) => {
  return (
    <TouchableOpacity style={[styles.container, customStyle]}>
      <Text style={styles.contentText}>{content}</Text>
    </TouchableOpacity>
  );
};

export default GenralButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  contentText: {
    fontFamily: 'InstrumentSans-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
});
