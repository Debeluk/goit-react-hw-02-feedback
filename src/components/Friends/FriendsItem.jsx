import React from 'react';
import './Friends.css';

function FriendsItem({ avatar, name, isOnline }) {
    return (
      <li className="friendsItem">
        <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
        <img className="friendsAvatar" src={avatar} alt={`Avatar of ${name}`} width="48" />
        <p className="name">{name}</p>
      </li>
    );
  }

  export default FriendsItem;