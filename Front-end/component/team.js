import React from 'react';

const Team = ({ selectedUsers }) => {
  return (
    <div className="team">
      <h2>Team Details</h2>
      <ul>
        {selectedUsers.map((user) => (
          <li key={user.id}>
            <p>{user.name}</p>
            <p>Domain: {user.domain}</p>
            <p>Availability: {user.availability}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
