import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const SpashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Navigate to "Introduction" after 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate('OfferIntroScreen'); // Replace 'Introduction' with the name of your target screen
    }, 3000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        flex: 1,
      }}>
      <Text>SpashScreen</Text>
    </View>
  );
};

export default SpashScreen;

const styles = StyleSheet.create({});
