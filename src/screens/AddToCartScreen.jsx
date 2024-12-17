import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  FlatList,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import CartContainer from '../components/CartContainer';

const AddToCartScreen = () => {
  const totalCards = [
    {
      id: 1,
      cartImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734352914/Rectangle_12_gwg8op.png',
      itemName: 'Surmai',
      price: 560,
    },
    {
      id: 2,
      cartImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734359376/Rectangle_14_aym5pl.png',
      itemName: 'Tuna',
      price: 1000,
    },
    {
      id: 3,
      cartImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734359544/Rectangle_18_ck8co6.png',
      itemName: 'paplet',
      price: 4000,
    },
  ];

  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <StatusBar
        translucent
        backgroundColor="#000000"
        barStyle="light-content"
      />
      <Header title={'My Cart List'} />
      <View style={styles.container}>
        <FlatList
          data={totalCards}
          renderItem={item => <CartContainer item={item.item} />}
          keyExtractor={item => item.id}
        />
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

  divider: {
    width: '100%', // Make it responsive
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
  },
});
