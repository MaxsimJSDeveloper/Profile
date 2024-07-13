import css from "./TransactionHistory.module.css";
import { TransactionHistoryProps } from "./TransactionHistory.types";

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ items }) => {
  return (
    <table className={css.transactionsTable}>
      <thead className={css.transactionsName}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((transaction) => (
          <tr className={css.transactionsInfo} key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
