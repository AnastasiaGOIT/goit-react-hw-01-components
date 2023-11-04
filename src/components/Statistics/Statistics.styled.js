import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 11px;
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: #f2f2f2;
  width: 490px;
`;
export const Title = styled.h2`
  padding: 30px;
`;
export const Span = styled.span`
  font-size: 30px;
`;
