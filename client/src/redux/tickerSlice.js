import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tickers: [],
};

const tickerSlice = createSlice({
  name: 'tickers',
  initialState,
  reducers: {
    setTickers: (state, { payload }) => {
      state.tickers = payload;
    },
  },
});

export const { setTickers } = tickerSlice.actions;
export default tickerSlice;
