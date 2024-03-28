import "../styles.css";
import userData from "../data/userData.json";
import friendsData from "../data/friendsData.json";
import transactions from "../data/transactions.json";

import Profile from "./Profile/Profile";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <>
      <Profile user={userData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </>
  );
}
