import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OrderStatusButton from './OrderStatusButton';
import TrackButton from './TrackButton';
import YourRatingComponent from './YourRatingComponent';

const TrackOrder = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.trackContainer}>
        <View style={styles.orderImageContainer}>
          <Image
            source={{
              uri: item.orderImage,
            }}
            style={styles.orderImage}
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.deliveryTimeText}>{item.content.delivery}</Text>
          <Text style={styles.orderDetailText}>
            <Text style={{color: 'rgba(0, 0, 0, 0.7)'}}>
              {item.content.orderDetails}
            </Text>
            <Text
              style={styles.seeDetailsText}
              onPress={() => console.log('hello')}>
              {' '}
              See Details
            </Text>
          </Text>
          <View style={styles.orderStatusRatingContainer}>
            <OrderStatusButton content={item.orderStatus} />

            {item.orderStatus === 'Complete' && (
              <View style={styles.ratingContainer}>
                <YourRatingComponent />
              </View>
            )}
          </View>
        </View>

        <TrackButton content={item.buttonStatus} />
      </View>
      <View style={styles.divider}></View>
    </View>
  );
};

export default TrackOrder;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },

  trackContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  orderImageContainer: {
    width: 78,
    height: 50,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
  },

  orderImage: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    resizeMode: 'cover',
  },

  deliveryTimeText: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 10,
    color: 'rgba(0, 0, 0, 0.7)',
  },
  orderDetailText: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 10,
  },

  contentContainer: {
    marginRight: 30,
  },

  divider: {
    width: '100%',
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderWidth: 0.8,
  },

  seeDetailsText: {
    color: '#FD8D1F',
    textDecorationLine: 'underline',
  },

  orderStatusRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  ratingContainer: {
    marginTop: 6,
  },
});
