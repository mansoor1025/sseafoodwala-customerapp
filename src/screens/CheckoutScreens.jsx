import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import MapIcon from '../assets/icons/MapIcon.svg';
import OrderSummaryIcon from '../assets/icons/OrderSummaryIcon.svg';
import ToggleSwitch from 'toggle-switch-react-native';
import ItemCards from '../components/ItemCards';
import { useNavigation } from '@react-navigation/native';

const CheckoutScreens = () => {
  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => {
    setIsOn(!isOn);
  };
  const itemCards = [
    {
      id: 100,
      itemImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734275575/vecteezy_fish-on-transparent-background_48718627_1_tvafow.png',
      fishEnglishName: 'Pomfret',
      fishUrduName: '(ٹانگہ )',
      price: 1000,
    },
    {
      id: 101,
      itemImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734275649/pngimg.com_-_fish_PNG25165_ioslhr.png',
      fishEnglishName: 'Hilsa',
      fishUrduName: '(پاپلا )',
      price: 400,
    },
    {
      id: 103,
      itemImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734275839/vecteezy_fish-png-with-ai-generated_24705192_1_xry3jj.png',
      fishEnglishName: 'Tuna',
      fishUrduName: '( ٹونا)',
      price: 900,
    },
    {
      id: 104,
      itemImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734275878/workimagethumb_o2zw6r.png',
      fishEnglishName: 'Tuna',
      fishUrduName: '( ٹونا)',
      price: 1500,
    },
    {
      id: 1410,
      itemImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734275575/vecteezy_fish-on-transparent-background_48718627_1_tvafow.png',
      fishEnglishName: 'Pomfret',
      fishUrduName: '(ٹانگہ )',
      price: 1000,
    },
    {
      id: 1015,
      itemImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734275649/pngimg.com_-_fish_PNG25165_ioslhr.png',
      fishEnglishName: 'Hilsa',
      fishUrduName: '(پاپلا )',
      price: 400,
    },
    {
      id: 1030,
      itemImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734275839/vecteezy_fish-png-with-ai-generated_24705192_1_xry3jj.png',
      fishEnglishName: 'Tuna',
      fishUrduName: '( ٹونا)',
      price: 900,
    },
  ];
  const navigate = useNavigation()
  const handleTermsPress = () => {
    Alert.alert('Terms & Conditions', 'Redirecting to Terms & Conditions...');
    // Navigate to the terms & conditions page if needed
  };
  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <StatusBar
        translucent
        backgroundColor="#000000"
        barStyle="light-content"
      />
      <Header title={'Checkout'} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.mapContainer}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734516647/image_12_cuzauu.png',
              }}
              style={styles.mapImage}
            />
          </View>
          <View style={styles.checkoutContent}>
            <View style={styles.cityorderSummaryContainer}>
              <MapIcon width={25} height={25} />
              <Text style={styles.cityText}>Karachi</Text>
            </View>

            <View style={styles.orderSummaryContainer}>
              <OrderSummaryIcon width={25} height={25} />
              <Text style={styles.orderSummaryText}>Order Summary</Text>
            </View>

            <View style={styles.itemPriceContainer}>
              <View style={styles.itemListing}>
                <Text style={styles.itemTextStyle}>2 kg Sea Fishes</Text>

                <Text style={styles.itemTextStyle}>1 kg Shrimps</Text>

                <Text style={styles.itemTextStyle}>500g Fish Eggs</Text>

                <Text style={styles.itemTextStyle}>1 kg Carbs</Text>
              </View>

              <View style={styles.priceListing}>
                <Text style={styles.priceParentTextStyle}>
                  <Text style={styles.priceText}>1300 </Text>
                  <Text style={styles.currText}>PKR</Text>
                </Text>

                <Text style={styles.priceParentTextStyle}>
                  <Text style={styles.priceText}>750 </Text>
                  <Text style={styles.currText}>PKR</Text>
                </Text>

                <Text style={styles.priceParentTextStyle}>
                  <Text style={styles.priceText}>860 </Text>
                  <Text style={styles.currText}>PKR</Text>
                </Text>

                <Text style={styles.priceParentTextStyle}>
                  <Text style={styles.priceText}>540 </Text>
                  <Text style={styles.currText}>PKR</Text>
                </Text>
              </View>
            </View>

            <View style={styles.divider}></View>

            <View style={styles.subTotalContainer}>
              <View style={styles.itemListing}>
                <Text style={styles.itemTextStyle}>Subtotal</Text>

                <Text style={styles.itemTextStyle}>Delivery Charge</Text>

                <Text style={styles.itemTextStyle}>Platform Fee</Text>

                <Text style={styles.itemTextStyle}>VAT</Text>
              </View>

              <View style={styles.priceListing}>
                <Text style={styles.priceParentTextStyle}>
                  <Text style={styles.priceText}>3,450 </Text>
                  <Text style={styles.currText}>PKR</Text>
                </Text>

                <Text style={styles.priceParentTextStyle}>
                  <Text style={styles.priceText}>65 </Text>
                  <Text style={styles.currText}>PKR</Text>
                </Text>

                <Text style={styles.priceParentTextStyle}>
                  <Text style={styles.priceText}>10 </Text>
                  <Text style={styles.currText}>PKR</Text>
                </Text>

                <Text style={styles.priceParentTextStyle}>
                  <Text style={styles.priceText}>350 </Text>
                  <Text style={styles.currText}>PKR</Text>
                </Text>
              </View>
            </View>

            <View style={styles.applyRefferalCodeContainer}>
              <View style={styles.textInputContainer}>
                <TextInput
                  placeholder="Gift card or referral code"
                  placeholderTextColor="rgba(7, 66, 122, 0.3)"
                  style={styles.textInputField}
                />
              </View>

              <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applyText}>Apply</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.referralContainer}>
              <Text style={styles.itemTextStyle}>Referral Discount</Text>
              <Text style={styles.itemTextStyle}>10%</Text>
            </View>

            <View style={styles.liveCuttingContainer}>
              <Text style={styles.liveCuttingText}>Live Cutting Request</Text>

              <ToggleSwitch
                isOn={isOn}
                onColor="#07427A"
                offColor="#ecf0f1"
                size="medium"
                onToggle={handleToggle} // Update the state on toggle
              />
            </View>
            <View style={styles.divider}></View>
            <Text style={styles.termConditionText}>
              By completing this order, I agree to all{' '}
              <Text style={styles.linkText} onPress={handleTermsPress}>
                terms & conditions
              </Text>
              .
            </Text>

            <View style={styles.TotalContainer}>
              <Text>
                <Text style={styles.totalText}>Total </Text>
                <Text style={styles.taxText}>(incl, fees and tax)</Text>
              </Text>

              <Text style={styles.totalPriceText}>
                <Text style={styles.priceText}>3,530 </Text>
                <Text style={styles.currText}>PKR</Text>
              </Text>
            </View>

            <TouchableOpacity style={styles.processCheckoutButton} onPress={()=> navigate.navigate('Login')}>
              <Text style={styles.checkoutText}>Process to Checkout</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.continueShoppingButton} onPress={()=> navigate.navigate('BottomTab')}>
              <Text style={styles.shoppingText}>Continue Shopping</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.recommendedContainer}>
            <Text style={styles.recommendedText}>Recommended</Text>
            <FlatList
              data={itemCards}
              renderItem={item => <ItemCards item={item.item} />}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.listContainer}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CheckoutScreens;

