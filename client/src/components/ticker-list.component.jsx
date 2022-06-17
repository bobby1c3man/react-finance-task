import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { io } from 'socket.io-client';
import { setTickers } from '../redux/tickerSlice';
import { tickerSelector } from '../redux/tickerSelector';

import TickerItem from './ticker-item.component';

const socket = io('http://localhost:4000');

const TickerList = () => {
  const tickers = useSelector(tickerSelector.getTickers);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.emit('start');
    socket.on('ticker', (data) => {
      dispatch(setTickers(data));
    });
  }, [dispatch]);

  return <TickerItem tickers={tickers} />;
};

export default TickerList;
