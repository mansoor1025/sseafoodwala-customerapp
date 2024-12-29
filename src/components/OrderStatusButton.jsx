import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const OrderStatusButton = ({content}) => {
  return (
    <View
      style={[
        styles.container,
        content === 'Complete'
          ? {backgroundColor: '#CDD9E4'}
          : {backgroundColor: '#FFE8D2'},
      ]}>
      <Text
        style={[
          styles.statusContent,
          content === 'Complete' ? {color: '#07427A'} : {color: '#FD8D1F'},
        ]}>
        {content}
      </Text>
    </View>
  );
};

export default OrderStatusButton;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    width: 62,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },

  statusContent: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 10,
    color: '#FD8D1F',
  },
});
