import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RNPickerSelect from 'react-native-picker-select';

const InputSearchCategory = () => {
  const cities = [
    {label: 'Karachi', value: 'karachi'},
    {label: 'Lahore', value: 'lahore'},
    {label: 'Islamabad', value: 'islamabad'},
    {label: 'Rawalpindi', value: 'rawalpindi'},
    {label: 'Quetta', value: 'quetta'},
    {label: 'Hyderabad', value: 'hyderabad'},
    {label: 'Multan', value: 'multan'},
    {label: 'Sialkot', value: 'sialkot'},
    {label: 'Gujranwala', value: 'gujranwala'},
    {label: 'Faisalabad', value: 'faisalabad'},
  ];

  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Type fish names or categories"
        style={styles.categoryInput}
        placeholderTextColor="rgba(7, 66, 122, 0.3)" // Replace with your desired color
      />
      <View style={styles.inputOtherContent}>
        <EvilIcons
          name={'search'}
          size={30}
          color={'rgba(7, 66, 122, 0.7)'}
          style={styles.searchIcon}
        />

        <View style={styles.divider}></View>

        <RNPickerSelect
          onValueChange={value => setSelectedCity(value)}
          items={cities}
          style={pickerSelectStyles}
          placeholder={{
            label: 'Karachi',
            value: 'Karachi',
            color: 'blue',
          }}
        />
      </View>
    </View>
  );
};

export default InputSearchCategory;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    marginTop: 30,
    alignSelf: 'center',
    width: 311,
    height: 40,
    borderColor: 'rgba(7, 66, 122, 0.5)', // 50% opacity color
    borderWidth: 1,
    borderRadius: 30,
  },

  categoryInput: {
    flex: 1.5,
    fontFamily: 'InstrumentSans-MediumItalic',
    fontSize: 12,
    color: 'rgba(7, 66, 122, 0.3)',
    paddingHorizontal: 12,
  },

  inputBoxSearchContainer: {
    flexDirection: 'row',
  },

  searchIcon: {
    paddingVertical: 3,
  },

  divider: {
    borderColor: 'rgba(7, 66, 122, 0.8)',
    borderWidth: 0.5,
    width: 0,
    height: 26,
    marginTop: 5,
    marginLeft: 6,
  },

  inputOtherContent: {flex: 1, flexDirection: 'row'},
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 50,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#D7D7D7',
    borderRadius: 8,
    color: '#000000',
    backgroundColor: '#F4FDFF',
    paddingRight: 30, // To ensure text is not cut off
  },
  inputAndroid: {
    height: 50,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#D7D7D7',
    borderRadius: 8,
    color: '#000000',
    backgroundColor: '#F4FDFF',
    paddingRight: 30, // To ensure text is not cut off
  },
});
