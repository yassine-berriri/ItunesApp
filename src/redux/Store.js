// store.js
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './Slice';

export const store = configureStore({
    reducer: {
        data: dataReducer
    }
});

export default store;
