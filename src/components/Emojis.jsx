import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Emojis = ({emojis}) => {
  const [emoji, selectedEmoji] = useState('');

  return (
    <View style={styles.container}>
      {emojis?.map((item, index) => (
        <TouchableOpacity
          style={[
            styles.emojiContainer,
            index !== emojis.length - 1
              ? {backgroundColor: '#F3F9FF'}
              : {backgroundColor: '#07427A'},
          ]}
          onPress={() => selectedEmoji(item)}>
          <Image source={{uri: item}} style={styles.emojiIcon} />
          {emoji === item && (
            <View style={styles.selectedCheckEmoji}>
              <AntDesign name={'check'} color={'#FFFFFF'} />
            </View>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Emojis;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  emojiContainer: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    position: 'relative',
  },

  emojiIcon: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },

  selectedCheckEmoji: {
    width: 14,
    height: 14,
    borderRadius: 14 / 2,
    backgroundColor: '#FD8D1F',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 2,
    right: 7,
  },
});
