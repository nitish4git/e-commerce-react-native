import { configureStore } from '@reduxjs/toolkit';
import { wishlistReducer, cartReducer } from '../Slice/Slice';
const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
});

export default store;
