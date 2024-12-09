import {StyleSheet, SafeAreaView, StatusBar, Text, View} from 'react-native';
import React from 'react';
import HomeHeader from '../components/HomeHeader';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <StatusBar
        translucent
        backgroundColor="#FFFFFF"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <HomeHeader />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeareaContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  container: {
    flex: 1,
    // padding: 10,
  },
});
