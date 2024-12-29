import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SelectOnlinePayment = ({
  title,
  onlinePaymentMethodList,
  setOnlinePayment,
  onlinePayment,
  note,
}) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.saveMethodText}>Save Payment Method</Text>}

      <View style={styles.selectListContainer}>
        <View style={styles.selectList}>
          <Text style={styles.onlinePaymentText}>
            Select Your Online Payment
          </Text>
          <AntDesign
            name={'caretdown'}
            size={15}
            color={'rgba(29, 27, 32, 0.7)'}
          />
        </View>

        <View style={styles.paymentListContainer}>
          {onlinePaymentMethodList?.map(item => {
            return (
              <TouchableOpacity
                style={[
                  styles.paymentList,
                  onlinePayment === item.content && {
                    backgroundColor: '#07427A',
                  },
                ]}
                key={item.content}
                onPress={() => setOnlinePayment(item.content)}>
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={{
                    width: item.imageSize.width,
                    height: item.imageSize.height,
                    resizeMode: 'cover',
                  }}
                />
                <Text
                  style={[
                    styles.contentList,
                    onlinePayment === item.content && {
                      color: '#FFFFFF',
                    },
                  ]}>
                  {item.content}
                </Text>

                {onlinePayment === item.content && (
                  <AntDesign
                    name={'check'}
                    size={20}
                    style={styles.checkIcon}
                    color={'#FFFFFF'}
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {note && (
          <Text style={styles.noteText}>
            <Text style={{fontFamily: 'InstrumentSans-Medium'}}>Note: </Text>
            <Text style={{fontFamily: 'InstrumentSans-Regular'}}>For </Text>
            <Text style={{fontFamily: 'InstrumentSans-Medium'}}>COD </Text>
            <Text style={{fontFamily: 'InstrumentSans-Regular'}}>
              orders, pay{' '}
            </Text>
            <Text style={{fontFamily: 'InstrumentSans-Medium'}}>
              20% in advance{' '}
            </Text>
            <Text style={{fontFamily: 'InstrumentSans-Regular'}}>
              online and the remaining{' '}
            </Text>
            <Text style={{fontFamily: 'InstrumentSans-Medium'}}>
              80% upon delivery.
            </Text>
          </Text>
        )}
      </View>
    </View>
  );
};

export default SelectOnlinePayment;

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
  },
  saveMethodText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 24,
    color: 'rgba(0, 0, 0, 0.7)',
    marginBottom: 15,
  },
  selectListContainer: {
    width: '100%',
    height: 186,
    borderColor: '#D7D7D7',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#FCFEFF',
    shadowColor: '#000000', // Darker shadow for better visibility outside
    shadowOffset: {
      width: 0,
      height: 2, // Pushes the shadow below the container
    },
    shadowOpacity: 0.1, // Lower opacity for a subtle effect
    shadowRadius: 4, // Increases the blur to push shadow further
    elevation: 3, // Adds shadow for Android
    overflow: 'visible', // Ensures shadow is rendered outside the bounds
  },

  selectList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 10,
    width: '100%',
    height: 50,
    alignItems: 'center',
    borderColor: '#D7D7D7',
    borderWidth: 0.5,
    backgroundColor: '#F4FDFF',
  },

  onlinePaymentText: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.7)',
  },

  paymentListContainer: {
    marginTop: 10,
  },

  paymentList: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    paddingHorizontal: 40,
    borderRadius: 10,
  },

  contentList: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 16,
    color: '#000000',
    marginLeft: '25%',
  },

  noteText: {
    marginTop: 30,
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
  },
  checkIcon: {
    marginLeft: '30%',
  },

  
});
