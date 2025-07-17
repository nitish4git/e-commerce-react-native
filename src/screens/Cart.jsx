import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Cartscreen from './CartScreen/Cartscreen'
import ProductDetails from '../components/ProductDetails'
const Cart = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen name='Cartscreen' component={Cartscreen} options={{headerShown:false}}/>
      <Stack.Screen name='ProductDetails' component={ProductDetails} options={{headerShown:false}}/>

    </Stack.Navigator>
  )
}

export default Cart































































































// import {
//   ActivityIndicator,
//   FlatList,
//   Image,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import ItemHeader from '../components/ItemHeader';
// import watchImage from '../../assets/images/watchImage.png';
// import Counter from '../components/Counter';
// import menu from '../../assets/images/dots.png';
// import Cartcomponent from '../components/Cartcomponent';
// import ApplePay from '../../assets/images/paymentGateway/ApplePay.png';
// import GPay from '../../assets/images/paymentGateway/GPay.png';
// import Mastercard from '../../assets/images/paymentGateway/Mastercard.png';
// import Paypal from '../../assets/images/paymentGateway/Paypal.png';
// import Visa from '../../assets/images/paymentGateway/Visa.png';
// import Amex from '../../assets/images/paymentGateway/Amex.png';
// import { paymentGatewayIcons } from '../constants';


// const Cart = () => {
 
//   const cartItems = useSelector(state => state.cart.items);
  
//   const flatCartItems = cartItems.flat();
  
//   // calcultaing total price 
//   const totalPrice = flatCartItems.flat().reduce((sum , item)=> sum + item.price,0)

//   const [loader , setLoader] = useState(false)
//   return (
//     <View style={styles.container}>
//       <ItemHeader itemName="Cart" />
//       <View>
//         <FlatList
//           data={flatCartItems}
//           renderItem={({ items, index }) => {
//             return (
//               <Cartcomponent
//                 price={`$${flatCartItems[index].price}`}
//                 productName={flatCartItems[index].productName}
//                 productModel={flatCartItems[index].model}
//                 image={flatCartItems[index].productImage}
//               />
//             );
//           }}
//         />
//       </View>
//       {/* payment */}
//       <View style={styles.paymentContainer}>
//         <View style={styles.detailsContainer}>
//           <View>
//             <Text style={{fontWeight:500,fontSize:16}}>Shipping</Text>
//             <Text style={{fontWeight:800,fontSize:16}}>Total</Text>
//           </View>
//           <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
//             <Text style={{fontWeight:800,fontSize:16}}>$0.00</Text>
//             <Text style={{fontWeight:800,fontSize:16}}>{`$${totalPrice}`}</Text>
//           </View>
//         </View>
//         <TouchableOpacity style={styles.checkoutBtn}>
//           <Text style={styles.checkoutText}>Checkout</Text>
//         </TouchableOpacity>
//         <View>
//           <FlatList 
//           data={paymentGatewayIcons}
//           horizontal
//           renderItem={({item})=>{
//             return(
//               <View style={styles.paymentIcons}>
//               <Image source={item.name}/>
//               </View>
//             )
//           }}
//           scrollEnabled={false}
//           />
//           </View>
//       </View>
//     </View>
//   );
// };

// export default Cart;

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 20,
//     backgroundColor: 'white',
//     flex: 1,
//   },
//   paymentContainer: {
//     height: 190,
//     width: '100%',
//     position: 'absolute',
//     bottom: 0,
//     left: 20,borderTopColor:'#C9CCCF',borderTopWidth:1,paddingTop:15
//   },
//   detailsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },checkoutBtn:{
//     height:52,width:370,backgroundColor:'black',marginTop:20,borderRadius:20,justifyContent:"center",alignItems:"center"
//   },checkoutText:{
//     color:"white",fontWeight:500,letterSpacing:2
//   },paymentIcons:{
//     flexDirection:'row',justifyContent:"space-between",marginLeft:10,marginTop:20
//   }
// });
