import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};
//  Slice For Wishlist Items 
const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

// Slice for cart items 

const cartSlice = createSlice({
  name:"cart",
  initialState,
  reducers:{
    addToCart:(state,action) =>{
      state.items.push(action.payload);
    },
    removeFromCart:(state , action) =>{
      state.items = state.items.filter(item => item.id !== action.payload)
    }
  }
})
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;
export const {addToCart , removeFromCart} = cartSlice.actions;
export const cartReducer =  cartSlice.reducer;


