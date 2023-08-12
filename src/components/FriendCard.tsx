import React from 'react';

const FriendCard = ({ friend }: any) => {
  return (
    <div className="friend-card">
      <h2>{friend.name}</h2>
      <p>{friend.post}</p>
    </div>
  );
};

export default FriendCard;
