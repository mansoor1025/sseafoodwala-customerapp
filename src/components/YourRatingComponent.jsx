import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RatingStars from './RatingStars';

const YourRatingComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.yourRatingText}>Your rating</Text>
      <RatingStars />
    </View>
  );
};

export default YourRatingComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  yourRatingText: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 8,
    color: 'rgba(0, 0, 0, 0.7)',
  },
});
