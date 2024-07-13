export interface Transaction {
  id: string;
  type: "invoice" | "payment" | "withdrawal" | "deposit";
  amount: string;
  currency: string;
}

export interface TransactionHistoryProps {
  items: Transaction[];
}
