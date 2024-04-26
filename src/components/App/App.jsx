import Profile from '../Profile/Profile';
import userData from '../../json/userData.json';
import FriendList from '../FriendList/FriendList';
import friends from '../../json/friendList.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../../json/transactions.json';
import css from './App.module.css';

const App = () => {
    return (
    <div className={css.container}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
        />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
    </div>
  );
}
export default App;