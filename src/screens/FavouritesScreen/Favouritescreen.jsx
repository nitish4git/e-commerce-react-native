import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemHeader from '../../components/ItemHeader';

import cartIcon from '../../../assets/images/online-shopping.png';
import menuIcon from '../../../assets/images/dots.png';
import emptyWishlist from '../../../assets/images/emptyWishlist.png';
import { useNavigation } from '@react-navigation/native';
import { removeFromCart } from '../../Redux/Slice/Slice';

const Favourites = () => {
  const wishlistItems = useSelector(state => state.wishlist.items);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const flatWishlistItems = wishlistItems.flat();
  const [loader, setLoader] = useState(true);
  const navigation = useNavigation();

  const handleCartRemove = (id)=>{
    dispatch(removeFromCart(id))
  }
  return (
    <View style={styles.container}>
      <View>
        <ItemHeader itemName={'Favourites'} />
      </View>
      {flatWishlistItems.length > 0 ? (
        <FlatList
          data={flatWishlistItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            const isItemMatched = cartItems.find(
              cartItem => cartItem.id === item.id,
            );
            return (
              <TouchableOpacity
                style={{
                  marginTop: 16,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderRadius: 10,
                }}
                onPress={() =>
                  navigation.navigate('ProductDetails', {
                    id: item.id,
                    productName: item.productName,
                    price: item.price,
                    model: item.model,
                    productImage: item.productImage,
                    quantity: item.quantity,
                  })
                }
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
                    {`$${item.price}`}
                  </Text>
                  <Text
                    style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}
                  >
                    {item.productName}
                  </Text>
                  <Text style={{ fontSize: 10 }}>{item.model}</Text>
                </View>

                {/* for cart icon  */}
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: 40,
                    backgroundColor: isItemMatched ? 'black' : '#f5f5f5',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={()=>handleCartRemove(item.id)}
                >
                  <Image
                    source={cartIcon}
                    style={{
                      height: 20,
                      width: 20,
                      resizeMode: 'contain',
                      tintColor: !isItemMatched ? 'black' : '#f5f5f5',
                    }}
                  />
                </TouchableOpacity>
                {/* } */}

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
              </TouchableOpacity>
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.emptywishlistcontainer}>
          <Image
            source={emptyWishlist}
            resizeMode="contain"
            style={styles.emptyWishlistStyle}
          />
          <Text
            style={{
              fontWeight: 800,
              letterSpacing: 1,
              fontSize: 18,
              color: 'gray',
            }}
          >
            No Favourite Items
          </Text>
        </View>
      )}
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
  activityIndicator: {
    marginTop: '50%',
  },
  emptywishlistcontainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  emptyWishlistStyle: {
    height: 80,
    width: 80,
    marginBottom: 20,
  },
});
