import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './src/store';
import AppNavigator from './src/AppNavigator';

const App = () => {

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;

