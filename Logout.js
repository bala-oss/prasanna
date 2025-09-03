import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ handleLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    handleLogout(); // Clear token and update auth state in App.js
    navigate('/login'); // Redirect to login page
  }, [handleLogout, navigate]);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
};

export default Logout;
