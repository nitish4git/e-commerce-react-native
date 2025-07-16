import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemHeader from '../../components/ItemHeader'
const PCScreen = () => {
  return (
   <View style={styles.container}>
      <ItemHeader itemName={"PC Components"}/>
    </View>
  )
}

export default PCScreen

const styles = StyleSheet.create({})