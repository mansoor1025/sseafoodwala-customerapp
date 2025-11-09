import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import Header from '../components/Header';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FilterIcon from '../assets/icons/FilterIcon.svg';
import ItemCards from '../components/ItemCards';

const ProductListScreen = () => {
  const route = useRoute();
  const {productDetails, headerTitle} = route.params;

  const itemCards = [
    {
      id: 100,
      itemImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734275575/vecteezy_fish-on-transparent-background_48718627_1_tvafow.png',
      fishEnglishName: 'Pomfret',
      fishUrduName: '(ٹانگہ )',
      price: 1000,
    },
    {
      id: 101,
      itemImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734275649/pngimg.com_-_fish_PNG25165_ioslhr.png',
      fishEnglishName: 'Hilsa',
      fishUrduName: '(پاپلا )',
      price: 400,
    },
    {
      id: 103,
      itemImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734275839/vecteezy_fish-png-with-ai-generated_24705192_1_xry3jj.png',
      fishEnglishName: 'Tuna',
      fishUrduName: '( ٹونا)',
      price: 900,
    },
    {
      id: 104,
      itemImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734275878/workimagethumb_o2zw6r.png',
      fishEnglishName: 'Tuna',
      fishUrduName: '( ٹونا)',
      price: 1500,
    },
    {
      id: 1410,
      itemImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734275575/vecteezy_fish-on-transparent-background_48718627_1_tvafow.png',
      fishEnglishName: 'Pomfret',
      fishUrduName: '(ٹانگہ )',
      price: 1000,
    },
    {
      id: 1015,
      itemImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734275649/pngimg.com_-_fish_PNG25165_ioslhr.png',
      fishEnglishName: 'Hilsa',
      fishUrduName: '(پاپلا )',
      price: 400,
    },
    {
      id: 1030,
      itemImage:
        'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734275839/vecteezy_fish-png-with-ai-generated_24705192_1_xry3jj.png',
      fishEnglishName: 'Tuna',
      fishUrduName: '( ٹونا)',
      price: 900,
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
        <Header title={headerTitle} />

        <View style={styles.mainContent}>
          <View style={styles.searchFilterContainer}>
            <View style={styles.searchBarContainer}>
              <TextInput
                placeholder="Type fish names or categories"
                style={styles.categoryInput}
                placeholderTextColor="rgba(7, 66, 122, 0.3)" // Replace with your desired color
              />

              <EvilIcons
                name={'search'}
                size={30}
                color={'rgba(7, 66, 122, 0.7)'}
                style={styles.searchIcon}
              />
            </View>

            <TouchableOpacity style={styles.filterContainer}>
              <TouchableOpacity>
                <FilterIcon />
              </TouchableOpacity>
              <Text style={styles.filterText}>Filter</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.productListing}>
            <FlatList
              data={productDetails}
              renderItem={item => <ItemCards item={item.item} />}
              keyExtractor={item => item.id}
              numColumns={3}
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={styles.columnWrapper}
              contentContainerStyle={styles.listContainer}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductListScreen;

const styles = StyleSheet.create({
  safeareaContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  container: {
    flex: 1,
  },

  mainContent: {
    flex: 1, // Allow the main content to grow and adjust
  },

  searchFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    padding: 15,
  },

  searchBarContainer: {
    flexDirection: 'row',
    width: 230,
    height: 36,
    borderColor: 'rgba(7, 66, 122, 0.5)', // 50% opacity color
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingVertical: -8,
  },

  categoryInput: {
    flex: 1,
    fontFamily: 'InstrumentSans-MediumItalic',
    fontSize: 12,
    color: 'rgba(7, 66, 122, 0.3)',
  },

  searchIcon: {
    paddingVertical: 1,
  },

  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 7,
    paddingHorizontal: 10,
    width: 85,
    height: 36,
    borderColor: 'rgba(7, 66, 122, 0.5)', // 50% opacity color
    borderWidth: 1,
    borderRadius: 15,
  },

  filterText: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 12,
    color: 'rgba(7, 66, 122, 0.8)',
    paddingVertical: 3,
  },

  productListing: {
    flex: 1,
    marginTop: 20,
  },

  listContainer: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});
