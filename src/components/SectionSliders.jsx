import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {useNavigation} from '@react-navigation/native';

const SectionSliders = ({currentScreen}) => {
  const screens = ['OfferIntroScreen', 'LiveCutting', 'FastDelivery'];
  const [selectScreen, setSelectScreen] = useState(currentScreen);
  const navigate = useNavigation();
  const nextIterationIndex = screens.indexOf(currentScreen) + 1;
  const nextScreen = screens[nextIterationIndex];

  const handleScreenNavigation = screen => {
    setSelectScreen(screen);
    navigate.navigate(screen);
  };
  return (
    <View style={styles.container}>
      <View style={styles.selecterContainer}>
        {screens.map((item, index) => {
          return (
            <TouchableOpacity
              key={index} // Add a unique key for each child element
              style={[
                styles.sectionBox,
                selectScreen === item
                  ? {backgroundColor: '#FFFFFF'}
                  : {backgroundColor: '#B4BCC6'},
              ]}
              onPress={() => handleScreenNavigation(item)}></TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity
        style={styles.forwardButton}
        onPress={() => navigate.navigate(nextScreen)}>
        <AntDesign name={'arrowright'} size={25} color={'#FFFFFF'} />
      </TouchableOpacity>
    </View>
  );
};

export default SectionSliders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Center horizontally
    alignItems: 'center',
    marginBottom: 40,
  },

  selecterContainer: {
    flexDirection: 'row',
  },
  sectionBox: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginLeft: 10,
  },

  forwardButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#FFFFFF',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 10,
  },
});
