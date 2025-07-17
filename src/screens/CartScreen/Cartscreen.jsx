import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ItemHeader from '../../components/ItemHeader';
import Cartcomponent from '../../components/Cartcomponent';
import { paymentGatewayIcons } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import emptyCartIcon from '../../../assets/images/empty-cart.png';

const Cartscreen = () => {
  const cartItems = useSelector(state => state.cart.items);
  const flatCartItems = cartItems.flat();
  console.log(flatCartItems);

  const totalPrice = flatCartItems.flat().reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/,/g, ''));
    return sum + price * item.quantity;
  }, 0);

  const [loader, setLoader] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ItemHeader itemName="Cart" />
      {cartItems.length > 0 ? (
        <>
          <View>
            <FlatList
              data={flatCartItems}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
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
                    <Cartcomponent
                      price={`$${flatCartItems[index].price}`}
                      productName={flatCartItems[index].productName}
                      productModel={flatCartItems[index].model}
                      image={flatCartItems[index].productImage}
                      id={flatCartItems[index].id}
                      quantity={flatCartItems[index].quantity}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          {/* // payment */}
          <View style={styles.paymentContainer}>
            <View style={styles.detailsContainer}>
              <View>
                <Text style={{ fontWeight: 500, fontSize: 16 }}>Shipping</Text>
                <Text style={{ fontWeight: 800, fontSize: 16 }}>Total</Text>
              </View>
              <View
                style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}
              >
                <Text style={{ fontWeight: 800, fontSize: 16 }}>$0.00</Text>
                <Text
                  style={{ fontWeight: 800, fontSize: 16 }}
                >{`$${totalPrice}`}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.checkoutBtn}>
              <Text style={styles.checkoutText}>Checkout</Text>
            </TouchableOpacity>
            <View>
              <FlatList
                data={paymentGatewayIcons}
                horizontal
                renderItem={({ item }) => {
                  return (
                    <View style={styles.paymentIcons}>
                      <Image source={item.name} />
                    </View>
                  );
                }}
                scrollEnabled={false}
              />
            </View>
          </View>
        </>
      ) : (
        <View style={styles.emptyCartcontainer}>
          <Image
            source={emptyCartIcon}
            resizeMode="contain"
            style={styles.emptyCartStyle}
          />
          <Text
            style={{
              fontWeight: 800,
              letterSpacing: 1,
              fontSize: 18,
              color: 'gray',
            }}
          >
            Your Cart is Empty
          </Text>
        </View>
      )}
    </View>
  );
};

export default Cartscreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  paymentContainer: {
    height: 190,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 20,
    borderTopColor: '#C9CCCF',
    borderTopWidth: 1,
    paddingTop: 15,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkoutBtn: {
    height: 52,
    width: 370,
    backgroundColor: 'black',
    marginTop: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutText: {
    color: 'white',
    fontWeight: 500,
    letterSpacing: 2,
  },
  paymentIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginTop: 20,
  },
  emptyCartcontainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  emptyCartStyle: {
    height: 80,
    width: 80,
    marginBottom: 20,
  },
});
