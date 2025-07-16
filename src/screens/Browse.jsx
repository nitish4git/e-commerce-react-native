import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchProduct from './BrowseScreens/SearchProduct';
import HeadphoneScreen from './BrowseScreens/HeadphoneScreen';
import AudioScreen from './BrowseScreens/AudioScreen';
import DronesScreen from './BrowseScreens/DronesScreen';
import GamingScreen from './BrowseScreens/GamingScreen';
import PCScreen from './BrowseScreens/PCScreen';
import PeripheralsScreen from './BrowseScreens/PeripheralsScreen';
import PhotovideoScreen from './BrowseScreens/PhotovideoScreen';
import SmartPhoneScreen from './BrowseScreens/SmartPhoneScreen';
import SoftwareScreen from './BrowseScreens/SoftwareScreen';
import TvcinemaScreen from './BrowseScreens/TvcinemaScreen';
import ProductDetails from '../components/ProductDetails';

const Stack = createStackNavigator();
const Browse = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchProduct"
        component={SearchProduct}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HeadphoneScreen"
        component={HeadphoneScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AudioScreen"
        component={AudioScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DronesScreen"
        component={DronesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GamingScreen"
        component={GamingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PeripheralsScreen"
        component={PeripheralsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PCScreen"
        component={PCScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PhotovideoScreen"
        component={PhotovideoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SmartPhoneScreen"
        component={SmartPhoneScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SoftwareScreen"
        component={SoftwareScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TvcinemaScreen"
        component={TvcinemaScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='ProductDetails' component={ProductDetails} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};

export default Browse;

const styles = StyleSheet.create({});

// import {
//   FlatList,
//   Image,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, { useState } from 'react';
// import arrowIcon from '../../assets/images/chevron.png';
// import { useNavigation } from '@react-navigation/native';
// const Browse = () => {
//   const itemCategory = [
//     { id: '1', product: 'Audio', screen: 'AudioScreen' },
//     { id: '2', product: 'Drones + Electronics', screen: 'DronesScreen' },
//     { id: '3', product: 'Photo + Video', screen: 'PhotovideoScreen' },
//     { id: '4', product: 'Headphones', screen: 'HeadphoneScreen' },
//     { id: '5', product: 'Networking', screen: 'NetworkingScreen' },
//     { id: '6', product: 'Notebooks + PCs', screen: 'NotebookScreen' },
//     { id: '7', product: 'PC components', screen: 'PCScreen' },
//     { id: '8', product: 'Peripherals', screen: 'PeripheralsScreen' },
//     { id: '9', product: 'Smartphones + Tablets', screen: 'SmartPhoneScreen' },
//     { id: '10', product: 'Software solutions', screen: 'SoftwareScreen' },
//     { id: '11', product: 'Gaming + VR', screen: 'GamingScreen' },
//     { id: '12', product: 'TV + Cinema', screen: 'TvcinemaScreen' },
//   ];
//   const navigation = useNavigation();

//   // handle user search input
//   const [userInput, setUserInput] = useState('');
//   const handleSeachFilter = item => {
//     if (userInput == '') {
//       return (
//         <View style={styles.itemContainer}>
//           <TouchableOpacity onPress={()=>navigation.navigate(item.screen)}>
//             <View style={styles.listItem}>
//               <Text style={styles.itemName}>{item.product}</Text>
//               <Image source={arrowIcon} style={styles.arrowIcon} />
//             </View>
//             </TouchableOpacity>
//           <View style={styles.line} />
//         </View>
//       );
//     }
//     if (item.product.toLowerCase().includes(userInput.toLocaleLowerCase())) {
//       return (
//         <View style={styles.itemContainer}>
//           <TouchableOpacity onPress={()=>navigation.navigate(item.screen)}>
//             <View style={styles.listItem}>
//               <Text style={styles.itemName}>{item.product}</Text>
//               <Image source={arrowIcon} style={styles.arrowIcon} />
//             </View>
//           </TouchableOpacity>

//           <View style={styles.line} />
//         </View>
//       );
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View>
//         <TextInput
//           placeholder="Search"
//           style={styles.searchBar}
//           onChangeText={text => setUserInput(text)}
//         />
//       </View>

//       <View style={styles.itemList}>
//         <FlatList
//           data={itemCategory}
//           key={item => item.id}
//           renderItem={({ item, index }) => {
//             return handleSeachFilter(item);
//           }}
//         />
//       </View>
//     </View>
//   );
// };

// export default Browse;

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: '13%',
//     paddingHorizontal: 20,
//     backgroundColor: 'white',
//     flex: 1,
//   },
//   searchBar: {
//     borderRadius: 10,
//     padding: 20,
//     fontSize: 20,
//     backgroundColor: '#F5F5F5',
//   },
//   itemList: {
//     paddingTop: 15,
//   },
//   itemContainer: {
//     // paddingTop:20
//   },
//   itemName: {
//     fontSize: 22,
//     fontWeight: '500',
//     padding: 10,
//   },
//   line: {
//     height: 1,
//     width: '100%',
//     backgroundColor: '#f5f5f5',
//   },
//   arrowIcon: {
//     height: 25,
//     width: 25,
//   },
//   listItem: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
// });
