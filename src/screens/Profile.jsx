import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {products} from '../constants';
import { useSelector } from 'react-redux';

const Profile = () => {
  return (
    <View style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"50%"}}>
         
          <Text style={{color:"blue",fontSize:25,fontWeight:800,textDecorationLine:"underline"}}>User Profile Page</Text>
          <ActivityIndicator size={50} style={{marginTop:30}}/>
        </View>
  )
}

export default Profile

const styles = StyleSheet.create({})