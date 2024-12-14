import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import HomeHeader from '../components/HomeHeader';
import InputSearchCategory from '../components/InputSearchCategory';
import Banner from '../components/Banner';
import EarnRewards from '../components/EarnRewards';
import CategoriesListing from '../components/CategoriesListing';
import ProductListing from '../components/ProductListing';

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
    {
      categoeryImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734136522/Group_218_uatruk.png',
      categoryEnglish: 'Lobsters & Crabs',
      categoryUrdu: 'کیکڑے لابسٹر',
    },
    {
      categoeryImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734136517/stock-photo-red-caviar-in-a-circle-isolated-on-white-top-view-1145643794-transformed_1_h2gwoj.png',
      categoryEnglish: 'Fish Eggs',
      categoryUrdu: 'مچھلی کے انڈے',
    },
  ];

  const dealItemLists = [
    {
      title: 'Catch Of The Day',
      description: 'Fresh arrivals with a timer for daily updates',
      items: [
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
      ],
    },

    {
      title: 'Sea Stars',
      description: 'Premium seafood',
      items: [
        {
          itemImage:
            'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734148688/image_4_ml9tui.png',
          fishEnglishName: 'Surmai',
          fishUrduName: '(سورمائی)',
          price: 4500,
        },
        {
          itemImage:
            'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734148870/image_6_w5lhhy.png',
          fishEnglishName: 'Silver Carp',
          fishUrduName: '(چاندی)',
          price: 2500,
        },
        {
          itemImage:
            'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734148900/image_7_glty1s.png',
          fishEnglishName: 'Tuna',
          fishUrduName: '( ٹونا)',
          price: 1600,
        },
        {
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
          itemImage:
            'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734149278/image_8_sojfp4.png',
          fishEnglishName: 'Surmai',
          fishUrduName: '(سورمائی)',
          price: 4500,
        },
        {
          itemImage:
            'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734149316/image_9_hu5cox.png',
          fishEnglishName: 'Silver Carp',
          fishUrduName: '(چاندی)',
          price: 2500,
        },
        {
          itemImage:
            'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734149462/image_10_qoolbz.png',
          fishEnglishName: 'Tuna',
          fishUrduName: '( ٹونا)',
          price: 1600,
        },
        {
          itemImage:
            'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734148688/image_4_ml9tui.png',
          fishEnglishName: 'Tuna',
          fishUrduName: '( ٹونا)',
          price: 1800,
        },
      ],
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <InputSearchCategory />
          <Banner bannersList={bannersList} />
          <EarnRewards />
          <CategoriesListing categoriesList={categoriesList} />
          {dealItemLists.map(item => (
            <ProductListing item={item} />
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
