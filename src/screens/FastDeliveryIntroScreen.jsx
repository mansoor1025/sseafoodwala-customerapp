import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {useNavigation} from '@react-navigation/native';
const {width} = Dimensions.get('window');

const FastDeliveryIntroScreen = () => {
  const navigate = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={require('../assets/images/fastDelivery.jpg')}
        style={styles.backgroundImage}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.9)', 'rgba(0, 0, 0, 0)']}
          style={styles.gradientOverlay}
          start={{x: 0.5, y: 0.3819}} // Gradient starts at 38.19% height
          end={{x: 0.5, y: 1}} // Gradient ends at the bottom
        />
        <View style={styles.content}>
          <Text style={styles.fastText}>Fast and Reliable Delivery</Text>
          <Text style={styles.reliableText}>
            Fast, Reliable Delivery – Fresh Seafood
          </Text>

          <Text style={styles.deliveredText}>
            <Text style={{color: '#EFEFEF'}}>Delivered</Text>
            <Text style={{color: '#FD8D1F'}}> Nationwide</Text>
          </Text>

          <Text style={styles.cityOutsideText}>
            <Text style={{color: '#EFEFEF'}}>
              Whether you’re in the city or outside, we’ll {'\n'} bring fresh
              seafood right to
            </Text>

            <Text style={{color: '#FD8D1F'}}> your door!</Text>
          </Text>

          <Text style={styles.cityOutsideText}>
            <Text style={{color: '#EFEFEF'}}>
              Enjoy fresh seafood even if you're out of the city – we deliver
            </Text>

            <Text style={{color: '#FD8D1F'}}> beyond local limits!</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigate.navigate('SelectCity')}>
          <Text style={styles.getStartedText}>Get Started</Text>
          <AntDesign
            name={'arrowright'}
            size={20}
            color={'#FFFFFF'}
            style={styles.arrowStyle}
          />
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default FastDeliveryIntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },

  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },

  content: {
    padding: 15,
  },

  fastText: {
    fontFamily: 'InstrumentSans-Regular',
    fontWeight: '500',
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 20,
  },

  reliableText: {
    fontFamily: 'InstrumentSans-Regular',
    fontWeight: '700',
    fontSize: width > 400 ? 32 : 28, // Larger font size for larger
    color: '#EFEFEF',
    marginTop: 35,
  },

  deliveredText: {
    fontFamily: 'InstrumentSans-Regular',
    fontWeight: '700',
    fontSize: width > 400 ? 32 : 28, // Larger font size for larger
  },

  cityOutsideText: {
    fontFamily: 'InstrumentSans-Regular',
    fontWeight: '500',
    fontSize: 18,
    marginTop: 20,
  },

  getStartedButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FD8D1F',
    width: 204,
    height: 44,
    borderRadius: 5,
    marginBottom: 100,
  },

  getStartedText: {
    fontFamily: 'InstrumentSans-Regular',
    fontWeight: '500',
    fontSize: 20,
    color: '#FFFFFF',
  },

  arrowStyle: {
    paddingHorizontal: 10,
  },
});
