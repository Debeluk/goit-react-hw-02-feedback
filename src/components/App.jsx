import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json'
import FriendList from './Friends/Friends';
import transactions from '../data/transactions.json';
import Transactions from './Transactions/Transactions';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        padding: 20,
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload Stats" stats={data} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};
