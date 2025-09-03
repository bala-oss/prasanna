
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import './App.css'; // We'll put our custom CSS here

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <div className="main-content"> {/* Custom class for main content area */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout handleLogout={handleLogout} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```

**2. `src/components/Navbar.js`**

```javascript
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
