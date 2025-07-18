import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './TabNavigator';
import ProductDetails from '../components/ProductDetails';
import HeadphoneScreen from '../screens/BrowseScreens/HeadphoneScreen';
import SearchProduct from '../screens/BrowseScreens/SearchProduct';
import AudioScreen from '../screens/BrowseScreens/AudioScreen';
import DronesScreen from '../screens/BrowseScreens/DronesScreen';
import GamingScreen from '../screens/BrowseScreens/GamingScreen';
import PeripheralsScreen from '../screens/BrowseScreens/PeripheralsScreen';
import PhotovideoScreen from '../screens/BrowseScreens/PhotovideoScreen';
import SmartPhoneScreen from '../screens/BrowseScreens/SmartPhoneScreen';
import SoftwareScreen from '../screens/BrowseScreens/SoftwareScreen';
import TvcinemaScreen from '../screens/BrowseScreens/TvcinemaScreen';
import PCScreen from '../screens/BrowseScreens/PCScreen';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Tabs"
        component={Tabs} 
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
      />
      <Stack.Screen
        name="HeadphoneScreen"
        component={HeadphoneScreen}
      />
      <Stack.Screen
        name="SearchProduct"
        component={SearchProduct}
      />
      <Stack.Screen
        name="AudioScreen"
        component={AudioScreen}
      />
      <Stack.Screen
        name="DronesScreen"
        component={DronesScreen}
      />
      <Stack.Screen
        name="GamingScreen"
        component={GamingScreen}
      />
      <Stack.Screen
        name="PeripheralsScreen"
        component={PeripheralsScreen}
      />
      <Stack.Screen
        name="PCScreen"
        component={PCScreen}
      />
      <Stack.Screen
        name="PhotovideoScreen"
        component={PhotovideoScreen}
      />
      <Stack.Screen
        name="SmartPhoneScreen"
        component={SmartPhoneScreen}
      />
      <Stack.Screen
        name="SoftwareScreen"
        component={SoftwareScreen}
      />
      <Stack.Screen
        name="TvcinemaScreen"
        component={TvcinemaScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
