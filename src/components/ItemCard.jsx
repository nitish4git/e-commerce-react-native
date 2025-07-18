import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import headphoneImage from '../../assets/images/ProductImages/headphone.png';

const ItemCard = props => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* for image  */}
        <Image
          source={props.productImage}
          resizeMode="contain"
          style={styles.ImageStyle}
        />
      </View>
      <View style={styles.detailsContainer}>
        {/* for details  */}
        <Text style={styles.priceText}>{props.price}</Text>
        <Text style={styles.productNameText}>{props.productName}</Text>
        <Text style={styles.productModelText}>{props.productModel}</Text>
      </View>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  container: {
    height: 263,
    width: 160,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  imageContainer: {
    backgroundColor: '#F5F5F5',
    height: 170,
    width: 160,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailsContainer: {
    paddingTop: 10,
  },
  productNameText: {
    fontSize: 15,
    fontWeight: 500,
  },
  productModelText: {
    fontSize: 12,
    fontWeight: 200,
  },
  ImageStyle: {
    height: '90%',
    width: '90%',
  },
});
