
import './App.css';
import React, { useState } from 'react';
import UserForm from './Components/UserForm/index';
import UserDetails from './Components/UserDetails/index';

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUserData = async (username) => {
    setLoading(true);
    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      const userData = await userResponse.json();

      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      const reposData = await reposResponse.json();

      const formattedUserData = {
        avatar_url: userData.avatar_url,
        name: userData.name,
        location: userData.location,
        bio: userData.bio,
        repositories: reposData.map((repo) => ({ id: repo.id, name: repo.name })),
      };

      setUserData(formattedUserData);
      setLoading(false);
    } catch (error) {
      setError('Greška prilikom dohvaćanja podataka. Pokušajte ponovo.');
      setLoading(false);
    }
  };

  const handleReset = () => {
    setUserData(null);
    setError(null);
  };

  return (
    <div className="App">
      {loading && <p className='ucitavanje'>Učitavanje...</p>}
      {error && <p className='ucitavanje'>{error}</p>}
      {!userData ? (
        <UserForm onSubmit={handleUserData} />
      ) : (
        <UserDetails userData={userData} onReset={handleReset} />
      )}
    </div>
  );
}

export default App;
