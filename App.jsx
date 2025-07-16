import { LogBox, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/Navigation/StackNavigator';
import { Provider } from 'react-redux';
import store from "./src/Redux/Store/Store";
const App = () => {

  // LogBox.ignoreAllLogs()
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
