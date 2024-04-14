// UserDetails.js
import React from 'react';

function UserDetails({ userData, onReset }) {
  const { avatar_url, name, location, bio, repositories } = userData;

  return (
    <div>
      <img src={avatar_url} alt="User Avatar" />
      <h2>{name}</h2>
      <p>Location: {location}</p>
      <p>Bio: {bio}</p>
      <h3>Repositories:</h3>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default UserDetails;
