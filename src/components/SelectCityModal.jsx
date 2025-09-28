import {StyleSheet, Modal, Dimensions, Text, View} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');
import {BlurView} from '@react-native-community/blur';
import {SelectList} from 'react-native-dropdown-select-list';

const SelectCityModal = ({
  isModalVisible,
  setModalVisible,
  setSelectedCity,
  cities,
}) => {
  return (
    <Modal
      visible={isModalVisible}
      transparent
      animationType="fade"
      onRequestClose={() => setModalVisible(false)}>
      <View style={styles.modalOverlay}>
        <BlurView
          style={StyleSheet.absoluteFill}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        />

        <View style={styles.modalContent}>
          <SelectList
            setSelected={val => {
              setSelectedCity(val);
              setModalVisible(false);
            }}
            data={
              cities?.length
                ? cities.map(city => ({
                    key: city.value, // keep id as key (for uniqueness)
                    value: city.label, // 👈 SelectList will now return the label
                  }))
                : [{key: 0, value: 'No cities available'}]
            }
            placeholder="Select City"
            boxStyles={styles.selectCity}
            fontFamily={'InstrumentSans-Regular'}
            searchinputStyles={{
              color: 'rgba(0, 0, 0, 0.4)',
            }}
            inputStyles={{
              color: 'rgba(0, 0, 0, 0.4)',
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SelectCityModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: width * 0.8, // 80% of screen width
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#07427A',
    borderRadius: 8,
    padding: 10,
    width: '80%',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  selectCity: {
    width: '100%', // Ensure it takes up available space within the parent
    height: 44, // Height as before
    borderColor: '#BFBFBF',
    borderWidth: 1,
    color: 'rgba(0, 0, 0, 0.4)',
  },
});
