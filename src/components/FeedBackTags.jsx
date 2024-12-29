import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const FeedBackTags = ({tagList}) => {
  const [tags, selectedTags] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.tagsText}>Tags for Quick Feedback</Text>
      {tagList?.map(item => (
        <View style={styles.selectionTags}>
          <TouchableOpacity
            style={[
              styles.radioButton,
              tags === item && {backgroundColor: '#FD8D1F'},
            ]}
            onPress={() => selectedTags(item)}></TouchableOpacity>
          <Text style={styles.tagsList}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

export default FeedBackTags;

const styles = StyleSheet.create({
  tagsText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.7)',
  },

  selectionTags: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3%',
  },

  radioButton: {
    width: 14,
    height: 14,
    borderRadius: 14 / 2,
    borderColor: '#FD8D1F',
    borderWidth: 1,
  },

  tagsList: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 10,
  },
});
