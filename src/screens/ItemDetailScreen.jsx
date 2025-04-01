import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import ToggleSwitch from 'toggle-switch-react-native';
import ItemCards from '../components/ItemCards';
import { useNavigation } from '@react-navigation/native';

const ItemDetailScreen = () => {
  const stars = [1, 2, 3, 4, 5];
  const [count, setCount] = useState(5);
  const [isOn, setIsOn] = useState(false);
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
  const navigate = useNavigation();

  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <StatusBar
        translucent
        backgroundColor="#000000"
        barStyle="light-content"
      />
      <Header title={'Details'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/dgiot0v7s/image/upload/v1734278121/Image_11_bfj6wk.png',
              }}
              style={styles.bgImage}
            />
          </View>

          <View style={styles.content}>
            <View style={styles.contentDataContainer}>
              <Text style={{color: 'rgba(0, 0, 0, 0.8)'}}>
                <Text style={styles.fishEngText}>Surmai </Text>
                <Text style={styles.fishUrduText}>(زندہ مچھلی)</Text>
              </Text>
              <Text style={styles.kg}>1kg</Text>
            </View>

            <View style={styles.ratingContainer}>
              {stars.map(item => (
                <FontAwesome
                  name={'star'}
                  size={15}
                  color={'#FD8D18'}
                  style={styles.starRating}
                  key={item}
                />
              ))}
              <Text style={styles.ratingCount}>(5.0)</Text>
            </View>

            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>Price:</Text>
              <Text style={{color: '#FD8D1F'}}>
                <Text style={styles.priceNumberText}>650 </Text>
                <Text style={styles.pricePkr}>PKR</Text>
              </Text>
            </View>

            <View style={styles.weightContainer}>
              <Text style={styles.weightText}>Weight:</Text>
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

            <View style={styles.divider}></View>

            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>Subtotal:</Text>
              <Text style={{color: '#FD8D1F'}}>
                <Text style={styles.priceNumberText}>1300 </Text>
                <Text style={styles.pricePkr}>PKR</Text>
              </Text>
            </View>

            <View style={styles.liveCuttingContainer}>
              <Text style={styles.liveCuttingText}>Live Cutting Request</Text>

              <ToggleSwitch
                isOn={isOn}
                onColor="#07427A"
                offColor="#ecf0f1"
                size="medium"
                onToggle={handleToggle} // Update the state on toggle
              />
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>Description</Text>
              <Text style={styles.descriptionContent}>
                Lorem Ipsum is simply dummy text of the printing and industry.
                Lorem Ipsum has been the industry's standard dummy text everyone
                since the 1500s.
              </Text>
            </View>

            <TouchableOpacity style={styles.addToCartContainer} onPress={()=> navigate.navigate('CartScreen')}>
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.recommendedContainer}>
            <Text style={styles.recommendedText}>Recommended</Text>
            <FlatList
              data={itemCards}
              renderItem={item => <ItemCards item={item.item} />}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.listContainer}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemDetailScreen;

const styles = StyleSheet.create({
  safeareaContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  container: {
    flex: 1,
    padding: 15,
    marginBottom: 10,
  },

  imageContainer: {
    width: '100%',
    height: 228,
    borderRadius: 10,
  },

  bgImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },

  content: {
    marginTop: 20,
  },

  contentDataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  fishEngText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 20,
  },

  fishUrduText: {
    fontFamily: 'InstrumentSans-Regular',
    fontSize: 20,
  },

  kg: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.5)',
  },

  ratingContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },

  starRating: {
    marginHorizontal: 1,
  },

  ratingCount: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 13,
    color: '#FD8D18',
    paddingHorizontal: 3,
  },

  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  priceText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.5)',
  },

  priceNumberText: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 16,
  },

  pricePkr: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 16,
  },

  weightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  weightText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 2,
  },

  weightSelectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  incrementalContainer: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: '#FD8D18',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 3,
  },

  kgContainer: {
    width: 50,
    height: 24,
    borderColor: 'rgba(7, 66, 122, 0.7)',
    borderWidth: 1,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
  },

  kgTextStyle: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 15,
  },

  divider: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%', // Make it responsive
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
  },

  liveCuttingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },

  liveCuttingText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.5)',
  },

  descriptionContainer: {
    marginTop: 3,
  },

  descriptionText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.8)',
  },

  descriptionContent: {
    fontFamily: 'InstrumentSans-Regular',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.7)',
    paddingVertical: 5,
  },

  addToCartContainer: {
    width: '90%',
    height: 50,
    marginTop: 15,
    backgroundColor: '#FD8D18',
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  addToCartText: {
    fontFamily: 'InstrumentSans-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },

  recommendedContainer: {
    marginTop: 20,
  },

  recommendedText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.9)',
    marginBottom: 10,
  },
  listContainer: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});
