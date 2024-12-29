import {StyleSheet, SafeAreaView, StatusBar, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import TrackOrderSteps from '../components/TrackOrderSteps';
import HomeIcon from '../assets/icons/HomeIcon';

const TrackOrderScreen = () => {
  const trackStepsList = [
    {
      stepIcon:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735474030/Order_Placed_icon_jdrtog.png',
      content: {
        title: 'Order Placed',
        description: 'We have recieved your order.',
      },
      time: '10:15 AM',
    },
    {
      stepIcon:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735475426/Payment_Confirmed_Icon_eq5ifh.png',
      content: {
        title: 'Payment Confirmed',
        description: 'Awaiting confirmation',
      },
      time: '10:20 AM',
    },
    {
      stepIcon:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735475656/Order_Processed_icon_px6m38.png',
      content: {
        title: 'Order processed',
        description: 'We are preparing your order.',
      },
      time: '10:25 AM',
    },
    {
      stepIcon:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735475732/Rady_to_Pickup_icon_kdiehq.png',
      content: {
        title: 'Ready to Pickup',
        description: 'Order #Fb5T3 from mosiuer.',
      },
      time: '03:25 AM',
    },
  ];
  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <StatusBar
        translucent
        backgroundColor="#000000"
        barStyle="light-content"
      />

      <View style={styles.container}>
        <Header title={'Track Order'} />
        <View style={styles.mainContent}>
          <Text style={styles.dateTime}>Wed, 14 Jan</Text>
          <View style={styles.orderPriceContainer}>
            <Text style={styles.orderIdText}>Order ID: Fb5T3</Text>
            <Text style={styles.priceText}>Price: 3,530 PKR</Text>
          </View>
          <Text style={styles.etaText}>ETA: 4 hrs: 15 Min</Text>
          {trackStepsList.map((item, index) => (
            <TrackOrderSteps
              key={index}
              item={item}
              isLast={index === trackStepsList.length - 1}
            />
          ))}

          <View style={styles.deliveryAddressContainer}>
            <HomeIcon width={25} height={25} />

            <View style={styles.deliveryAddressTextContainer}>
              <Text style={styles.deliveryText}>Delivery Address</Text>
              <Text style={styles.addressText}>
                Home, Word & Other Address {'\n'}House No: 1546, 2nd Floor,
                Sector 56, Karachi, Pakistan
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TrackOrderScreen;

const styles = StyleSheet.create({
  safeareaContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  container: {
    flex: 1,
  },

  mainContent: {
    padding: 20,
  },

  dateTime: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.7)',
  },

  orderPriceContainer: {
    flexDirection: 'row',
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  orderIdText: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.7)',
  },

  priceText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.7)',
  },

  etaText: {
    marginTop: '5%',
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.7)',
    marginBottom: 20,
  },

  deliveryAddressContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 75,

    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
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
    marginHorizontal: 5,
    overflow: 'visible', // Ensures shadow is rendered outside the bounds
  },

  deliveryAddressTextContainer: {
    marginHorizontal: 20,
  },

  deliveryText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.7)',
  },

  addressText: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 10,
    color: 'rgba(0, 0, 0, 0.6)',
  },
});
