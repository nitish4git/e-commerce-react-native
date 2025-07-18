import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

const Category = () => {
  const category = [
    { id: '1', title: 'All' },
    { id: '2', title: 'Audio' },
    { id: '3', title: 'Drone + Electornics' },
    { id: '4', title: 'Photo + Video' },
    { id: '5', title: 'Gaming + VR' },
    { id: '6', title: 'Networking' },
    { id: '7', title: 'Notebooks + PC' },
    { id: '8', title: 'PC Components' },
    { id: '9', title: 'Peripherals' },
    { id: '10', title: 'Smartphone + Tablets' },
    { id: '11', title: 'Software Solutions' },
  ];

  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <View>
      <FlatList
        data={category}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.container}>
              <TouchableOpacity onPress={() => setSelectedCategory(item)}>
                <Text
                  style={[
                    index === 0 ? styles.firstElemt : styles.categoryName,
                    selectedCategory.id == item.id ? styles.selectedItem : null,
                  ]}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  categoryName: {
    fontSize: 20,
    color: 'gray',
    fontWeight: '400',
    paddingLeft: 20,
  },
  firstElemt: {
    paddingLeft: 0,
    fontSize: 20,
    // fontWeight: '400',
  },
  selectedItem: {
    color: 'black',
  },
});
