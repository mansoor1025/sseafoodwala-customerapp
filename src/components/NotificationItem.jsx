import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const NotificationItem = ({item, isLast}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.iconContainer, {backgroundColor: item.iconBg}]}>
          <Image
            source={{
              uri: item.icon,
            }}
            style={styles.icon}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.orderConfirmedText}>{item.content.parent}</Text>
          <Text style={styles.captionContent}>
            <Text style={{fontFamily: 'InstrumentSans-Regular'}}>
              {item.content.child}
            </Text>
          </Text>
        </View>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>

      {!isLast && <View style={styles.divider}></View>}
    </View>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  todayText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.7)',
  },
  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  orderConfirmedText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.7)',
  },
  contentContainer: {
    paddingVertical: 1,
    marginRight: 5,
  },
  captionContent: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.7)',
  },
  timeText: {
    fontFamily: 'InstrumentSans-Regular',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  divider: {
    width: '100%',
    borderWidth: 0.4,
    borderColor: 'rgba(0, 0, 0, 0.5)',
  },
  icon: {
    width: 20,
    height: 22,
    resizeMode: 'cover',
  },
});
