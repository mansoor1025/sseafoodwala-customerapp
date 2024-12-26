import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TextInputLabel from '../components/TextInputLabel';

const CardInformationScreen = () => {
  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <StatusBar
        translucent
        backgroundColor="#000000"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <Header title={'Card Information'} />
        <View style={styles.mainContent}>
          <TouchableOpacity style={styles.paymentSelectionContainer}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735119357/cash-on-delivery_1_tgp7cs.png',
              }}
              style={styles.codIcon}
            />

            <Text style={styles.content}>Cash on Delivery</Text>

            <View style={styles.radioButtonContainer}></View>
          </TouchableOpacity>

          <View style={styles.selectedPaymentContainer}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735119287/3dae7998e4ddfb250b1646b3bf6290c6_1_cmex9g.png',
              }}
              style={styles.paymentIcon}
            />
            <Text style={styles.paymentContent}>Jazz Cash</Text>
            <AntDesign
              name={'caretdown'}
              size={15}
              color={'rgba(29, 27, 32, 0.7)'}
            />
          </View>

          <Text style={styles.enterCardText}>Please enter card details</Text>

          <TextInputLabel
            label={'Card Number'}
            placeholder={'1234XXXXXXXXXXXXXXXXXX'}
            required={true}
          />

          <TextInputLabel
            label={'Mobile Number'}
            placeholder={'+923330246433'}
            required={true}
          />

          <View style={styles.cvvCardExpiryContainer}>
            <TextInputLabel label={'CVV'} placeholder={'xxx'} required={true} />

            <TextInputLabel
              label={'Card Expiry'}
              placeholder={'2025'}
              required={true}
            />
          </View>

          <TouchableOpacity style={styles.confirmOrderButton}>
            <Text style={styles.confirmText}>Confirm Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CardInformationScreen;

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
    padding: 25,
  },

  paymentSelectionContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  codIcon: {
    width: 44,
    height: 44,
    resizeMode: 'cover',
  },

  content: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.7)',
  },

  radioButtonContainer: {
    width: 16,
    height: 16,
    borderRadius: 16 / 2,
    backgroundColor: '#07427A',
  },

  selectedPaymentContainer: {
    flexDirection: 'row',
    marginTop: '5%',
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderColor: '#D7D7D7',
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: '#F4FDFF',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  paymentIcon: {
    width: 39,
    height: 18,
    resizeMode: 'cover',
  },

  paymentContent: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.7)',
    marginRight: '45%',
  },

  enterCardText: {
    marginTop: '5%',
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.7)',
  },

  cvvCardExpiryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  confirmOrderButton: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#FD8D1F',
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  confirmText: {
    fontFamily: 'InstrumentSans-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
});
