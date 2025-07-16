import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import ItemHeader from '../../components/ItemHeader';
import Filtercomponent from '../../components/Filtercomponent';
import TotalProject from '../../components/TotalProduct';
import ItemCard from '../../components/ItemCard';
import { useNavigation } from '@react-navigation/native';
import whiteHeadphone from "../../../assets/images/ProductImages/Sony_Headphones_02.png"
import blackHeadphone from "../../../assets/images/ProductImages/Sony_Headphones_01.png"
import appleAirpods from '../../../assets/images/ProductImages/Apple_AirPods.png'
import galaxyAipods from "../../../assets/images/ProductImages/Samsung_Buds.png"
const HeadphoneScreen = () => {
  const [loader , setLoader] = useState(true)
  const productDetails = [
    {
      id: '1',
      price:500.33,
      productName: 'SONY Premium Wireless Headphones',
      model: 'Model: WH-1000XM4, Black',
      productImage: whiteHeadphone
    },
    {
      id: '2',
      price: 349.99,
      productName: 'SONY Premium Wireless Headphones',
      model: 'Model: WH-1000XM4, Black',
      productImage:blackHeadphone
    },
    {
      id: '3',
      price: 179.00,
      productName: 'APPLE AirPods Pro MagSafe Case',
      model: 'NC, 4 h, Wireless',
      productImage: appleAirpods

    },
    {
      id: '4',
      price: 119.99,
      productName: 'SAMSUNG Galaxy Buds 2 Pro',
      model: 'NC, 6 h, Wireless',
      productImage:galaxyAipods

    },
    {
      id: '5',
      price: 349.99,
      productName: 'SONY Premium Wireless Headphones',
      model: 'Model: WH-1000XM4, Black',
      productImage: whiteHeadphone

    },
    {
      id: '6',
      price: 349.99,
      productName: 'SONY Premium Wireless Headphones',
      model: 'Model: WH-1000XM4, Black',
      productImage:blackHeadphone

    },
    {
      id: '7',
      price: 349.99,
      productName: 'SONY Premium Wireless Headphones',
      model: 'Model: WH-1000XM4, Black',
      productImage: whiteHeadphone

    },
    {
      id: '8',
      price: 10009,
      productName: 'Philips  Wireless Headphones',
      model: 'Model: WH-1000XM4, Black',
      productImage:blackHeadphone

    },
    {
      id: '9',
      price: 349.99,
      productName: 'SONY Premium Wireless Headphones',
      model: 'Model: WH-1000XM4, Black',
      productImage: whiteHeadphone

    },
    {
      id: '10',
      price: 700.99,
      productName: 'JBL Premium Wireless Headphones',
      model: 'Model: WH-1000XM4, Black',
      productImage:blackHeadphone

    },
  ];
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <ItemHeader itemName={'Headphone'} icon={"searchIcon"}/>
      </View>
      <View>
        <Filtercomponent />
      </View>
      <View>
        <TotalProject totalProduct={productDetails.length} />
      </View>
      <View style={{ marginTop: 20 }}>
        {
          loader ? (
              <FlatList
          data={productDetails}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{ paddingVertical: 12 }}
                onPress={() =>
                  navigation.navigate('ProductDetails', {
                    id: item.id,
                    productName: item.productName,
                    price: item.price,
                    model: item.model,
                    productImage : item.productImage
                  })
                }
              >
                <ItemCard
                  price={`$${item.price}`}
                  productName={item.productName}
                  productModel={item.model}
                  productImage = {item.productImage}
                />
              </TouchableOpacity>
            );
          }}
          columnWrapperStyle={{ justifyContent: 'space-evenly' }}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={{ height: 200 }} />}
        />
          ) : (
            <ActivityIndicator/>
          )
        }
      
      </View>
    </View>
  );
};

export default HeadphoneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
});
