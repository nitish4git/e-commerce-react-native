import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Header = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{props.title}</Text>
      <TouchableOpacity>
        <Text style={styles.textStyle1}>{props.seeMore}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  textStyle: {
    color: '#212429',
    fontSize: 25,
    fontWeight: 'bold',
  },
  textStyle1: {
    fontSize: 17,
    fontWeight: '500',
    color: '#B0B5B9',
  },
});
