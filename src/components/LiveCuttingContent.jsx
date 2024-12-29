import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import GenralButton from './GenralButton';

const LiveCuttingContent = ({liveCuttingData}) => {
  const buttonStyles = {
    marginTop: '20%',
    backgroundColor: liveCuttingData.buttonStatus.color,
  };

  return (
    <View style={styles.mainContent}>
      <Image
        source={require('../assets/images/LiveCuttingIllustration.png')}
        style={styles.liveCuttingImage}
      />

      <Text style={styles.liveCuttinText}>{liveCuttingData.title}</Text>
      <Text style={styles.sessionText}>
        <Text style={{fontFamily: 'InstrumentSans-Medium'}}>
          {liveCuttingData.sessionTime}
        </Text>
      </Text>

      <GenralButton
        content={'Unavailable For Meeting'}
        customStyle={buttonStyles}
      />
      <Text style={styles.meetingText}>{liveCuttingData.caption}</Text>
    </View>
  );
};

export default LiveCuttingContent;

const styles = StyleSheet.create({
  mainContent: {
    marginTop: '15%',
    padding: 10,
  },

  liveCuttingImage: {
    alignItems: 'center',
    alignSelf: 'center',
  },

  liveCuttingImageContainer: {
    alignItems: 'center',
  },

  liveCuttinText: {
    marginTop: '5%',
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'center',
  },

  sessionText: {
    marginTop: '1%',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'center',
  },

  meetingText: {
    marginTop: '2%',
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'center',
  },
});
