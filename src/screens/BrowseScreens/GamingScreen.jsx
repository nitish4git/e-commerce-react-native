import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import ItemHeader from '../../components/ItemHeader';

const GamingScreen = () => {
  return (
   <View style={styles.container}>
      <ItemHeader itemName={"Gaming + VR"}/>
    </View>
  )
}

export default GamingScreen

const styles = StyleSheet.create({})