import {StyleSheet, SafeAreaView, StatusBar, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';

const AddToCartScreen = () => {
  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <StatusBar
        translucent
        backgroundColor="#000000"
        barStyle="light-content"
      />
      <Header title={'My Cart List'} />
      <View style={styles.container}>
        <View style={styles.cardContainer}></View>
      </View>
    </SafeAreaView>
  );
};

export default AddToCartScreen;

const styles = StyleSheet.create({
  safeareaContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  container: {
    flex: 1,
    padding: 15,
  },

  cardContainer: {
    width: 358,
    height: 80,
    borderColor: 'black',
    width: 2,
  },
});
