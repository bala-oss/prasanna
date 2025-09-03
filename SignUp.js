import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AuthForms.css'; // Custom CSS for Auth Forms

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/signup', { username, email, password });
      setMessage(response.data.message);
      navigate('/login');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="auth-card">
      <h2 className="auth-title">Sign Up</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-input"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-input"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-input"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
              </div>
              <button type="submit" className="auth-button success">Sign Up</button>
        {message && <p className="auth-message info">{message}</p>}
      </form>
    </div>
  );
};

export default Signup;
