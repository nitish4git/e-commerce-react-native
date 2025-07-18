import { createSlice } from '@reduxjs/toolkit';
import { Alert } from 'react-native';

const initialState = {
  items: [],
};
//  Slice For Wishlist Items
const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload; // taking product from user
      const existingItem = state.items.find(item => item.id === product.id); //checking is item present or not
      if (existingItem) {
        //if item is present only increase the quantity of the product
        // existingItem.quantity += 1
        Alert.alert('This item is already in cart');
      } else {
        // if item is not present then insert new item with quantity one
        state.items.push({ ...product, quantity: 1 });
        Alert.alert('Item added to wishlist successfully!');
      }
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

// Slice for cart items

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Addding to Cart.....
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
        Alert.alert('Item added to Cart successfully!');
      }
    },
    // Removing From cart.....
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    // Increading the no. of quantity
    increaseQuantity: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    // Decreasing the quantity
    decreaseQuantity: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity -= 1;
      }
      if (existingItem.quantity <= 0) {
        state.items = state.items.filter(item => {
          item.id !== product;
        });
      }
    },
  },
});
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
