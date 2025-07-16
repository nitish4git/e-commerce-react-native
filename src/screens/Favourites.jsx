import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ItemHeader from '../components/ItemHeader';
import micImage from '../../assets/images/micImage.png';
import cartIcon from '../../assets/images/online-shopping.png';
import menuIcon from '../../assets/images/dots.png';

const Favourites = () => {
  const wishlistItems = useSelector(state => state.wishlist.items);
  const flatWishlistItems = wishlistItems.flat();
  const [loader , setLoader] = useState(true)
  return (
    <View style={styles.container}>
      <View>
        <ItemHeader itemName={'Favourites'} />
      </View>
      {
        loader ? (
           <FlatList
        data={flatWishlistItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                marginTop: 16,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 10,
              }}
            >
              {/* for image  */}
              <View
                style={{
                  height: 88,
                  width: 80,
                  backgroundColor: '#f5f5f5',
                  borderRadius: 10,
                }}
              >
                <Image
                  source={item.productImage}
                  style={{
                    height: '100%',
                    width: '100%',
                    resizeMode: 'contain',
                  }}
                />
              </View>
              {/* for details  */}
              <View style={{ width: 160, paddingVertical: 12 }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                  {item.price}
                </Text>
                <Text
                  style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}
                >
                  {item.productName}
                </Text>
                <Text style={{ fontSize: 10 }}>{item.model}</Text>
              </View>

              {/* for cart icon  */}
              <View
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: '#f5f5f5',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={cartIcon}
                  style={{ height: 20, width: 20, resizeMode: 'contain' }}
                />
              </View>
              {/* for more options  */}
              <View
                style={{
                  height: 40,
                  width: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={menuIcon}
                  style={{ height: 20, width: 20, resizeMode: 'contain' }}
                />
              </View>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
      />
        ):(
          <ActivityIndicator style={styles.activityIndicator} size={30}/>
        )
      }
     
    </View>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: 'white',
  },
  activityIndicator:{
    marginTop:"50%"
  }
});
