import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HomeHeader from '../components/HomeHeader';
import InputSearchCategory from '../components/InputSearchCategory';
import Banner from '../components/Banner';
import EarnRewards from '../components/EarnRewards';
import CategoriesListing from '../components/CategoriesListing';
import ProductListing from '../components/ProductListing';
import {getFetchData} from '../services/helper/helper';

const HomeScreen = ({route}) => {
  const {city} = route.params || {};
  console.log('city(((((((((((((', city);

  const [categoriesList, setCategoriesList] = useState([]);

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

  const dealItemLists = [
    {
      title: 'Catch Of The Day',
      description: 'Fresh arrivals with a timer for daily updates',
      items: [
        {
          id: 100,
          itemImage:
            'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734138325/image_1_kcmz6m.png',
          fishEnglishName: 'Pomfret',
          fishUrduName: '(ٹانگہ )',
          price: 1000,
        },
        {
          id: 101,
          itemImage:
            'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734147382/image_2_e0d0zf.png',
          fishEnglishName: 'Hilsa',
          fishUrduName: '(پاپلا )',
          price: 400,
        },
        {
          id: 103,
          itemImage:
            'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734147741/image_3_iza8jo.png',
          fishEnglishName: 'Tuna',
          fishUrduName: '( ٹونا)',
          price: 900,
        },
        {
          id: 104,
          itemImage:
            'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734147741/image_3_iza8jo.png',
          fishEnglishName: 'Tuna',
          fishUrduName: '( ٹونا)',
          price: 1500,
        },
      ],
    },

    {
      title: 'Sea Stars',
      description: 'Premium seafood',
      items: [
        {
          id: 1,
          itemImage:
            'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734148688/image_4_ml9tui.png',
          fishEnglishName: 'Surmai',
          fishUrduName: '(سورمائی)',
          price: 4500,
        },
        {
          id: 2,
          itemImage:
            'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734148870/image_6_w5lhhy.png',
          fishEnglishName: 'Silver Carp',
          fishUrduName: '(چاندی)',
          price: 2500,
        },
        {
          id: 3,
          itemImage:
            'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734148900/image_7_glty1s.png',
          fishEnglishName: 'Tuna',
          fishUrduName: '( ٹونا)',
          price: 1600,
        },
        {
          id: 4,
          itemImage:
            'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734148688/image_4_ml9tui.png',
          fishEnglishName: 'Tuna',
          fishUrduName: '( ٹونا)',
          price: 1800,
        },
      ],
    },

    {
      title: 'Family Feast Pack',
      description: 'Budget-friendly family bundles.',
      items: [
        {
          id: 5,
          itemImage:
            'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734149278/image_8_sojfp4.png',
          fishEnglishName: 'Surmai',
          fishUrduName: '(سورمائی)',
          price: 4500,
        },
        {
          id: 6,
          itemImage:
            'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734149316/image_9_hu5cox.png',
          fishEnglishName: 'Silver Carp',
          fishUrduName: '(چاندی)',
          price: 2500,
        },
        {
          id: 7,
          itemImage:
            'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734149462/image_10_qoolbz.png',
          fishEnglishName: 'Tuna',
          fishUrduName: '( ٹونا)',
          price: 1600,
        },
        {
          id: 8,
          itemImage:
            'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734148688/image_4_ml9tui.png',
          fishEnglishName: 'Keera',
          fishUrduName: '( ٹونا)',
          price: 1800,
        },
      ],
    },
  ];

  useEffect(() => {
    getFetchData('seaFoodCategory/getSeaFoodCategory', setCategoriesList);
  }, []);

  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <StatusBar
        translucent
        backgroundColor="#000000"
        barStyle="light-content"
      />

      <View style={styles.container}>
        <HomeHeader />
        <ScrollView showsVerticalScrollIndicator={false}>
          <InputSearchCategory city={city} />
          <Banner bannersList={bannersList} />
          <EarnRewards />
          <CategoriesListing categoriesList={categoriesList} />
          {dealItemLists.map(item => (
            <ProductListing key={item.title} item={item} />
          ))}
        </ScrollView>
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
    marginBottom: 20,
  },
});
