import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';

const ItemCards = ({item}) => {
  const navigate = useNavigation();
  const [count, setCount] = useState(5);
  const stars = [1, 2, 3, 4, 5];
  return (
    <TouchableOpacity
      style={styles.itemCardContainer}
      onPress={() => navigate.navigate('ItemDetail')}>
      <View>
        <Image
          source={{
            uri: item.itemImage,
          }}
          style={styles.cardImage}
        />
      </View>
      <View style={styles.itemContentContainer}>
        <View style={styles.nameStockUpdatesContainer}>
          <View>
            <Text style={styles.fishEnglishName}>{item.fishEnglishName}</Text>
            <Text style={styles.fishUrduName}>{item.fishUrduName}</Text>
          </View>

          <Text style={styles.stockText}>In Stock</Text>
        </View>

        <View style={styles.ratingContainer}>
          {stars.map(item => (
            <FontAwesome
              name={'star'}
              size={10}
              color={'#FD8D18'}
              style={styles.starRating}
              key={item}
            />
          ))}
          <Text style={styles.ratingCount}>(5.0)</Text>
        </View>

        <View style={styles.priceweightContainer}>
          <Text style={styles.pricePerKg}>Price Per KG:</Text>
          <Text style={styles.priceStyle}>
            <Text style={{fontFamily: 'InstrumentSans-Medium'}}>
              {item.price}{' '}
            </Text>
            <Text style={{fontFamily: 'InstrumentSans-SemiBold'}}>PKR</Text>
          </Text>
        </View>

        <View style={styles.weightContainer}>
          <Text style={styles.weightText}>Weight</Text>

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
        </View>

        <TouchableOpacity style={styles.addToCardButton}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCards;

const styles = StyleSheet.create({
  itemCardContainer: {
    width: 108,
    height: 195,
    borderRadius: 7,
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
    overflow: 'visible', // Ensures shadow is rendered outside the bo
    marginHorizontal: 5,
    marginBottom: 10,
  },

  cardImage: {
    width: '100%',
    height: 80,
    resizeMode: 'cover',
  },

  itemContentContainer: {
    padding: 5,
  },
  nameStockUpdatesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },

  fishEnglishName: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 10,
    color: '#07427A',
  },

  fishUrduName: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 8,
    color: '#07427A',
  },

  stockText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 8,
    color: 'rgba(0, 156, 78, 0.7)',
    paddingVertical: 2,
  },

  ratingContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
  },

  starRating: {
    marginHorizontal: 1,
  },

  ratingCount: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 6,
    color: '#FD8D18',
    paddingHorizontal: 3,
    paddingVertical: 2,
  },

  priceweightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  pricePerKg: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 8,
    color: 'rgba(7, 66, 122, 0.8)',
  },

  priceStyle: {
    fontSize: 8,
    color: 'rgba(253, 141, 31, 0.8)',
  },

  weightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 7,
  },

  weightText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 9,
    color: 'rgba(7, 66, 122, 0.8)',
    paddingVertical: 2,
  },

  weightSelectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  incrementalContainer: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    backgroundColor: '#FD8D18',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
    marginVertical: 1,
  },

  kgContainer: {
    width: 25,
    height: 13,
    borderColor: 'rgba(7, 66, 122, 0.7)',
    borderWidth: 1,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
  },

  kgTextStyle: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 8,
  },

  addToCardButton: {
    width: 96,
    height: 16,
    backgroundColor: '#FD8D18',
    borderRadius: 3,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 1,
  },

  addToCartText: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 8,
    color: '#FFFFFF',
  },
});
