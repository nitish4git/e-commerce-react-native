import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import leftArrow from "../../assets/images/backarrow.png";
import searchIcon from "../../assets/images/loupe.png"
import { useNavigation } from '@react-navigation/native';

const ItemHeader = (props) => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        {/* for back arrow  */}
      <TouchableOpacity style={styles.leftIconContainer} onPress={()=>navigation.goBack()}>
        <Image source={leftArrow} resizeMode='cover' style={styles.leftIcon}/>
      </TouchableOpacity>
      <View>
        <Text style={styles.headerText}>{props.itemName}</Text>
      </View>
      {/* for search icon  */}
      <TouchableOpacity style={styles.searchIconContainer}>
        <Image source={searchIcon} resizeMode='cover'style={styles.searchIcon}/>
      </TouchableOpacity>
    </View>
  );
};

export default ItemHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    height:30,
  },
  leftIconContainer:{
    height:14,width:14
  },leftIcon:{
    height:"100%",width:"100%"
  },searchIconContainer:{
    height:14,width:14,
  },searchIcon:{
    height:"100%",width:"100%",
  },headerText:{
    fontSize:14,fontWeight:"bold"
  }
});
