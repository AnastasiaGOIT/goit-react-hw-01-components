import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  background: #f2f2f2;
  gap: 30px;
  margin-bottom: 20px;
  align-items: center;
  padding: 10px 20px 10px 20px;
`;
export const Img = styled.img`
  display: block;
  height: 48px;
`;

export const Span = styled.span`
  &::before {
    content: '•';
    color: green;
    margin-right: 20px;
    font-size: 100px;
  }
`;
export const SpanRed = styled.span`
  &::before {
    content: '•';
    color: red;
    margin-right: 20px;
    font-size: 100px;
  }
`;
