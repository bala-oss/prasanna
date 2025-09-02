import React, { useState } from 'react';

const AuthForm = ({ isLogin, onToggle, onSubmit, message }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <div className="form-container">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <p onClick={onToggle} className="toggle-link">
        {isLogin ? 'Need to register?' : 'Already have an account?'}
      </p>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default AuthForm;
            
