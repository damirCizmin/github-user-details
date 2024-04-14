// UserDetails.js
import React from 'react';

function UserDetails({ userData, onReset }) {
  const { avatar_url, name, location, bio, repositories } = userData;

  return (
    <div className='podatci_wrapper'>
      <div className='logo_ime'>
      <img className='avatar' src={avatar_url} alt="User Avatar" />
      <h2>{name}</h2>
      </div>
      <p><span>Location:</span> {location}</p>
      <p><span>Bio:</span> {bio}</p>
      <p><span>Repositories:</span></p>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <button className='reset' onClick={onReset}>Resetiraj</button>
    </div>
  );
}

export default UserDetails;
