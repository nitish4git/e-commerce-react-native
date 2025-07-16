import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const Counter = () => {
    const [counter ,setCounter] = useState(1)
    const handleMinusCounter = () =>{
        if(counter === 0){
            return
        }
        if(counter > 0 ){
            setCounter(counter - 1)
        }

    }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.minusBtn} onPress={handleMinusCounter}>
        <Text style={{ fontSize: 15 }}>-</Text>
      </TouchableOpacity>
      <View style={styles.counterDisplay}>
        <Text style={{ fontWeight: 500, fontSize: 14 }}>{counter}</Text>
      </View>
      <TouchableOpacity style={styles.plusBtn} onPress={()=>setCounter(counter + 1)}>
        <Text style={{ color: 'white' }}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    height: 25,
    width: 72,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  minusBtn: {
    backgroundColor: '#f5f5f5',
    height: 24,
    width: 24,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusBtn: {
    backgroundColor: '#495057',
    height: 24,
    width: 24,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
//   counterDisplay: {
//     height: 16,
//     width: 16,
//   },
});
