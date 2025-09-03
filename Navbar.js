import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Custom CSS for Navbar

const Navbar = ({ isAuthenticated, handleLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-brand" to="/">My App</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          {!isAuthenticated ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Signup</Link>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <Link className="nav-link" to="/logout" onClick={handleLogout}>Logout</Link>
            </li>
          )}
  </ul>
      </div>
    </nav>
  );
};

export default Navbar;
