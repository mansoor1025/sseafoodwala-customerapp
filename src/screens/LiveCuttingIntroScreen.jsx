import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  Text,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SectionSliders from '../components/SectionSliders';
const {width} = Dimensions.get('window');

const LiveCuttingIntroScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.contentContainer}>
        <Text style={styles.liveText}>Live Cutting</Text>
        <Text style={styles.requestText}>
          Request Live Cutting – {'\n'}Freshness
        </Text>
        <Text style={styles.guaranteedText}>Guaranteed!</Text>
      </View>

      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('../assets/images/liveCutting.jpg')}
          style={styles.backgroundImage}>
          <LinearGradient
            colors={['#000000', 'rgba(0, 0, 0, 0)']}
            style={styles.gradientOverlay}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 0.441}}
          />
          <View style={{padding: 15}}>
            <Text style={styles.chooseText}>
              <Text>
                Choose how you want your seafood cleaned and cut – just like at
                the{' '}
              </Text>
              <Text style={{color: '#FD8D1F'}}>market.</Text>
            </Text>
          </View>

          <SectionSliders currentScreen={'LiveCutting'} />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default LiveCuttingIntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent: 'space-between',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },

  contentContainer: {
    flex: 1,
    padding: 15,
  },

  liveText: {
    fontFamily: 'InstrumentSans-Regular',
    fontWeight: '500',
    fontSize: 18, // Scales dynamically based on screen width
    color: '#FFFFFF',
    textAlign: 'center',
  },

  requestText: {
    fontFamily: 'InstrumentSans-Regular',
    fontWeight: '700',
    fontSize: width > 400 ? 32 : 28, // Larger font size for larger screens
    color: '#FFFFFF',
    marginTop: 40,
  },

  guaranteedText: {
    fontFamily: 'InstrumentSans-Regular',
    fontWeight: '700',
    fontSize: 32,
    color: '#FD8D1F',
  },

  chooseText: {
    fontFamily: 'InstrumentSans-Regular',
    fontWeight: '500',
    fontSize: width > 400 ? 18 : 16, // Larger font size for larger
    color: '#FFFFFF',
    marginTop: -42,
  },

  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },

  imageContainer: {
    // borderColor: 'white',
    borderWidth: 1,
    flex: 2.5,
  },
});
