import { Transaction } from "./components/TransactionHistory/TransactionHistory.types";

export const checkData = (data: any[]): Transaction[] => {
  return data.map((item) => {
    if (
      typeof item.id === "string" &&
      (item.type === "invoice" ||
        item.type === "payment" ||
        item.type === "withdrawal" ||
        item.type === "deposit") &&
      typeof item.amount === "string" &&
      typeof item.currency === "string"
    ) {
      return item as Transaction;
    } else {
      throw new Error("Invalid transaction data");
    }
  });
};
