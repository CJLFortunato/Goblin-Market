import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../features/CategoriesMenu/categoriesMenuSlice';
import { allItemsReducer } from '../features/Inventory/inventorySlice.js';
import { searchTermReducer } from '../features/SearchBar/searchBarSlice.js'
import { cartReducer } from '../features/Cart/cartSlice';

export const store = configureStore({
  reducer: {
    inventory: allItemsReducer,
    searchTerm: searchTermReducer,
    categories: categoriesReducer ,
    cart: cartReducer
  },
});
