import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import GenralButton from '../components/GenralButton';
import LiveCuttingContent from '../components/LiveCuttingContent';

const LiveCuttingRequestScreen = () => {
  const liveCuttingData = {
    request: {
      title: 'Your Live Cutting Request Accepted',
      sessionTime: 'Your Session Will be at 4pm. Must be Available',
      buttonStatus: {title: 'Unavailable For Meeting', color: '#BCBCBC'},
      caption: 'We will let you know when you are available for the meeting.',
    },
    join: {
      title: 'Your Live Cutting On The Way',
      sessionTime: 'Please join Google Meet.',
      buttonStatus: {title: 'Join Now', color: '#FD8D18'},
      caption: 'You are available for the meeting.',
    },
  };
  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <StatusBar
        translucent
        backgroundColor="#000000"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <Header title={'Live Cutting Request'} />
        <LiveCuttingContent liveCuttingData={liveCuttingData.join} />
      </View>
    </SafeAreaView>
  );
};

export default LiveCuttingRequestScreen;

const styles = StyleSheet.create({
  safeareaContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  container: {
    flex: 1,
  },
});
