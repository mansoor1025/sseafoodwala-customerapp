import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const EarnRewards = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rewardContainer}>
        <ImageBackground
          source={require('../assets/images/earnRewardBg.png')}
          style={styles.earnBgImage}>
          <Text style={styles.earnText}>Earn Rewards with </Text>
          <Text style={styles.referralText}>Referrals</Text>
          <TouchableOpacity style={styles.inviteButtonContainer}>
            <Text style={styles.inviteText}>Invite Friends</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};

export default EarnRewards;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },

  rewardContainer: {
    width: '90%', // Responsive width
    height: 110,
    borderRadius: 15,
    borderColor: 'transparent', // Subtle border
    borderWidth: 1,
    overflow: 'hidden', // Ensures the image respects the borderRadius
  },

  earnBgImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  earnText: {
    fontFamily: 'InstrumentSans-Bold',
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 10,
  },

  referralText: {
    fontFamily: 'InstrumentSans-Bold',
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    color: '#FD8D1F',
    marginBottom: 5,
  },

  inviteButtonContainer: {
    width: 130,
    height: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },

  inviteText: {
    fontFamily: 'InstrumentSans-SemiBold',
    textAlign: 'center',
    fontSize: 14,
  },
});
