import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemHeader from '../../components/ItemHeader'
const NotebookScreen = () => {
  return (
    <View style={styles.container}>
      <ItemHeader itemName={"Notebook + PCs"}/>
    </View>
  )
}

export default NotebookScreen

const styles = StyleSheet.create({})