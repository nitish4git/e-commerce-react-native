import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react';
import Counter from './Counter';
import watchImage from "../../assets/images/ProductImages/watchImage.png";
import menu from '../../assets/images/dots.png'

const Cartcomponent = (props) => {
  return (
    <View>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={props.image}
            resizeMode="contain"
            style={styles.imageStyle}
          />
        </View>
        {/* details  */}
        <View style={styles.detailContainer}>
          <Text style={styles.priceStyle}>{props.price}</Text>
          <Text style={styles.productNameStyle}>{props.productName}</Text>
          <Text style={styles.modelStyle}>
            {props.productModel}
          </Text>
        </View>
        {/* counter  */}
        <View style={styles.counterContainer}>
          <TouchableOpacity>
            <Image
              source={menu}
              resizeMode="contain"
              style={styles.menuStyle}
            />
          </TouchableOpacity>
          <Counter id={props.id} productName={props.productName} image={props.image} productModel={props.productModel} quantity={props.quantity}/>
        </View>
      </View> 
    </View>
  )
}

export default Cartcomponent

const styles = StyleSheet.create({
    cardContainer: {
    height: 88,
    width: '100%',
    marginTop: 32,
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center',
  }, imageContainer: {
    height: '100%',
    backgroundColor: '#f5f5f5',
    width: 88,
    borderRadius: 20,
  },
   imageStyle: {
    height: '100%',
    width: '100%',
  },
  detailContainer: {
    width: 160,
    height: '100%',
  },priceStyle: {
    fontSize: 14,
    color: 'red',
    fontWeight: 800,
  },
  productNameStyle: {
    fontWeight: 500,
    fontSize: 14,
  },
  modelStyle: {
    fontWeight: 400,
    fontSize: 10,
    color: '#868D94',
  },
  counterContainer: {
    height: 56,
    width: 72,
  },
  menuStyle: {
    height: 20,
    width: 15,
    position: 'relative',
    left: 55,
    marginBottom: 12,
  },
})