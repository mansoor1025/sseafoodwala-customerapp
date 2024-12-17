import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const CartContainer = ({item}) => {
  const [count, setCount] = useState(5);
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cartImageContainer}>
        <Image
          source={{
            uri: item.cartImage,
          }}
          style={styles.cartIMage}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.contentContainer}>
          <Text style={styles.itemNameText}>Surmai</Text>
          <Text style={styles.weightText}>Weight:</Text>
          <Text style={styles.subTotalText}>SubTotal:</Text>
        </View>

        <View style={styles.priceRemoveBtnContainer}>
          <View style={styles.removeButtonContainer}>
            <Text style={styles.removeText}>Remove</Text>
            <TouchableOpacity style={styles.deleteBtnContainer}>
              <MaterialCommunityIcons
                name={'delete'}
                size={15}
                color={'#FFFFFF'}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.weightSelectorContainer}>
            <TouchableOpacity onPress={() => setCount(count + 1)}>
              <View style={styles.incrementalContainer}>
                <FontAwesome6 name={'plus'} size={7} color={'#FFFFFF'} />
              </View>
            </TouchableOpacity>

            <View style={styles.kgContainer}>
              <Text style={styles.kgTextStyle}>
                <Text>{count} </Text>
                <Text>Kg</Text>
              </Text>
            </View>

            <TouchableOpacity
              style={styles.incrementalContainer}
              onPress={() => setCount(count > 0 ? count - 1 : 0)}>
              <FontAwesome6 name={'minus'} size={7} color={'#FFFFFF'} />
            </TouchableOpacity>
          </View>

          <Text style={styles.pricePkr}>
            <Text style={{fontFamily: 'InstrumentSans-Medium'}}>
              {item.price}{' '}
            </Text>
            <Text style={{fontFamily: 'InstrumentSans-SemiBold'}}>PKR</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CartContainer;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    width: '95%',
    height: 90,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    alignSelf: 'center',
    borderColor: '#d3d3d3', // Light grey border color
    backgroundColor: '#ffffff', // Solid background color for better shadow effect
    shadowColor: '#000000', // Darker shadow for better visibility outside
    shadowOffset: {
      width: 0,
      height: 2, // Pushes the shadow below the container
    },
    shadowOpacity: 0.1, // Lower opacity for a subtle effect
    shadowRadius: 4, // Increases the blur to push shadow further
    elevation: 5, // Adds shadow for Android
    marginHorizontal: 5,
    overflow: 'visible', // Ensures shadow is rendered outside the box
    marginBottom: 15,
  },

  cartImageContainer: {
    width: 100,
    height: 75,
    borderRadius: 5,
    marginHorizontal: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },

  cartIMage: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    resizeMode: 'cover',
  },

  content: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 10,
    // paddingRight: 12,
  },

  itemNameText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.9)',
  },

  removeButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // paddingHorizontal: 12,
  },

  removeText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 3,
  },

  deleteBtnContainer: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: 'rgba(255, 13, 13, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  contentContainer: {
    flex: 1,
  },

  priceRemoveBtnContainer: {
    flex: 1,
  },

  weightText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.7)',
    paddingVertical: 7,
  },

  weightSelectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // paddingHorizontal: 10,
    paddingVertical: 5,
  },

  incrementalContainer: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    backgroundColor: '#FD8D18',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 3,
  },

  kgContainer: {
    width: 30,
    height: 16,
    borderColor: 'rgba(7, 66, 122, 0.7)',
    borderWidth: 1,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
  },

  kgTextStyle: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 10,
  },

  subTotalText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.7)',
  },

  pricePkr: {
    color: '#FD8D18',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
});
