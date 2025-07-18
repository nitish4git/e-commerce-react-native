import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Tabs/Home';
import Browse from '../Tabs/Browse';
import Favourites from '../Tabs/Favourites';
import Cart from '../Tabs/Cart';
import Profile from '../Tabs/Profile';
import homeIcon from '../../assets/images/house.png';
import browseIcon from '../../assets/images/loupe.png';
import heartIcon from '../../assets/images/heart.png';
import cartIcon from '../../assets/images/online-shopping.png';
import profileIcon from '../../assets/images/profile.png';
import { useSelector } from 'react-redux';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const [WishlistBadgeCount, setWishlistBadgeCount] = useState(0);
  const [cartBadgeCount, setCartBadgeCount] = useState(0);

  // Getting cart total items.
  const wishlistItems = useSelector(state => state.wishlist.items);
  useEffect(() => {
    setWishlistBadgeCount(wishlistItems.length);
  }, [wishlistItems]);

  // Getting Cart total items
  const cartItems = useSelector(state => state.cart.items);
  useEffect(() => {
    setCartBadgeCount(cartItems.length);
  }, [cartItems]);
  
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarIcon: ({ focused, size, color }) => (
            <Image
              source={homeIcon}
              style={[
                styles.tabBarIcon,
                { tintColor: focused ? 'black' : 'gray' },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Browse"
        component={Browse}
        options={{
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarIcon: ({ focused, size, color }) => (
            <Image
              source={browseIcon}
              style={[
                styles.tabBarIcon,
                { tintColor: focused ? 'black' : 'gray' },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarBadge: WishlistBadgeCount > 0 ? WishlistBadgeCount : null,
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarIcon: ({ focused, size, color }) => (
            <Image
              source={heartIcon}
              style={[
                styles.tabBarIcon,
                { tintColor: focused ? 'black' : 'gray' },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarBadge: cartBadgeCount > 0 ? cartBadgeCount : null,
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarIcon: ({ focused, size, color }) => (
            <Image
              source={cartIcon}
              style={[
                styles.tabBarIcon,
                { tintColor: focused ? 'black' : 'gray' },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarIcon: ({ focused, size, color }) => (
            <Image
              source={profileIcon}
              style={[
                styles.tabBarIcon,
                { tintColor: focused ? 'black' : 'gray' },
              ]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  tabBarIcon: {
    height: 24,
    width: 24,
  },
});
