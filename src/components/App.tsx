import userData from "../data/userData.json";
import friends from "../data/friends.json";
import transactionsData from "../data/transactions.json";

import FriendList from "./FriendList/FriendList";
import Profile from "./Profile/Profile";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import { checkData } from "../utils";
import { Transaction } from "./TransactionHistory/TransactionHistory.types";
import { User } from "./Profile/Profile.types";
import { Friend } from "./FriendList/FriendList.types";

export default function App() {
  const transactions: Transaction[] = checkData(transactionsData);

  return (
    <>
      <Profile userData={userData as User} />
      <FriendList friends={friends as Friend[]} />
      <TransactionHistory items={transactions} />
    </>
  );
}
