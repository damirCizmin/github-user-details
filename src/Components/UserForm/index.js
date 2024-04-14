// UserForm.js
import React, { useState } from 'react';

function UserForm({ onSubmit }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username);
  };

  return (
    <div className='input_wrapper'>
<p>Upišite GitHub username:</p>
    <form onSubmit={handleSubmit}>
      <input className='input'
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="npr. facebook"
      />
      <button className='submit' type="submit">Preuzmi</button>
    </form>

    </div>
  );
}

export default UserForm;
