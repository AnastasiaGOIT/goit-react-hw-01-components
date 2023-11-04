import './FriendListItem.styled';

import {
  Img,
  Item,
  SpanRed,
  Span,
} from '../FriendListItem/FriendListItem.styled';

export function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <Item key={id}>
      {isOnline ? <Span /> : <SpanRed />}
      <Img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Item>
  );
}
