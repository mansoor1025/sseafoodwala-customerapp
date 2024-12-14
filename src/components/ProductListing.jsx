import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ItemCards from './ItemCards';

const ProductListing = ({item}) => {
  const itemsCard = [
    {
      itemImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734138325/image_1_kcmz6m.png',
      fishEnglishName: 'Pomfret',
      fishUrduName: '(ٹانگہ )',
      price: 1000,
    },
    {
      itemImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734147382/image_2_e0d0zf.png',
      fishEnglishName: 'Hilsa',
      fishUrduName: '(پاپلا )',
      price: 400,
    },
    {
      itemImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734147741/image_3_iza8jo.png',
      fishEnglishName: 'Tuna',
      fishUrduName: '( ٹونا)',
      price: 900,
    },
    {
      itemImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734147741/image_3_iza8jo.png',
      fishEnglishName: 'Tuna',
      fishUrduName: '( ٹونا)',
      price: 1500,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>
      {item.description}
      </Text>
      <View style={styles.itemContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {item.items.map(item => (
            <ItemCards item={item} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default ProductListing;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 10,
  },

  title: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 20,
    color: '#000000',
  },

  description: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 12,
    color: '#000000',
    paddingVertical: 2,
  },

  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
});
