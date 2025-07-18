import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Filtercomponent = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.subcontainer} activeOpacity={0.7}>
        <Text>Sort by ↓</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.subcontainer} activeOpacity={0.7}>
        <Text>Category ↓</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.subcontainer} activeOpacity={0.7}>
        <Text>Brand ↓</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.subcontainer} activeOpacity={0.7}>
        <Text>Price ↓</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Filtercomponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    paddingTop: 10,
  },
  subcontainer: {
    height: 40,
    width: 86,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
  },
});
