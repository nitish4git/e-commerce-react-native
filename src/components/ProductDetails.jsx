import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import ItemHeader from './ItemHeader';
import { useNavigation } from '@react-navigation/native';
import headphoneImage from '../../assets/images/ProductImages/headphone.png';
import heartImage from '../../assets/images/heart.png';
import cartImage from '../../assets/images/online-shopping.png';
import fillHeartIcon from '../../assets/images/fillhearticon.png';
import { useDispatch } from 'react-redux';
import { addToCart, addToWishlist } from '../Redux/Slice/Slice';
import addedCart from '../../assets/images/addedCart.png';
import { removeFromWishlist } from '../Redux/Slice/Slice';

const ProductDetails = ({ route }) => {
  const dispatch = useDispatch();
  const product = route.params;
  const [addWishlist, setAddWishlist] = useState(false);
  const [fillCart, setFillCart] = useState(false);
  const [wishlistItem, setWishlistItem] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const handleRemoveWishlist = id => {
    dispatch(removeFromWishlist(id));
    setAddWishlist(!addToWishlist);
  };

  const handleAddWishlist = product => {
    // Saving items to redux store
    setWishlistItem(prevItems => {
      const updatedItems = [...prevItems, product];
      dispatch(addToWishlist(updatedItems));
    });
    // changing wishlist icon
    setAddWishlist(!addWishlist);
  };

  // Handle cart
  const handleCart = () => {
    // Saving items to redux store
    setCartItems(prevItems => {
      const updatedItems = [...prevItems, product];
      console.log("data from updated items",updatedItems)
      dispatch(addToCart(updatedItems));
    });
    setFillCart(!fillCart);
  };

  const handleRemoveCartItem = () =>{
    setFillCart(!fillCart);

  }

  return (
    <View style={styles.container}>
      <View>
        <ItemHeader itemName={'Headphone'} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true}>
        {/* image section */}
        <View style={styles.imageContainer}>
          <Image source={product.productImage} style={styles.imageStyle} />
          {/* cart and wishlist icon  */}
          <View style={styles.iconContainer}>
            {addWishlist ? (
              <TouchableOpacity
                style={styles.wishlistContainer}
                onPress={() => handleRemoveWishlist(product.id)}
              >
                <Image
                  source={fillHeartIcon}
                  style={styles.wishlistIcon}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.wishlistContainer}
                onPress={() => handleAddWishlist(product)}
              >
                <Image
                  source={heartImage}
                  style={styles.wishlistIcon}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            )}
            {/* cart icon  */}
            {fillCart ? (
              <TouchableOpacity
                style={styles.cartContainer}
                onPress={() => handleRemoveCartItem()}
              >
                <Image
                  source={addedCart}
                  style={styles.cartIcon}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.cartContainer}
                onPress={() => handleCart()}
              >
                <Image
                  source={cartImage}
                  style={styles.cartIcon}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        {/* product details  */}
        <View style={styles.productDetail}>
          <Text style={styles.productPrice}>{product.price}</Text>
          <Text style={styles.productPrice}>{product.productName}</Text>
          <Text style={styles.productModel}>{product.model}</Text>
        </View>
        <View style={styles.productDiscription}>
          <Text style={{ fontSize: 17, letterSpacing: 1, color: 'gray' }}>
            The technology with two noise sensors and two microphones on each
            ear cup detects ambient noise and sends the data to the HD noise
            minimization processor QN1. Using a new algorithm, the QN1 then
            processes and minimizes noise for different acoustic environments in
            real time. Together with a new Bluetooth Audio SoC and sends the
            data to the HD noise minimization processor QN1. Using a new
            algorithm, the QN1 then processes and minimizes noise for different
            acoustic environments in real time. Together with a new Bluetooth
            Audio SoC and sends the data to the HD noise minimization processor
            QN1. Using a new algorithm, the QN1 then processes and minimizes
            noise for different acoustic environments in real time. Together
            with a new Bluetooth Audio SoC and sends the data to the HD noise
            minimization processor QN1. Using a new algorithm, the QN1 then
            processes and minimizes noise for different acoustic environments in
            real time. Together with a new Bluetooth Audio SoC and sends the
            data to the HD noise minimization processor QN1. Using a new
            algorithm, the QN1 then processes and minimizes noise for different
            acoustic environments in real time. Together with a new Bluetooth
            Audio SoC
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  imageContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    marginTop: 32,
  },
  imageStyle: {
    width: '85%',
  },
  productDetail: {
    marginTop: 16,
  },
  productPrice: {
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 2,
  },
  productModel: {
    color: 'gray',
    marginTop: 2,
  },
  productDiscription: {
    marginTop: 20,
  },
  wishlistIcon: {
    height: '80%',
    width: '80%',
    marginTop: 4,
  },
  cartIcon: {
    height: '60%',
    width: '60%',
  },
  wishlistContainer: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  cartContainer: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    height: 88,
    width: 40,
    position: 'absolute',
    right: 16,
    bottom: 16,
    gap: 8,
  },
});
