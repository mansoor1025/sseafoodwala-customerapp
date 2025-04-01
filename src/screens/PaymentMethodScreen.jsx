import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SelectOnlinePayment from '../components/SelectOnlinePayment';
import {useNavigation} from '@react-navigation/native';

const PaymentMethodScreen = () => {
  const paymentMethods = [
    {
      image:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735119257/credit-card_1_dia8lk.png',
      content: 'Debit / Credit Card',
      imageSize: {width: 52, height: 40},
    },
    {
      image:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735119287/3dae7998e4ddfb250b1646b3bf6290c6_1_cmex9g.png',
      content: 'Jazz Cash',
      imageSize: {width: 60, height: 28},
    },
    {
      image:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735119308/unnamed_1_d6vq97.png',
      content: 'Easypaisa',
      imageSize: {width: 37, height: 37},
    },
    {
      image:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735119339/image_17_ps7kjv.png',
      content: 'Sadapay',
      imageSize: {width: 42, height: 46},
    },
    {
      image:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735119357/cash-on-delivery_1_tgp7cs.png',
      content: 'Cash on Delivery',
      imageSize: {width: 44, height: 44},
    },
  ];

  const onlinePaymentMethodList = [
    {
      image:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735119287/3dae7998e4ddfb250b1646b3bf6290c6_1_cmex9g.png',
      content: 'Jazz Cash',
      imageSize: {width: 39, height: 18},
    },
    {
      image:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735119308/unnamed_1_d6vq97.png',
      content: 'Easypaisa',
      imageSize: {width: 19, height: 19},
    },
    {
      image:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735119339/image_17_ps7kjv.png',
      content: 'Sadapay',
      imageSize: {width: 19, height: 20},
    },
  ];
  const [selectPayment, setSelectPayment] = useState('Debit / Credit Card');
  const [onlinePayment, setOnlinePayment] = useState('');
  const navigate = useNavigation();
  const data = [
    {key: 'Jazz Cash', value: 'Jazz Cash'},
    {key: 'Easypaisa', value: 'Easypaisa'},
    {key: 'Sadapay', value: 'Sadapay'},
  ];
  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <StatusBar
        translucent
        backgroundColor="#000000"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <Header title={'Payment Method'} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.mainContent}>
            <Text style={styles.selectPaymentText}>
              Select Your Payment Method
            </Text>

            {paymentMethods?.map(item => {
              return (
                <TouchableOpacity
                  key={item.content}
                  style={styles.paymentContainer}
                  onPress={() => setSelectPayment(item.content)}>
                  <Image
                    source={{
                      uri: item.image,
                    }}
                    style={{
                      width: item.imageSize.width,
                      height: item.imageSize.height,
                      resizeMode: 'contain',
                    }}
                  />

                  <Text style={styles.content}>{item.content}</Text>

                  <View
                    style={[
                      styles.radioButton,
                      selectPayment === item.content && {
                        backgroundColor: '#07427A',
                      },
                    ]}></View>
                </TouchableOpacity>
              );
            })}

            {selectPayment === 'Cash on Delivery' && (
              <SelectOnlinePayment
                onlinePaymentMethodList={onlinePaymentMethodList}
                setOnlinePayment={setOnlinePayment}
                onlinePayment={onlinePayment}
                note={true}
              />
            )}
            <TouchableOpacity
              style={styles.continueButton}
              onPress={() => navigate.navigate('CardInformation')}>
              <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PaymentMethodScreen;

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
    padding: 30,
  },

  selectPaymentText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.7)',
    marginBottom: 20,
  },

  paymentContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    backgroundColor: '#FFFFFF',
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 0.5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingHorizontal: 30,
    shadowColor: '#000000', // Darker shadow for better visibility outside
    shadowOffset: {
      width: 0,
      height: 2, // Pushes the shadow below the container
    },
    shadowOpacity: 0.1, // Lower opacity for a subtle effect
    shadowRadius: 4, // Increases the blur to push shadow further
    elevation: 3, // Adds shadow for Android
    marginHorizontal: 5,
    overflow: 'visible', // Ensures shadow is rendered outside the bounds
  },

  icon: {
    width: 52,
    height: 40,
    resizeMode: 'cover',
  },

  content: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 16,
    borderColor: 'rgba(0, 0, 0, 0.7)',
  },

  radioButton: {
    width: 16,
    height: 16,
    borderRadius: 17 / 2,
    borderColor: 'rgba(7, 66, 122, 0.6)',
    borderWidth: 0.9,
  },

  continueButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FD8D1F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '25%',
  },

  continueText: {
    fontFamily: 'InstrumentSans-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },

  checkIcon: {
    marginLeft: '30%',
  },
});
