import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
// import arrowIcon from '../../assets/images/chevron.png';
import arrowIcon from '../../../assets/images/chevron.png';
import { useNavigation } from '@react-navigation/native';
const Browse = () => {
  const itemCategory = [
    { id: '1', product: 'Audio', screen: 'AudioScreen' },
    { id: '2', product: 'Drones + Electronics', screen: 'DronesScreen' },
    { id: '3', product: 'Photo + Video', screen: 'PhotovideoScreen' },
    { id: '4', product: 'Headphones', screen: 'HeadphoneScreen' },
    { id: '5', product: 'Networking', screen: 'NetworkingScreen' },
    { id: '6', product: 'Notebooks + PCs', screen: 'NotebookScreen' },
    { id: '7', product: 'PC components', screen: 'PCScreen' },
    { id: '8', product: 'Peripherals', screen: 'PeripheralsScreen' },
    { id: '9', product: 'Smartphones + Tablets', screen: 'SmartPhoneScreen' },
    { id: '10', product: 'Software solutions', screen: 'SoftwareScreen' },
    { id: '11', product: 'Gaming + VR', screen: 'GamingScreen' },
    { id: '12', product: 'TV + Cinema', screen: 'TvcinemaScreen' },
  ];
  const navigation = useNavigation();

  // handle user search input
  const [userInput, setUserInput] = useState('');
  const handleSeachFilter = item => {
    if (userInput == '') {
      return (
        <View style={styles.itemContainer}>
          <TouchableOpacity onPress={()=>navigation.navigate(item.screen)}>
            <View style={styles.listItem}>
              <Text style={styles.itemName}>{item.product}</Text>
              <Image source={arrowIcon} style={styles.arrowIcon} />
            </View>
            </TouchableOpacity>
          <View style={styles.line} />
        </View>
      );
    }
    if (item.product.toLowerCase().includes(userInput.toLocaleLowerCase())) {
      return (
        <View style={styles.itemContainer}>
          <TouchableOpacity onPress={()=>navigation.navigate(item.screen)}>
            <View style={styles.listItem}>
              <Text style={styles.itemName}>{item.product}</Text>
              <Image source={arrowIcon} style={styles.arrowIcon} />
            </View>
          </TouchableOpacity>

          <View style={styles.line} />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Search"
          style={styles.searchBar}
          onChangeText={text => setUserInput(text)}
        />
      </View>

      <View style={styles.itemList}>
        <FlatList
          data={itemCategory}
          key={item => item.id}
          renderItem={({ item, index }) => {
            return handleSeachFilter(item);
          }}
        />
      </View>
    </View>
  );
};

export default Browse;

const styles = StyleSheet.create({
  container: {
    paddingTop: '13%',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  searchBar: {
    borderRadius: 10,
    padding: 20,
    fontSize: 20,
    backgroundColor: '#F5F5F5',
  },
  itemList: {
    paddingTop: 15,
  },
  itemContainer: {
    // paddingTop:20
  },
  itemName: {
    fontSize: 22,
    fontWeight: '500',
    padding: 10,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#f5f5f5',
  },
  arrowIcon: {
    height: 25,
    width: 25,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
