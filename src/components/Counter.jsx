import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity } from '../Redux/Slice/Slice';
import { useSelector } from 'react-redux';
const Counter = (props) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(state => state.cart.items)
  const productQuantity = cartItem.find(item => item.id === props.id)
  
  


    const [counter ,setCounter] = useState(1)
    const handleMinusCounter = (item) =>{
        if(item.quantity === 0){
            return
        }
        if(item.quantity > 0 ){
          dispatch(decreaseQuantity(item))
        }

    }
   
    const handleIncreaseBtn = (item) =>{
        dispatch(increaseQuantity(item))
    }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.minusBtn} onPress={()=>handleMinusCounter(props)}>
        <Text style={{ fontSize: 15 }}>-</Text>
      </TouchableOpacity>
      <View style={styles.counterDisplay}>
        <Text style={{ fontWeight: 500, fontSize: 14 }}>{productQuantity.quantity}</Text>
      </View>
      <TouchableOpacity style={styles.plusBtn} onPress={()=>handleIncreaseBtn(props)}>
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
