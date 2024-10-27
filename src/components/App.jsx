import Profile from "../components/Profile/Profile";
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";
import FriendList from "./FriendList/FriendList";
import s from "../components/App.module.css";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
console.log(userData);
console.log(friends);
const App = () => {
  return (
    <div className={s.box}>
      <Profile user={userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