const styles = StyleSheet.create({
  safeareaContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  container: {
    flex: 1,
    padding: 15,
    marginBottom: 10,
  },

  mapContainer: {
    width: '90%',
    height: 226,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'center',
  },

  mapImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },

  checkoutContent: {
    padding: 15,
  },
  cityorderSummaryContainer: {
    flexDirection: 'row',
  },

  cityText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 15,
    paddingVertical: 2,
  },

  orderSummaryContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
  },

  orderSummaryText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.8)',
    paddingVertical: 1,
    paddingHorizontal: 20,
  },

  itemPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  itemTextStyle: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 7,
  },

  priceParentTextStyle: {
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 7,
  },

  priceText: {
    fontFamily: 'InstrumentSans-Medium',
  },

  currText: {
    fontFamily: 'InstrumentSans-SemiBold',
  },

  divider: {
    width: '100%', // Make it responsive
    borderColor: 'rgba(0, 0, 0, 0.4)',
    borderWidth: 1,
  },

  subTotalContainer: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },

  applyRefferalCodeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textInputContainer: {
    width: '65%',
    height: 40,
    borderRadius: 5,
    borderColor: 'rgba(0, 0, 0, 0.5)', // Light grey border color
    borderWidth: 1,
    paddingHorizontal: 4,
    justifyContent: 'center',
    alignContent: 'center',
  },

  textInputField: {
    fontSize: 12,
    fontFamily: 'InstrumentSans-Medium',
    color: 'rgba(0, 0, 0, 0.3)',
    textAlignVertical: 'center', // Ensures vertical alignment of text
  },

  applyButton: {
    width: 77,
    height: 40,
    borderRadius: 7,
    backgroundColor: '#FD8D1F',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },

  applyText: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 15,
    color: '#FFFFFF',
  },

  referralContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  liveCuttingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  liveCuttingText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.5)',
  },

  termConditionText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.7)',
    paddingVertical: 10,
  },
  linkText: {
    textDecorationLine: 'underline',
    color: 'rgba(0, 0, 0, 0.7)',
  },

  TotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
  },

  totalText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.7)',
  },

  taxText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.5)',
  },

  totalPriceText: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.7)',
    paddingVertical: 1,
  },

  processCheckoutButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#FD8D18',
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  checkoutText: {
    fontFamily: 'InstrumentSans-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },

  continueShoppingButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderColor: '#07427A',
    borderWidth: 1,
  },

  shoppingText: {
    fontFamily: 'InstrumentSans-Bold',
    fontSize: 16,
    color: '#07427A',
  },

  recommendedContainer: {
    marginTop: 10,
    paddingHorizontal:10
  },

  recommendedText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.9)',
    marginBottom: 10,
  },
  listContainer: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});
