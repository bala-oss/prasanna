import React, { useState } from 'react';
import axios from 'axios';
import AuthForm from './components/AuthForm';
import './App.css';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState('');

  const handleAuth = async (username, password) => {
    try {
      const endpoint = isLogin ? 'http://localhost:5000/api/auth/login' : 'http://localhost:5000/api/auth/register';
      const res = await axios.post(endpoint, { username, password });
      
      if (isLogin) {
        localStorage.setItem('token', res.data.token);
        setMessage(`Welcome, ${res.data.username}!`);
      } else {
        setMessage(res.data.message);
      }
    } catch (err) {
      setMessage(err.response.data.error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>MERN Authentication</h1>
        <AuthForm 
          isLogin={isLogin} 
          onToggle={() => setIsLogin(!isLogin)} 
          onSubmit={handleAuth} 
          message={message}
        />
      </header>
    </div>
  );
};

export default App;
