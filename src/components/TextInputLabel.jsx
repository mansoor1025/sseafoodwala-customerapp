import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const TextInputLabel = ({label, placeholder, required}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.cardNumberText}>
        <Text style={{color: 'rgba(0, 0, 0, 0.6)'}}>{label}</Text>
        {required && <Text style={{color: 'red'}}>*</Text>}
      </Text>
      <View style={styles.inputTextContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={'rgba(0, 0, 0, 0.3)'}
          style={styles.cardTextInput}
        />
      </View>
    </View>
  );
};

export default TextInputLabel;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: '7%',
  },

  cardNumberText: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 12,
    marginBottom: 10,
  },

  inputTextContainer: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 0.8,
    paddingHorizontal: 20, // Add padding to position the TextInput
  },

  cardTextInput: {
    flex: 1, // Make the TextInput flexible within the container
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.3)', // Adjust padding for fine control
  },
});
