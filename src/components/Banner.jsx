import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Banner = ({bannersList}) => {
  const naviagte = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {bannersList.map(item => (
          <TouchableOpacity
            key={item.bannerText}
            style={styles.bannerContainer}
            onPress={() =>
              naviagte.navigate('ProductList', {
                headerTitle: item.bannerText,
              })
            }>
            <Image
              source={{
                uri: item.bannerImage,
              }}
              style={styles.bannerImage}
              onError={() =>
                console.error('Image failed to load: ', item.bannerImage)
              }
            />
            <Text style={styles.bannerText}>{item.bannerText}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 25,
    marginHorizontal: 7,
  },

  bannerContainer: {
    width: 150,
    height: 90,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3', // Light grey border color
    backgroundColor: '#ffffff', // Solid background color for better shadow effect
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

  bannerImage: {
    width: 150,
    height: 70,
    resizeMode: 'cover',
  },

  bannerText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 13,
    textAlign: 'center',
    color: '#000000',
  },
});
