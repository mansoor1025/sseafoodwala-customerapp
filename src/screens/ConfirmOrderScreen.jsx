import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TrackIcon from '../assets/icons/TrackIcon.svg';
import {useNavigation} from '@react-navigation/native';

const ConfirmOrderScreen = () => {
  const navigate = useNavigation();
  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <Header title={'Confirm Order'} />
        <View style={styles.mainContent}>
          <View style={styles.confirmOrderBg}>
            <Image
              source={require('../assets/images/confirm_order_illustration.png')}
              style={styles.confirmOrderImg}
            />
          </View>
          <Text style={styles.thankyouText}>Thank You</Text>
          <Text style={styles.orderingUsText}>For ordering with us!</Text>
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <AntDesign name={'download'} size={25} color={'#FFFFFF'} />
          <Text style={styles.downloadText}>Download Bill Receipt</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.trackOrderButton}>
          <TrackIcon width={25} height={25} />
          <Text style={styles.trackText}>Track Your Order</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigate.navigate('BottomTab')}>
          <Text style={styles.continueText}>Continue Shopping</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigate.navigate('BottomTab')}>
          <Text style={styles.continueText}>Go To Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmOrderScreen;

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
    marginTop: '20%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },

  thankyouText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 24,
    color: 'rgba(0, 0, 0, 0.7)',
    marginTop: '7%',
  },

  orderingUsText: {
    fontFamily: 'InstrumentSans-Regular',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'center',
    paddingVertical: 3,
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: '10%',
    width: '90%',
    height: 50,
    backgroundColor: '#FD8D1F',
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '20%',
    marginBottom: 20,
  },

  downloadText: {
    fontFamily: 'InstrumentSans-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },

  trackOrderButton: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#07427A',
    borderWidth: 1,
    justifyContent: 'space-between',
    paddingHorizontal: '25%',
    marginBottom: 20,
  },

  trackText: {
    fontFamily: 'InstrumentSans-Bold',
    fontSize: 16,
    color: '#07427A',
  },

  continueButton: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#07427A',
    borderWidth: 1,
    marginBottom: 20,
    justifyContent: 'center',
  },

  continueText: {
    fontFamily: 'InstrumentSans-Bold',
    fontSize: 16,
    color: '#07427A',
  },
});
