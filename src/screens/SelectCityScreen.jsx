import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Pressable,
  Text,
  View,
  Platform,
  ActionSheetIOS,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { adminApi } from '../services/adminApiService';

const SelectCityScreen = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [cities, setCities] = useState([]);
  const [cityValidation, setCityValidation] = useState(false);
  const navigate = useNavigation();

  const fetchCities = async () => {
    try {
      const response = await adminApi.get('/cities/getCities');
      const transformCities = response?.data.data?.map(item => ({
        label: `${item.name} ${item.cod ? '(COD)' : '(NON COD)'}`,
        value: item.name,
      }));
      setCities(transformCities);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  const openCityPicker = () => {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Cancel', ...cities.map(c => c.label)],
          cancelButtonIndex: 0,
        },
        buttonIndex => {
          if (buttonIndex > 0) {
            const cityValue = 
            setSelectedCity(cities[buttonIndex - 1].label);
          }
        }
      ); 
    }
  };

  const homeContinue = (flag = false) => {
    if (selectedCity) {
      setCityValidation(false);
      flag && navigate.navigate('BottomTab', { city: selectedCity });
    } else {
      setCityValidation(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.mainContainer}>
        <Text style={styles.mainHeadingStyle}>
          <Text style={{ color: '#1C1C1C' }}>
            Moments to the {'\n'} freshest{' '}
          </Text>
          <Text style={{ color: '#FD8D1F' }}>Arabian Sea </Text>
          <Text style={{ color: '#1C1C1C' }}>{'\n'}catch!</Text>
        </Text>

        {Platform.OS === 'ios' ? (
          <Pressable style={styles.pickerWrapper} onPress={openCityPicker}>
            <Text style={styles.fakeInput}>
              {selectedCity || 'Choose Your City'}
            </Text>
          </Pressable>
        ) : (
          <RNPickerSelect
            onValueChange={value => setSelectedCity(value)}
            items={cities}
            useNativeAndroidPickerStyle={false}
            style={pickerSelectStyles}
            placeholder={{
              label: 'Choose Your City',
              value: null,
            }}
          />
        )}

        {!selectedCity && cityValidation && (
          <Text style={styles.cityValidation}>City is required</Text>
        )}

        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => homeContinue(true)}
        >
          <Text style={styles.getStartedText}>Continue</Text>
          <AntDesign
            name={'arrowright'}
            size={20}
            color={'#FFFFFF'}
            style={styles.arrowStyle}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SelectCityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  mainContainer: {
    flex: 1,
    padding: 15,
    marginTop: 70,
  },
  mainHeadingStyle: {
    fontFamily: 'InstrumentSans-Regular',
    fontWeight: '700',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 32,
  },
  pickerWrapper: {
    marginTop: 60,
    height: 50,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D7D7D7',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#F4FDFF',
  },
  fakeInput: {
    color: '#000',
    fontSize: 16,
  },
  getStartedButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FD8D1F',
    width: 204,
    height: 44,
    borderRadius: 5,
    marginTop: 100,
  },
  getStartedText: {
    fontFamily: 'InstrumentSans-Regular',
    fontWeight: '500',
    fontSize: 20,
    color: '#FFFFFF',
  },
  arrowStyle: {
    paddingHorizontal: 10,
  },
  cityValidation: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    fontFamily: 'InstrumentSans-Regular',
    fontWeight: '500',
    color: 'red',
    fontSize: 16,
    marginTop: 5,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 50,
    fontSize: 16,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#D7D7D7',
    borderRadius: 8,
    color: '#000',
    backgroundColor: '#F4FDFF',
    paddingRight: 30,
  },
  inputAndroid: {
    marginTop: 60,
    height: 50,
    fontSize: 16,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#D7D7D7',
    borderRadius: 8,
    color: '#000',
    backgroundColor: '#F4FDFF',
    paddingRight: 30,
  },
});
