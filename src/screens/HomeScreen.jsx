import {StyleSheet, SafeAreaView, StatusBar, Text, View} from 'react-native';
import React from 'react';
import HomeHeader from '../components/HomeHeader';
import InputSearchCategory from '../components/InputSearchCategory';
import Banner from '../components/Banner';
import EarnRewards from '../components/EarnRewards';
import CategoriesListing from '../components/CategoriesListing';

const HomeScreen = () => {
  const bannersList = [
    {
      bannerImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734024060/Banner_poondb.png',
      bannerText: 'Fresh Catch',
    },
    {
      bannerImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734025501/Banner_1_bnbiju.png',
      bannerText: 'Special Offer',
    },
    {
      bannerImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734024060/Banner_poondb.png',
      bannerText: 'Fresh Fish',
    },
  ];

  const categoriesList = [
    {
      categoeryImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734031521/pngwing.com_3_1_wmdvh9.png',
      categoryEnglish: 'Live Fishes',
      categoryUrdu: '(زندہ مچھلی)',
    },
    {
      categoeryImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734032896/pngegg_4_1_rx06pd.png',
      categoryEnglish: 'Sea Fishes',
      categoryUrdu: '(سمندری مچھلیاں)',
    },
    {
      categoeryImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734033648/image_14_hpux9k.png',
      categoryEnglish: 'Shrimps',
      categoryUrdu: '(جھینگ)',
    },
  ];

  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <StatusBar
        translucent
        backgroundColor="#000000"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <HomeHeader />
        <InputSearchCategory />
        <Banner bannersList={bannersList} />
        <EarnRewards />
        <CategoriesListing categoriesList={categoriesList} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeareaContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  container: {
    flex: 1,
  },
});
