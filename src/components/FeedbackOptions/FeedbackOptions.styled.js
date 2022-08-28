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
  :hover {
    background-color: DimGray;
    color: white;
  }
`;
