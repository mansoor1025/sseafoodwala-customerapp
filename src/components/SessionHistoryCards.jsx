import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RatingStars from './RatingStars';

const SessionHistoryCards = ({item}) => {
 
  return (
    <View style={styles.container}>
      <Text style={styles.vendorDetails}>
        <Text style={{fontFamily: 'InstrumentSans-SemiBold'}}>Vendor: </Text>
        <Text style={{fontFamily: 'Usman Ahmmed'}}>{item.vendorName}</Text>
      </Text>

      <View style={styles.dateTimeDuration}>
        <Text style={styles.dateTime}>{item.dateTime}</Text>
        <View style={styles.divider}></View>
        <Text style={styles.durationTime}>Duration: {item.durationTime}.</Text>
      </View>

      <Text style={styles.sessionStatus}>
        <Text
          style={{
            fontFamily: 'InstrumentSans-Medium',
            color: 'rgba(0, 0, 0, 0.7)',
          }}>
          Session Status:{' '}
        </Text>
        <Text style={{fontFamily: 'InstrumentSans-SemiBold', color: '#07427A'}}>
          Completed
        </Text>
      </Text>

      <Text style={styles.commentText}>
        <Text style={{fontFamily: 'InstrumentSans-SemiBold'}}>Comments </Text>
        <Text style={{fontFamily: 'InstrumentSans-Medium'}}>
          ({item.commentsCount})
        </Text>
      </Text>

      <View style={styles.userCommentContainer}>
        <View style={styles.userProfileContainer}>
          <Image
            source={require('../assets/images/mansoor.jpg')}
            style={styles.dp}
          />
        </View>
        <View style={styles.commentContainer}>
          <Text style={styles.username}>{item.userDetails.username}</Text>
          <Text style={styles.comments}>{item.userDetails.comment}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.youRated}>You rated</Text>
            <RatingStars />
          </View>
        </View>
      </View>

      <View style={styles.vendorCommentContainer}>
        <View style={styles.userProfileContainer}>
          <Image
            source={require('../assets/images/mansoor.jpg')}
            style={styles.dp}
          />
        </View>

        <View style={styles.CommentVendorContainer}>
          <View style={styles.vendorRatingContainer}>
            <Text style={styles.vendorText}>Vendor</Text>
            <RatingStars />
          </View>
          <Text style={styles.vendorCommentText}>
            {item.vendorDetails.comment}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SessionHistoryCards;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderWidth: 0.8,
    padding: 10,
    marginBottom: 20,
  },

  vendorDetails: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'center',
  },

  dateTimeDuration: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '4%',
  },

  dateTime: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.7)',
  },

  divider: {
    height: 15,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 1,
    marginHorizontal: 10,
  },

  durationTime: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.7)',
  },

  sessionStatus: {
    marginTop: '2%',
    fontSize: 12,
  },

  commentText: {
    marginTop: '4%',
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.7)',
  },

  userCommentContainer: {
    flexDirection: 'row',
    marginTop: '5%',
  },

  userProfileContainer: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },

  dp: {
    width: '100%',
    height: '100%',
    borderRadius: 30 / 2,
  },

  commentContainer: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginHorizontal: 20,
    borderRadius: 5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderWidth: 0.5,
  },

  username: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.7)',
  },

  comments: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 10,
    color: 'rgba(0, 0, 0, 0.7)',
  },

  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  youRated: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 8,
    color: 'rgba(0, 0, 0, 0.7)',
  },

  vendorCommentContainer: {
    flexDirection: 'row',
    marginHorizontal: '15%',
    marginTop: '3%',
  },

  CommentVendorContainer: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderWidth: 0.5,
    marginHorizontal: '5%',
  },

  vendorRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  vendorText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.7)',
  },

  vendorCommentText: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 10,
    color: 'rgba(0, 0, 0, 0.7)',
  },
});
