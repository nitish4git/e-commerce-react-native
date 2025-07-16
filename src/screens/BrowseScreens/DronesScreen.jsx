import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemHeader from '../../components/ItemHeader'

const DronesScreen = () => {
  return (
     <View style={styles.container}>
      <ItemHeader itemName={"Drones + Electronics"}/>
    </View>
  )
}

export default DronesScreen

const styles = StyleSheet.create({})