import { configureStore } from '@reduxjs/toolkit';

import inventoryReducer from '../features/BaseCamp/Inventory/inventorySlice';
import characterReducer from '../features/Globals/characterSlice';

const store = configureStore({
    reducer: {
        inventory: inventoryReducer,
        character: characterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;