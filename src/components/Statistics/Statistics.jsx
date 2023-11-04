import PropTypes from 'prop-types';
import {
  Item,
  List,
  Container,
  Title,
  Span,
} from '../Statistics/Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <Container className="statistics">
      {title && <Title>{title}</Title>}
      {/* <h2 className="title">{title}</h2> */}
      {stats.map(({ id, label, percentage }) => (
        <List key={id}>
          <Item>
            <Span>{label}</Span>
            <span>{percentage}%</span>
          </Item>
        </List>
      ))}
    </Container>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,

  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
