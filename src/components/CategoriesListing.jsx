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
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categoriesList.map(item => (
            <TouchableOpacity key={item._id} style={styles.categoryContainer}>
              <View style={styles.categoryImageContainer}>
                <Image
                  source={{
                    uri: item.categoryImage,
                  }}
                  style={styles.categoryImage}
                />
              </View>
              <View style={styles.fishNameContainer}>
                <Text style={styles.fishTextEnglish}>{item.categoryEng}</Text>
                <Text style={styles.fishUrduText}>{item.categoryUrdu}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.sliderContainer}>
        <TouchableOpacity
          style={[
            styles.slideBar,
            {backgroundColor: '#FD8D1F'},
          ]}></TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.slideBar,
            {backgroundColor: 'rgba(253, 141, 31, 0.3)'},
          ]}></TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoriesListing;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
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
    height: 'auto',
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
    marginHorizontal: 7,
    marginBottom: 10,
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

  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  slideBar: {
    width: 13,
    height: 2,
    marginTop: 1,
    borderRadius: 3,
    marginHorizontal: 3,
  },
});
