import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { configureGoogleSignIn } from '../services/googleSignIn';

const SpashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    configureGoogleSignIn();
    // Navigate to "Introduction" after 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate('OfferIntroScreen'); // Replace 'Introduction' with the name of your target screen
    }, 3000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="#FFFFFF"
        barStyle="light-content"
      />
      <View style={styles.mainContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        <Image
          source={require('../assets/images/seafoodTextImage.png')}
          style={styles.seafoodwalaTextImage}
        />
      </View>
    </SafeAreaView>
  );
};

export default SpashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 124,
    height: 124,
    resizeMode: 'cover',
  },

  seafoodwalaTextImage: {
    width: 171,
    height: 40,
    marginTop: 10,
  },
});
