import { LogBox, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/Navigation/StackNavigator';
import { Provider } from 'react-redux';
import store from "./src/Redux/Store/Store";
const App = () => {

  // LogBox.ignoreAllLogs()
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={'black'} barStyle={'default'} />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
