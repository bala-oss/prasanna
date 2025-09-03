import React, { useState } from "react";

function Body({ user, setUser, view, setView, registeredUsers, setRegisteredUsers }) {
  const [loginName, setLoginName] = useState("");
  const [signupName, setSignupName] = useState("");
  const [loginError, setLoginError] = useState("");
  const [signupError, setSignupError] = useState("");

  const formContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "60vh",
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 8,
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    margin: "20px auto",
    maxWidth: 400,
  };

  const inputStyle = {
    marginBottom: 15,
    padding: 10,
    width: "80%",
    borderRadius: 4,
    border: "1px solid #ccc",
    fontSize: 16,
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: 5,
    border: "none",
    cursor: "pointer",
    fontSize: 16,
  };

  const primaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#007bff",
    color: "white",
    "&:hover": {
      backgroundColor: "#0056b3",
    },
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#6c757d",
    color: "white",
    "&:hover": {
      backgroundColor: "#5a6268",
    },
  };

  const errorStyle = {
    color: "red",
    marginBottom: 10,
    fontSize: 14,
  };

  const handleLogin = () => {
    setLoginError(""); // Clear previous errors
    if (registeredUsers.includes(loginName)) {
      setUser(loginName);
      setView("home");
      setLoginName(""); // Clear input
    } else {
      setLoginError("Username not found. Please sign up or try again.");
    }
  };

  const handleSignup = () => {
    setSignupError(""); // Clear previous errors
    if (registeredUsers.includes(signupName)) {
      setSignupError("This username already exists. Please choose a different one.");
    } else if (signupName.trim() === "") {
        setSignupError("Username cannot be empty.");
    }
    else {
      setRegisteredUsers([...registeredUsers, signupName]);
      setUser(signupName);
      setView("home");
      setSignupName(""); // Clear input
    }
  };

  if (view === "login") {
    return (
      <div style={formContainerStyle}>
        <h3>Login</h3>
        {loginError && <p style={errorStyle}>{loginError}</p>}
        <input
          type="text"
          placeholder="Enter username"
          value={loginName}
          onChange={e => setLoginName(e.target.value)}
          style={inputStyle}
        />
        <div>
          <button onClick={handleLogin} style={primaryButtonStyle}>
            Login
          </button>
          <button onClick={() => { setView("home"); setLoginError(""); setLoginName(""); }} style={secondaryButtonStyle}>
            Cancel
          </button>
        </div>
      </div>
    );
  }

  if (view === "signup") {
    return (
      <div style={formContainerStyle}>
        <h3>Signup</h3>
        {signupError && <p style={errorStyle}>{signupError}</p>}
        <input
          type="text"
          placeholder="Choose username"
          value={signupName}
          onChange={e => setSignupName(e.target.value)}
          style={inputStyle}
        />
        <div>
          <button onClick={handleSignup} style={primaryButtonStyle}>
            Signup
          </button>
          <button onClick={() => { setView("home"); setSignupError(""); setSignupName(""); }} style={secondaryButtonStyle}>
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <main style={{ padding: 40, textAlign: "center", backgroundColor: "#e0f7fa", minHeight: "70vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h1 style={{ color: "#2c3e50", marginBottom: 20 }}>Welcome to the Home Page</h1>
      {user && <p style={{ color: "#34495e", fontSize: 18 }}>You are logged in as <b style={{ color: "#007bff" }}>{user}</b>.</p>}
      {!user && <p style={{ color: "#34495e", fontSize: 18 }}>Please log in or sign up to continue.</p>}
       <div style={{marginTop: 30}}>
        <p style={{fontSize: 14, color: '#7f8c8d'}}>Registered Users (for demonstration): {registeredUsers.join(", ") || "None"}</p>
       </div>
    </main>
  );
}

export default Body;
