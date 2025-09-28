import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import DropDownIcon from '../assets/icons/DropDownIcon.svg';
import SelectCityModal from './SelectCityModal';
import {adminApi} from '../services/apiService';

const InputSearchCategory = ({city}) => {
  const [cities, setCities] = useState();
  const [selectCity, setSelectedCity] = useState(city);
  const [isModalVisible, setModalVisible] = useState(false);

  const fetchCities = async () => {
    try {
      console.log('Full API URL:', adminApi.defaults.baseURL + '/cities/getCities');

      const response = await adminApi.get('/cities/getCities');
      const transformCities = response?.data?.data?.map(item => ({
        label: `${item.name} ${item.cod ? '(COD)' : '(NON COD)'}`,
        value: item.name,
      }));
      setCities(transformCities);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

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

        <TouchableOpacity onPress={() => setModalVisible(!isModalVisible)}>
          <Text style={styles.selectedCityText}>{selectCity}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(!isModalVisible)}>
          <DropDownIcon width={10} height={10} />
        </TouchableOpacity>
      </View>

      <SelectCityModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        setSelectedCity={setSelectedCity}
        cities={cities}
      />
    </View>
  );
};

export default InputSearchCategory;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    marginTop: 30,
    alignSelf: 'center',
    width: '90%',
    height: 40,
    borderColor: 'rgba(7, 66, 122, 0.5)', // 50% opacity color
    borderWidth: 1,
    borderRadius: 30,
    overflow: 'hidden', // Prevent content overflow
    paddingHorizontal: 2,
  },

  categoryInput: {
    flex: 1.5,
    fontFamily: 'InstrumentSans-MediumItalic',
    fontSize: 12,
    color: 'rgba(7, 66, 122, 0.3)',
    paddingHorizontal: 8,
  },

  inputOtherContent: {flex: 1, flexDirection: 'row', alignItems: 'center'},

  divider: {
    borderColor: 'rgba(7, 66, 122, 0.8)',
    borderWidth: 0.5,
    width: 0,
    height: 26,
    marginTop: 5,
    marginLeft: 6,
  },

  selectedCityText: {
    fontFamily: 'InstrumentSans-Medium',
    fontSize: 12,
    color: 'rgba(7, 66, 122, 0.8)',
    paddingHorizontal: 5,
  },
});
