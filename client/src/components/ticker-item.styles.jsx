import styled from 'styled-components';

export const ParentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border: solid black 2px;
  border-radius: 30px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f8f4f4;
  }
`;

export const TitleSmall = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid black;
  background-color: darkgreen;
  color: white;
  width: 80px;
  font-size: 19px;
  margin: 10px;
`;

export const TitleLarge = styled.h1`
  font-size: 30px;
  margin: 10px;
`;

export const TickerItemsList = styled.h2`
  display: flex;
  justify-content: space-around;  
  font-size: 20px;
  margin: 15px;
  font-weight: 500;
  border-radius: 7px;
  background-color: #44efe9;
  border: 3px solid grey;
  border-radius: 5px;
  padding: 20px;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;

  &:hover {
    transform: scale(1.05);
`;
