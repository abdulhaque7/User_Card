import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Domain: {user.domain}</p>
      <p>Gender: {user.gender}</p>
      <p>Availability: {user.availability}</p>
    </div>
  );
};

export default UserCard;
