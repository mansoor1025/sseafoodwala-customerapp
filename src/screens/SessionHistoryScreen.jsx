import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import SessionHistoryCards from '../components/SessionHistoryCards';
import EmptyItem from '../components/EmptyItem';

const SessionHistoryScreen = () => {
  const sessionHistoryList = [
    {
      vendorName: 'Mansoor Muhammad',
      dateTime: 'Dec 4, 2024, 4:00 PM.',
      durationTime: '30 mins',
      commentsCount: 2,
      userDetails: {
        username: 'Shahid  Doclink',
        comment: 'Great session, very professional!',
      },
      vendorDetails: {
        comment: 'Happy to assist, looking forward to the next session.',
      },
    },
    {
      vendorName: 'Shaheen Shah',
      dateTime: 'Dec 4, 2024, 4:00 PM.',
      durationTime: '1Hour 20 mins',
      commentsCount: 6,
      userDetails: {
        username: 'Zameen Pathan',
        comment: 'Boht acha expereince rha hai mera !',
      },
      vendorDetails: {
        comment: 'Happy to assist, looking forward to the next session.',
      },
    },
  ];

  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <StatusBar
        translucent
        backgroundColor="#000000"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <Header title={'Session History'} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.mainContent}>
            {sessionHistoryList.length === 0 && (
              <EmptyItem
                title={'No Session Yet'}
                content={'Currently there are no Sessions'}
              />
            )}
            {sessionHistoryList.length > 0 &&
              sessionHistoryList.map(item => (
                <SessionHistoryCards item={item} />
              ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SessionHistoryScreen;

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
});
