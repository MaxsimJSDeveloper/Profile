import userData from "../data/userData.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";

import FriendList from "./FriendList/FriendList";
import Profile from "./Profile/Profile";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <>
      <Profile userData={userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
