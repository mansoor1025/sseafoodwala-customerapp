import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const CategoriesListing = ({categoriesList}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.categoryText}>Categories</Text>
      <View style={{flexDirection: 'row'}}>
        {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> */}
          {categoriesList.map(item => (
            <TouchableOpacity
              key={item.categoryEnglish}
              style={styles.categoryContainer}>
              <View style={styles.categoryImageContainer}>
                <Image
                  source={{
                    uri: item.categoeryImage,
                  }}
                  style={styles.categoryImage}
                />
              </View>
              <View style={styles.fishNameContainer}>
                <Text style={styles.fishTextEnglish}>
                  {item.categoryEnglish}
                </Text>
                <Text style={styles.fishUrduText}>{item.categoryUrdu}</Text>
              </View>
            </TouchableOpacity>
          ))}
        {/* </ScrollVriew> */}
      </View>
    </View>
  );
};

export default CategoriesListing;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 10,
  },

  categoryText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 20,
    color: '#000000',
  },

  categoryContainer: {
    marginTop: 10,
    width: 109,
    height: 160,
    borderRadius: 5,
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
    marginHorizontal: 8,
  },

  categoryImageContainer: {
    width: 109,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 0.5,
  },

  categoryImage: {
    width: 97,
    height: 71,
    resizeMode: 'cover',
  },

  fishNameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  fishTextEnglish: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 12,
    color: '#07427A',
    paddingVertical: 1,
  },

  fishUrduText: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 10,
    color: '#07427A',
  },
});
