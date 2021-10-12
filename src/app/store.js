import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { allItemsReducer } from '../features/Inventory/inventorySlice';

export const store = configureStore({
  reducer: {
    inventory: allItemsReducer,
  },
});
