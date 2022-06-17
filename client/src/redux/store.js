import { configureStore } from '@reduxjs/toolkit';
import tickerSlice from './tickerSlice';

const store = configureStore({
  reducer: tickerSlice.reducer,
});

export default store;
