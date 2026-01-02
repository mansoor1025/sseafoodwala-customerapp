import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import CartContainer from '../components/CartContainer';
import { useNavigation } from '@react-navigation/native';

const AddToCartScreen = ({ route }) => {
  const { item } = route.params || {};
  console.log("item*********",item);
  
  const navigate = useNavigation();
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
        <View>
          <FlatList
            data={totalCards}
            renderItem={item => <CartContainer item={item.item} />}
            keyExtractor={item => item.id}
          />
        </View>

        <View style={styles.divider}></View>

        <View style={styles.totalContainer}>
          <Text style={styles.totalAmountText}>Total Amount</Text>

          <Text style={styles.amountText}>2500 PKR</Text>
        </View>

        <TouchableOpacity
          style={styles.checkoutButtonContainer}
          onPress={() => navigate.navigate('Checkout')}>
          <Text style={styles.checkoutStyleText}>Checkout</Text>
        </TouchableOpacity>
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
    marginTop: 25,
  },

  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  totalAmountText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.7)',
  },

  amountText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 15,
    color: '#FD8D18',
  },

  checkoutButtonContainer: {
    width: '90%',
    height: 50,
    backgroundColor: '#FD8D18',
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  checkoutStyleText: {
    fontFamily: 'InstrumentSans-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
});
