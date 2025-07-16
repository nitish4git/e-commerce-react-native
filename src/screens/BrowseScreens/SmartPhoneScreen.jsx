import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemHeader from '../../components/ItemHeader'
const SmartPhoneScreen = () => {
  return (
   <View style={styles.container}>
      <ItemHeader itemName={"Smartphone + Tablets"}/>
    </View>
  )
}

export default SmartPhoneScreen

const styles = StyleSheet.create({})