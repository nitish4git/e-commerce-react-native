import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './TabNavigator';
import ProductDetails from '../components/ProductDetails';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='ProductDetails' component={ProductDetails} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;

