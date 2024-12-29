import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const RatingStars = ({ratingCount = 5.0}) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <View style={styles.ratingContainer}>
      {stars.map(item => (
        <FontAwesome
          name={'star'}
          size={10}
          color={'#FD8D18'}
          style={styles.starRating}
          key={item}
        />
      ))}
      {ratingCount && <Text style={styles.ratingCount}>({ratingCount})</Text>}
    </View>
  );
};

export default RatingStars;

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
  },

  starRating: {
    marginHorizontal: 1,
  },

  ratingCount: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 6,
    color: '#FD8D18',
    paddingHorizontal: 3,
    paddingVertical: 2,
  },
});
