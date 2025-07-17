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
import { products } from '../../constants';
const HeadphoneScreen = () => {
  const [loader , setLoader] = useState(true)

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <ItemHeader itemName={'Headphone'}/>
      </View>
      <View>
        <Filtercomponent />
      </View>
      <View>
        <TotalProject totalProduct={products.length} />
      </View>
      <View style={{ marginTop: 20 }}>
        {
          loader ? (
              <FlatList
          data={products}
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
                    productImage : item.image,
                    quantity : item.quantity
                  })
                }
              >
                <ItemCard
                  price={`$${item.price}`}
                  productName={item.productName}
                  productModel={item.model}
                  productImage = {item.image}
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
