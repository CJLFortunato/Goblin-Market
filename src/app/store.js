import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { allItemsReducer } from '../features/Inventory/inventorySlice.js';
import { searchTermReducer } from '../features/SearchBar/searchBarSlice.js'

export const store = configureStore({
  reducer: {
    inventory: allItemsReducer,
    searchTerm: searchTermReducer 
  },
});
