import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './HomeScreens/Homescreen'
import ProductDetails from '../components/ProductDetails';

const Stack = createStackNavigator()
const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Homescreen' component={Homescreen} options={{headerShown:false}}/>
      {/* <Stack.Screen name='ProductDetails' component={ProductDetails} options={{headerShown:false}}/> */}

    </Stack.Navigator>
  )
}

export default Home

const styles = StyleSheet.create({})
































// import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import React, { useState } from 'react';
// import Category from '../components/Category';
// import Header from '../components/Header';
// import Banner from '../components/Banner';
// import ItemCard from '../components/ItemCard';
// import { products } from '../constants';
// import { useNavigation } from '@react-navigation/native';

// const Home = () => {
//   const productDetails = [
//     {
//       id: '1',
//       price: '$500.33',
//       productName: 'SONY Premium Wireless Headphones',
//       model: 'Model: WH-1000XM4, Black',
//     },
//     {
//       id: '2',
//       price: '$349.99',
//       productName: 'SONY Premium Wireless Headphones',
//       model: 'Model: WH-1000XM4, Black',
//     },
//     {
//       id: '3',
//       price: '$349.99',
//       productName: 'SONY Premium Wireless Headphones',
//       model: 'Model: WH-1000XM4, Black',
//     },
//     {
//       id: '4',
//       price: '$349.99',
//       productName: 'SONY Premium Wireless Headphones',
//       model: 'Model: WH-1000XM4, Black',
//     },
//     {
//       id: '5',
//       price: '$349.99',
//       productName: 'SONY Premium Wireless Headphones',
//       model: 'Model: WH-1000XM4, Black',
//     },
//     {
//       id: '6',
//       price: '$349.99',
//       productName: 'SONY Premium Wireless Headphones',
//       model: 'Model: WH-1000XM4, Black',
//     },
//     {
//       id: '7',
//       price: '$349.99',
//       productName: 'SONY Premium Wireless Headphones',
//       model: 'Model: WH-1000XM4, Black',
//     },
//     {
//       id: '8',
//       price: '$349.99',
//       productName: 'SONY Premium Wireless Headphones',
//       model: 'Model: WH-1000XM4, Black',
//     },
//     {
//       id: '9',
//       price: '$349.99',
//       productName: 'SONY Premium Wireless Headphones',
//       model: 'Model: WH-1000XM4, Black',
//     },
//     {
//       id: '10',
//       price: '$349.99',
//       productName: 'SONY Premium Wireless Headphones',
//       model: 'Model: WH-1000XM4, Black',
//     },
//   ];
//   const bannerData = [
//     {
//       id: '1',
//       productCategory: 'Microphone',
//       discPrice: '$108.20',
//       actualPrice: '$199.99',
//       productName: 'RODE PodMic',
//       discription: 'Dynamic microphone,Speaker microphone',
//     },
//     {
//       id: '2',
//       productCategory: 'Microphone',
//       discPrice: '$108.20',
//       actualPrice: '$199.99',
//       productName: 'RODE PodMic',
//       discription: 'Dynamic microphone,Speaker microphone',
//     },
//     {
//       id: '3',
//       productCategory: 'Microphone',
//       discPrice: '$108.20',
//       actualPrice: '$199.99',
//       productName: 'RODE PodMic',
//       discription: 'Dynamic microphone,Speaker microphone',
//     },
//     {
//       id: '4',
//       productCategory: 'Microphone',
//       discPrice: '$108.20',
//       actualPrice: '$199.99',
//       productName: 'RODE PodMic',
//       discription: 'Dynamic microphone,Speaker microphone',
//     },
//   ];

//   const navigation = useNavigation();
// const [loader , setLoader] = useState(true)
//   return (
//     <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
//       <View style={styles.container}>
//       <View style={styles.nameContainer}>
//         <Text style={styles.nameText}>Hello Michael</Text>
//       </View>
//       {/* category slidebar  */}
//       <View>
//         <Category />
//       </View>
//       {/* banner Section  */}
//       <View>
//         <Header title={'Deals of the Day'} seeMore={'See All'} />
//       </View>
//       <View style={{ marginTop: 10 }}>
//         <FlatList
//           data={bannerData}
//           horizontal={true}
//           pagingEnabled={true}
//           keyExtractor={item => item.id}
//           renderItem={({ item, index }) => {
//             return (
//               <Banner
//                 productCategory={item.productCategory}
//                 discPrice={item.discPrice}
//                 actualPrice={item.actualPrice}
//                 productName={item.productName}
//                 discription={item.discription}
//               />
//             );
//           }}
//           showsHorizontalScrollIndicator={false}
//           />
//       </View>
//       <View>
//         <Header title={'Recommended of the day'} />
//       </View>
//       <View style={{ marginTop: 15 }}>
//         {
//           loader ? (
//             <FlatList
//           data={products}
//           keyExtractor={item => item.id}
//           renderItem={({ item }) => {
//             return (
//               <TouchableOpacity>
//                 <ItemCard
//                   price={item.price}
//                   productName={item.productName}
//                   productModel={item.model}
//                   productImage = {item.image}
//                 />
//               </TouchableOpacity>
//             );
//           }}
//           numColumns={2}
//           columnWrapperStyle={{ justifyContent: 'space-evenly' }}
//           ListFooterComponent={<View style={{ height: 50 }} />}
//           showsVerticalScrollIndicator={false}
//         />
//           ):(
//             <ActivityIndicator/>
//           )
//         }
        
//       </View>
//     </View>
//     </ScrollView>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 16,
//     backgroundColor: 'white',
//     flex: 1,
//   },
//   nameContainer: {
//     marginTop: '15%',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//   },
//   nameText: {
//     fontSize: 35,
//     letterSpacing: 1,
//     fontWeight: 'bold',
//   },
// });
