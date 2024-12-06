import {
  ImageBackground,
  Image,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SectionSliders from '../components/SectionSliders';

const OfferIntroScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={require('../assets/images/waterbackground.png')}
        style={styles.backgroundImage}>
        <LinearGradient
          colors={[
            'rgba(0, 0, 0, 0.9)', // Top: Black with 90% opacity
            'rgba(0, 0, 0, 0)', // Middle: Transparent
            'rgba(0, 0, 0, 0.77)', // Bottom: Black with 76.5% opacity
          ]}
          locations={[0.1254, 0.6736, 1]} // Define stops (12.54%, 67.36%, 100%)
          style={styles.gradientOverlay}
          start={{x: 0.5, y: 0}} // Start from the top center
          end={{x: 0.5, y: 1}} // End at the bottom center
        >
          <View style={styles.mainContainer}>
            <View style={styles.content}>
              <View style={styles.whatWeOffer}>
                <Text style={styles.whatText}>What We Offer</Text>

                <Text style={styles.discoverText}>
                  Discover Fresh, Live, {'\n'}
                  and Ready-to-Cook
                </Text>
                <Text style={styles.seafoodText}>Seafood</Text>

                <View style={styles.freshFishContainer}>
                  <Text style={styles.fromFreshText}>
                    <Text style={{color: '#EFEFEF'}}>
                      From fresh fish to ready-to-fry specials, we bring the
                      ocean to
                    </Text>
                    <Text style={{color: '#FD8D1F'}}> your door.</Text>
                  </Text>
                </View>

                <View style={styles.fishImageContainer}>
                  <Image
                    source={require('../assets/images/fish.png')}
                    style={styles.fishImage}
                  />
                </View>
              </View>
            </View>

            <SectionSliders currentScreen={'OfferIntroScreen'} />
          </View>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default OfferIntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },

  mainContainer: {
    flex: 1,
    padding: 20,
    justifyContent:"space-between"
  },

  whatText: {
    fontFamily: 'InstrumentSans-Regular',
    fontWeight: '500',
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
  },

  discoverText: {
    fontFamily: 'InstrumentSans-Regular',
    fontWeight: '700',
    fontSize: 32,
    color: '#EFEFEF',
    marginTop: 25,
  },

  seafoodText: {
    fontFamily: 'InstrumentSans-Regular',
    fontWeight: '700',
    fontSize: 32,
    color: '#FD8D1F',
  },

  freshFishContainer: {
    flexDirection: 'row',
    marginTop: 25,
  },

  fromFreshText: {
    fontFamily: 'InstrumentSans-Regular',
    fontWeight: '500',
    fontSize: 18,
  },
  fishImageContainer: {
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fishImage: {
    width: 344,
    height: 172,
    transform: [{rotate: '-28.1deg'}], // Apply the angle
    opacity: 0.9, // Adjust opacity slightly for visibility
  },
});
