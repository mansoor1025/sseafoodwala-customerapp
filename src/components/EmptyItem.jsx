import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GenralButton from './GenralButton';

const EmptyItem = ({title,content}) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Image source={require('../assets/images/EmptyItems.png')} />
        <Text style={styles.parentContent}>{title}</Text>
        <Text style={styles.childContent}>
         {content}
        </Text>
        
      </View>
      <GenralButton content={'Shop Now'} bgColor={'#FD8D18'} />
    </View>
  );
};

export default EmptyItem;

const styles = StyleSheet.create({
  container: {
  },

  mainContent: {
    alignItems: 'center',
    padding: '20%',
  },

  parentContent: {
    marginTop: '10%',
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 22,
    color: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'center',
  },

  childContent: {
    marginTop: '2%',
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'center',
  },
});
