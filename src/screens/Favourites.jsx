import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Favouritescreen from '../screens/FavouritesScreen/Favouritescreen';
import ProductDetails from '../components/ProductDetails';
const Favourites = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favouritescreen"
        component={Favouritescreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name='ProductDetails' component={ProductDetails} options={{headerShown:false}}/> */}

    </Stack.Navigator>
  );
};
export default Favourites;