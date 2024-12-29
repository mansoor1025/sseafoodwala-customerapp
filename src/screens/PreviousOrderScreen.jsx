import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import TrackOrder from '../components/TrackOrder';
import EmptyItem from '../components/EmptyItem';

const PreviousOrderScreen = () => {
  const trackOrderList = [
    {
      id: 1,
      orderImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735378663/Rectangle_40_ezblav.png',
      content: {
        delivery: 'Delivery 10:15 : 2:15pm',
        orderDetails: '1kg Live Fishes, 1kg Sea,,,, ',
      },
      orderStatus: 'In Progress',
      buttonStatus: 'Track',
    },
    {
      id: 2,
      orderImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735382294/Rectangle_40_1_kciues.png',
      content: {
        delivery: 'Delivery 10:15 : 2:15pm',
        orderDetails: '1kg Live Fishes, 1kg Sea,,,, ',
      },
      orderStatus: 'Complete',
      buttonStatus: 'Re Order',
    },
    {
      id: 3,
      orderImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735383876/Rectangle_40_2_aow3dx.png',
      content: {
        delivery: 'Delivery 10:15 : 2:15pm',
        orderDetails: '1kg Live Fishes, 1kg Sea,,,, ',
      },
      orderStatus: 'Cancel',
      buttonStatus: 'Re Order',
    },
    {
      id: 4,
      orderImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735378663/Rectangle_40_ezblav.png',
      content: {
        delivery: 'Delivery 10:15 : 2:15pm',
        orderDetails: '1kg Live Fishes, 1kg Sea,,,, ',
      },
      orderStatus: 'In Progress',
      buttonStatus: 'Track',
    },
    {
      id: 5,
      orderImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735382294/Rectangle_40_1_kciues.png',
      content: {
        delivery: 'Delivery 10:15 : 2:15pm',
        orderDetails: '1kg Live Fishes, 1kg Sea,,,, ',
      },
      orderStatus: 'Complete',
      buttonStatus: 'Re Order',
    },
    {
      id: 6,
      orderImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735383876/Rectangle_40_2_aow3dx.png',
      content: {
        delivery: 'Delivery 10:15 : 2:15pm',
        orderDetails: '1kg Live Fishes, 1kg Sea,,,, ',
      },
      orderStatus: 'Cancel',
      buttonStatus: 'Re Order',
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
        <Header title={'Previous Order'} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.mainContent}>
            {trackOrderList.length === 0 && <EmptyItem />}

            {trackOrderList.length > 0 &&
              trackOrderList.map(item => (
                <TrackOrder key={item.id} item={item} />
              ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PreviousOrderScreen;

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
});
