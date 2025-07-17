import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Category from '../../components/Category';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import ItemCard from '../../components/ItemCard';
import { products } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const bannerData = [
    {
      id: '1',
      productCategory: 'Microphone',
      discPrice: '$108.20',
      actualPrice: '$199.99',
      productName: 'RODE PodMic',
      discription: 'Dynamic microphone,Speaker microphone',
    },
    {
      id: '2',
      productCategory: 'Microphone',
      discPrice: '$108.20',
      actualPrice: '$199.99',
      productName: 'RODE PodMic',
      discription: 'Dynamic microphone,Speaker microphone',
    },
    {
      id: '3',
      productCategory: 'Microphone',
      discPrice: '$108.20',
      actualPrice: '$199.99',
      productName: 'RODE PodMic',
      discription: 'Dynamic microphone,Speaker microphone',
    },
    {
      id: '4',
      productCategory: 'Microphone',
      discPrice: '$108.20',
      actualPrice: '$199.99',
      productName: 'RODE PodMic',
      discription: 'Dynamic microphone,Speaker microphone',
    },
  ];
const navigation = useNavigation();
const [loader , setLoader] = useState(true)
  return (
    <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>Hello Michael</Text>
      </View>
      {/* category slidebar  */}
      <View>
        <Category />
      </View>
      {/* banner Section  */}
      <View>
        <Header title={'Deals of the Day'} seeMore={'See All'} />
      </View>
      <View style={{ marginTop: 10 }}>
        <FlatList
          data={bannerData}
          horizontal={true}
          pagingEnabled={true}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => {
            return (
              <Banner
                productCategory={item.productCategory}
                discPrice={item.discPrice}
                actualPrice={item.actualPrice}
                productName={item.productName}
                discription={item.discription}
              />
            );
          }}
          showsHorizontalScrollIndicator={false}
          />
      </View>
      <View>
        <Header title={'Recommended of the day'} />
      </View>
      <View style={{ marginTop: 15 }}>
        {
          loader ? (
            <FlatList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() =>
                  navigation.navigate('ProductDetails', {
                    id: item.id,
                    productName: item.productName,
                    price: item.price,
                    model: item.model,
                    productImage : item.image,
                    quantity:item.quantity
                  })
                }>
                <ItemCard
                  price={`$${item.price}`}
                  productName={item.productName}
                  productModel={item.model}
                  productImage = {item.image}
                />
              </TouchableOpacity>
            );
          }}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-evenly' }}
          ListFooterComponent={<View style={{ height: 50 }} />}
          showsVerticalScrollIndicator={false}
        />
          ):(
            <ActivityIndicator/>
          )
        }
        
      </View>
    </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: 'white',
    flex: 1,
  },
  nameContainer: {
    marginTop: '15%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  nameText: {
    fontSize: 35,
    letterSpacing: 1,
    fontWeight: 'bold',
  },
});
