import './Profile.styled.js';
import PropTypes from 'prop-types';
import {
  Img,
  Item,
  UserName,
  List,
  Container,
  SpanTitle,
  Span,
  Text,
} from '../Profile/Profile.styled';

export function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div>
      <Container>
        <Img src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <Text>{tag}</Text>
        <Text>{location}</Text>
      </Container>

      <List>
        <Item>
          <SpanTitle>Followers: </SpanTitle>
          <Span>{followers}</Span>
        </Item>
        <Item>
          <SpanTitle>Views: </SpanTitle>
          <Span>{views}</Span>
        </Item>
        <Item>
          <SpanTitle>Likes: </SpanTitle>
          <Span>{likes}</Span>
        </Item>
      </List>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.node.isRequired,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
