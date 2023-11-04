import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0px;
  width: 100%;
`;

export const Th = styled.th`
  background-color: #f2f2f2;
  color: #333;
  border: 1px solid black;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const Td = styled.td`
  color: #333;
  font-size: 14px;
  text-align: center;
  border: 1px solid black;
  padding: 10px;
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const FirstColumn = styled(Td)`
  width: 30%;
`;

export const SecondColumn = styled(Td)`
  width: 30%;
`;
