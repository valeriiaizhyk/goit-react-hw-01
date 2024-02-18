import {Profile} from '../Profile/Profile.jsx';
import {FriendList} from '../FriendList/FriendList.jsx';
import {TransactionHistory} from '../TransctionHistory/TransctionHistory.jsx';
import userData from '../../userData.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';

export const App = () => {
  return(
    <>
    <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

