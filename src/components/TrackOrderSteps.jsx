import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TrackOrderSteps = ({item,isLast}) => {
 

  return (
    <View style={styles.container}>
      <View style={styles.trackStepsContainer}>
        <View style={styles.checkRadioButton}>
          <AntDesign name={'check'} color={'#FFFFFF'} />
        </View>

        <View style={{position: 'relative'}}>
          <Image
            source={{
              uri: item.stepIcon,
            }}
            style={styles.stepIcon}
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.content}>{item.content.title}</Text>
          <Text style={styles.contentDescription}>
            {item.content.description}
          </Text>
        </View>

        <Text style={styles.time}>{item.time}</Text>
      </View>
     {!isLast && <View style={styles.straightLine}></View>}
    </View>
  );
};

export default TrackOrderSteps;

const styles = StyleSheet.create({
  trackStepsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '10%',
  },

  checkRadioButton: {
    width: 16,
    height: 16,
    borderRadius: 16 / 2,
    backgroundColor: '#07427A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  stepIcon: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
    marginHorizontal: 20,
  },

  content: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.7)',
  },

  contentDescription: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 10,
    color: 'rgba(0, 0, 0, 0.5)',
  },

  time: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 10,
    color: 'rgba(0, 0, 0, 0.5)',
    marginLeft: 'auto',
  },

  straightLine: {
    position: 'absolute',
    width: 0,
    height: 60,
    borderColor: '#07427A',
    borderWidth: 0.8,
    top: 22,
    left: 7,
  },
});
