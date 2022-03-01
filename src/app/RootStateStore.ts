import { configureStore } from '@reduxjs/toolkit';

import inventoryReducer from '../features/BaseCamp/Inventory/inventorySlice';
import questLoopReducer from '../features/Quest/questLoopSlice';

const store = configureStore({
    reducer: {
        inventory: inventoryReducer,
        quest: questLoopReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;