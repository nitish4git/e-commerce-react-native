import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Filtercomponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
      <Text>Sort by ↓</Text>
      </View>
      <View style={styles.subcontainer}>
      <Text>Category ↓</Text>
      </View>
      <View style={styles.subcontainer}>
      <Text>Brand ↓</Text>
      </View>
      <View style={styles.subcontainer}>
      <Text>Price ↓</Text>
      </View>
    </View>
  )
}

export default Filtercomponent

const styles = StyleSheet.create({
  container:{
    justifyContent:"center",
    alignItems:"center",
    flexDirection:'row',gap:8,paddingTop:10
  },
  subcontainer:{
    height:40,width:86,backgroundColor:'#f5f5f5',alignItems:"center",justifyContent:"center",borderRadius:10,padding:10
  }
})