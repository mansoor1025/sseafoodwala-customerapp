import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {SelectList} from 'react-native-dropdown-select-list';

const BillingAddressScreen = () => {
  const [selected, setSelected] = useState('');

  const data = [
    {key: '1', value: 'Karachi'},
    {key: '2', value: 'Hyderabad'},
    {key: '3', value: 'Quetta'},
    {key: '5', value: 'Lahore'},
    {key: '6', value: 'Pindi'},
    {key: '7', value: 'Swat'},
  ];

  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <View style={styles.billingImageContainer}>
          <Image
            source={require('../assets/images/billingAddressillustration.png')}
            style={styles.billingAddressImage}
          />
        </View>
        <Text style={styles.billingAddressText}>Billing Address</Text>
        <Text style={styles.provideText}>
          Provide Your Billing Address for Secure Transactions
        </Text>

        <View style={styles.billingForm}>
          <View style={styles.fullNameContainer}>
            <TextInput
              placeholder="Enter Your Full Name"
              placeholderTextColor={'rgba(0, 0, 0, 0.4)'}
              style={styles.fullNameInput}
            />
          </View>

          <View style={styles.streetAddressContainer}>
            <TextInput
              placeholder="Enter Your Address"
              placeholderTextColor={'rgba(0, 0, 0, 0.4)'}
              style={styles.fullNameInput}
            />
          </View>

          <View style={styles.cityPostalContainer}>
            <SelectList
              setSelected={val => setSelected(val)}
              data={data}
              save="City"
              placeholder="Select City"
              boxStyles={styles.selectCity}
              maxHeight={171}
              fontFamily={'InstrumentSans-Regular'}
            />

            <View style={styles.postalCodeContainer}>
              <TextInput
                placeholder="Enter Postal Code"
                placeholderTextColor={'rgba(0, 0, 0, 0.4)'}
                style={styles.fullNameInput}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BillingAddressScreen;

const styles = StyleSheet.create({
  safeareaContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  container: {
    flex: 1,
    marginTop: '30%',
  },

  billingImageContainer: {
    alignItems: 'center',
  },

  billingForm: {
    marginTop: '10%',
    padding: 10,
  },
  billingAddressImage: {
    width: 258,
    height: 160,
    resizeMode: 'cover',
  },

  billingAddressText: {
    marginTop: '10%',
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'center',
  },

  provideText: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 12,
    textAlign: 'center',
    marginTop: '2%',
  },

  fullNameContainer: {
    width: '90%',
    height: 50,
    borderRadius: 12,
    borderColor: '#BFBFBF',
    borderWidth: 0.5,
    alignSelf: 'center',
    marginBottom: '6%',
  },

  fullNameInput: {
    flex: 1,
    paddingHorizontal: 15,
    fontFamily: 'InstrumentSans-Regular',
    color: 'rgba(0, 0, 0, 0.4)',
    fontSize: 16,
  },

  streetAddressContainer: {
    width: '90%',
    height: 50,
    borderRadius: 12,
    borderColor: '#BFBFBF',
    borderWidth: 1,
    alignSelf: 'center',
    marginBottom: '6%',
  },

  cityPostalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  selectCity: {
    width: 150, // Increased width
    height: 50, // Increased height
    borderColor: '#BFBFBF',
    borderWidth: 1,
    color: 'rgba(0, 0, 0, 0.4)',
  },

  postalCodeContainer: {
    width: 120,
    height: 50,
    borderRadius: 12,
    borderColor: '#BFBFBF',
    borderWidth: 1,
    alignSelf: 'center',
    marginBottom: '6%',
  },
});
