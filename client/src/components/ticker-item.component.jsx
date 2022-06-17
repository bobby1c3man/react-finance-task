import {
  ParentContainer,
  TickerContainer,
  TitleSmall,
  TitleLarge,
  TickerItemsList,
} from './ticker-item.styles';

const result = (ticker) => {
  switch (ticker) {
    case 'AAPL':
      return 'Apple';
    case 'GOOGL':
      return 'Google';
    case 'MSFT':
      return 'Microsoft';
    case 'AMZN':
      return 'Amazon';
    case 'FB':
      return 'Facebook';
    case 'TSLA':
      return 'Tesla';
    default:
      return '';
  }
};

const TickerItem = ({ tickers }) => {
  return (
    <ParentContainer>
      {tickers.map((props, id) => {
        return (
          <TickerContainer key={id}>
            <TitleSmall>{props.ticker} </TitleSmall>
            <TitleLarge> {result(props.ticker)} </TitleLarge>
            <TickerItemsList>Exchange: {props.exchange} </TickerItemsList>
            <TickerItemsList>Price: {props.price}$</TickerItemsList>
            <TickerItemsList>Change %: {props.change_percent}</TickerItemsList>
            <TickerItemsList>Dividend: {props.dividend}%</TickerItemsList>
            <TickerItemsList>Dividend Yield: {props.yield}%</TickerItemsList>
            <TickerItemsList>Last trade time: {props.last_trade_time}</TickerItemsList>
          </TickerContainer>
        );
      })}
    </ParentContainer>
  );
};

export default TickerItem;
