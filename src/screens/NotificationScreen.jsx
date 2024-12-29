import {StyleSheet, SafeAreaView, StatusBar, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import NotificationItem from '../components/NotificationItem';

const NotificationScreen = () => {
  const notificationList = [
    {
      iconBg: '#FFE8D2',
      icon: 'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735325360/Order_Confirmed_Icon_p6griv.png',
      content: {
        parent: 'Order Confirmed ',
        child:
          'Thank you for your order! We’ve started \n preparing your fishes. Order ID: Fb5T3',
      },
      time: '9:25 AM',
    },
    {
      iconBg: '#CDD9E4',
      icon: 'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735325846/Fish_Cut_Icon_zckgmf.png',
      content: {
        parent: 'Fish Cut and Weighted',
        child:
          'Your fishes have been cut and weigh \n 1.85kg. Ready for dispatch!',
      },
      time: '11:45 AM',
    },
    {
      iconBg: '#FFE8D2',
      icon: 'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735365737/Rider_Pickup_Icon_1_bmutzr.png',
      content: {
        parent: 'Rider Pickup',
        child:
          'Thank you for your order! We’ve started \n preparing your fishes',
      },
      time: '04:01 PM',
    },
    {
      iconBg: '#CDD9E4',
      icon: 'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735365825/Rider_Nearby_Icon_ewikub.png',
      content: {
        parent: 'Rider Nearby',
        child:
          'Mansoor is just around the corner. Be \n ready to receive your order! Mansoor’s \n Contact Number: +92 254514875',
      },
      time: '11:45 AM',
    },
    {
      iconBg: '#FFE8D2',
      icon: 'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735365974/Order_delivery_Icon_2x_y9s0an.png',
      content: {
        parent: 'Order Delivered',
        child: 'Your order has been delivered. Enjoy \n your meal!',
      },
      time: '23:45 AM',
    },
  ];
  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <Header title={'Notification'} />
        <View style={styles.mainContent}>
          <Text style={styles.todayText}>Today</Text>
          {notificationList.map((item, index) => (
            <NotificationItem
              key={index}
              item={item}
              isLast={index === notificationList.length - 1} // Check if it's the last iteration
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;

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
    marginTop: '10%',
  },

  todayText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 20,
  },
});
