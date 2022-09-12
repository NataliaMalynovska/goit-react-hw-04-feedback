import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 20px;
  margin: 26px 0 26px 0;
`;

export const Button = styled.button`
  background-color: LavenderBlush;
  border: none;
  border-radius: 5px;
  width: 160px;
  height: 40px;
  cursor: pointer;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  transition: background-color 1000ms;
  :hover {
    background-color: DimGray;
    color: white;
  }
`;
