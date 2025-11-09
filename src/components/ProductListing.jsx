import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ItemCards from './ItemCards';

const ProductListing = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.title}</Text>
      <View style={styles.itemContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {item.products.map(item => (
            <ItemCards key={item.id} item={item} />
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
