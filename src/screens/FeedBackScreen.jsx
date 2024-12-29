import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TextInput,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Emojis from '../components/Emojis';
import FeedBackTags from '../components/FeedBackTags';
import GenralButton from '../components/GenralButton';

const FeedBackScreen = () => {
  const stars = [1, 2, 3, 4, 5];
  const emojis = [
    'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735468792/angry_1_zoawrf.png',
    'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735468815/sad_1_ldvbzo.png',
    'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735468832/neutral_1_qcqx97.png',
    'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735468862/smile_1_tndvbp.png',
    'https://res.cloudinary.com/dgiot0v7s/image/upload/v1735468934/heart-eyes_1_r1uaai.png',
  ];

  const tagList = [
    'Fresh quality',
    'Timely delivery',
    'Polite rider',
    'Live cutting experience',
    'Packaging issues',
    'Delay in delivery',
  ];

  const buttonStyles = {
    marginTop: '10%',
    backgroundColor: '#FD8D1F',
    marginBottom:20
  };

  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <StatusBar
        translucent
        backgroundColor="#000000"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <Header title={'Feedback'} />
        <View style={styles.mainContent}>
          <Text style={styles.experienceText}>How was your experience?</Text>
          <Text style={styles.loveText}>We’d love to hear from you!</Text>

          <View style={styles.ratingExperience}>
            <Text style={styles.rateExperience}>Rate your experience</Text>
            <View style={styles.starContainer}>
              {stars.map(() => (
                <AntDesign
                  name={'staro'}
                  color={'07427A'}
                  size={20}
                  style={styles.starStyle}
                />
              ))}
            </View>
          </View>

          <Emojis emojis={emojis} />

          <View style={styles.descriptionContainer}>
            <Text style={styles.howText}>How was your experience?</Text>
            <View style={styles.descriptionBox}>
              <TextInput
                placeholder="Describe yur experience...."
                placeholderTextColor={'rgba(0, 0, 0, 0.3)'}
                style={styles.descriptionInput}
              />
            </View>
          </View>

          <FeedBackTags tagList={tagList} />

          <GenralButton
            customStyle={buttonStyles}
            content={'Submit Feedback'}
          />
          <Text style={styles.skipText}>Skip</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FeedBackScreen;

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
    padding: 20,
  },

  experienceText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'center',
  },

  loveText: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'center',
    marginTop: '2%',
  },

  ratingExperience: {
    flexDirection: 'row',
    marginTop: '10%',
    alignItems: 'center',
    marginBottom: 20,
  },

  rateExperience: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.7)',
  },

  starContainer: {
    flexDirection: 'row',
    marginHorizontal: '5%',
  },

  starStyle: {
    marginHorizontal: 2,
  },

  descriptionContainer: {
    marginTop: '5%',
    marginBottom: 20,
  },

  howText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.7)',
    paddingVertical: 10,
  },

  descriptionBox: {
    width: '100%',
    height: 100,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderWidth: 0.8,
    borderRadius: 10,
    padding: 10,
  },

  descriptionInput: {
    flex: 1,
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.3)',
  },

  skipText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.7)',
    textDecorationLine: 'underline',
    textAlign:"center"
  },
});
