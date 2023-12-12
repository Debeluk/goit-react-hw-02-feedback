import React from 'react';
import './Friends.css';
import FriendsItem from './FriendsItem'

function FriendList({ friends }) {
    return (
      <ul className="friend-list">
        {friends.map(friend => (
          <FriendsItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    );
  }

  export default FriendList;