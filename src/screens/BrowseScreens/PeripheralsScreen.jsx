import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemHeader from '../../components/ItemHeader'
const PeripheralsScreen = () => {
  return (
   <View style={styles.container}>
      <ItemHeader itemName={"Peripherals"}/>
    </View>
  )
}

export default PeripheralsScreen

const styles = StyleSheet.create({})