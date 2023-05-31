import React, { useState } from 'react';
import LoginForm from './form';
import ListPage from './list';
const MainPage = () => {
  const [token, setToken] = useState('');

  const loggedIn = (token) => {
    setToken(token);
  };

  return (
    <div>
      {!token ? <LoginForm onLogin={loggedIn} /> : <ListPage token={token} />}
    </div>
  );
};

export default MainPage;
