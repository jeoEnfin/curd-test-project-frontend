import React, { useState } from 'react';
import axios from 'axios';

function AuthDetails() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault()
 
    try {
      const response = await axios.post('http://localhost:4000/login', {
        username,
        password,
      });
      console.log(response.data.accessToken);
      const token = response.data.accessToken;
      localStorage.setItem('token', token);
      window.location.href = '/';
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
    <div className="login-container">
    <h2>Login</h2>
    <form onSubmit={handleLogin}>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  </div>
  </div>
  );
}

export default AuthDetails;
