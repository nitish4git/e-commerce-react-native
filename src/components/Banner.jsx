import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import micImage from '../../assets/images/micImage.png';
const Banner = props => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={micImage}
          resizeMode="contain"
          style={styles.imageContainer}
        />
      </View>
      <View>
        <View style={styles.headingStyle}>
          <Text style={{ fontWeight: '500', color: '#B0B5B9' }}>
            {props.productCategory}
          </Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={{ color: '#FA254C', fontWeight: 'bold', fontSize: 22 }}>
            {props.discPrice}
          </Text>
          <Text
            style={{
              color: '#B0B5B9',
              fontWeight: '200',
              fontSize: 17,
              textDecorationLine: 'line-through',
            }}
          >
            {props.actualPrice}
          </Text>
        </View>
        <View>
          <Text style={styles.itemNameStyle}>{props.productName}</Text>
          <View style={{ width: 200 }}>
            <Text>{props.discription}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    height: 170,
    borderRadius: 20,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
  },
  imageContainer: {
    height: 200,
    width: 180,
  },
  headingStyle: {
    marginTop: 40,
  },
  priceContainer: {
    flexDirection: 'row',
    gap: 5,
    display: 'flex',
    alignItems: 'center',
  },
  itemNameStyle: {
    fontSize: 16,
    fontWeight: '500',
  },
  wishlistIcon: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    right: 0,
  },
});
