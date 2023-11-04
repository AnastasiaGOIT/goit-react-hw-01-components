import './TransactionHistory.styled';
import PropTypes from 'prop-types';
import {
  Tr,
  Table,
  Th,
  Td,
  SecondColumn,
  FirstColumn,
} from '../TransactionHistory/TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </thead>
      {items.map(({ id, type, amount, currency }) => (
        <tbody key={id}>
          <tr>
            <FirstColumn>{type}</FirstColumn>
            <SecondColumn>{amount}</SecondColumn>
            <Td>{currency}</Td>
          </tr>
        </tbody>
      ))}
    </Table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
