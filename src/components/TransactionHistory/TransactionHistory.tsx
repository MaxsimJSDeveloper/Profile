import { cx } from "@emotion/css";
import { TransactionHistoryProps } from "./TransactionHistory.types";
import {
  transactionsInfo,
  transactionsName,
  transactionsTable,
  tableCell,
  tableRowEven,
  tableHeader,
} from "./TransactionHistory.styles";

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ items }) => {
  return (
    <table className={cx(transactionsTable)}>
      <thead className={cx(transactionsName)}>
        <tr>
          <th className={cx(tableHeader)}>Type</th>
          <th className={cx(tableHeader)}>Amount</th>
          <th className={cx(tableHeader)}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((transaction, index) => (
          <tr
            className={cx(transactionsInfo, tableRowEven)}
            key={transaction.id}
          >
            <td className={cx(tableCell)}>{transaction.type}</td>
            <td className={cx(tableCell)}>{transaction.amount}</td>
            <td className={cx(tableCell)}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
