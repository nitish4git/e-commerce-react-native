import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemHeader from '../../components/ItemHeader'
const PhotovideoScreen = () => {
  return (
   <View style={styles.container}>
      <ItemHeader itemName={"Photo + Video"}/>
    </View>
  )
}

export default PhotovideoScreen

const styles = StyleSheet.create({})