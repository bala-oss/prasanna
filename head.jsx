import React from "react";

function Head({ user, setView, setUser }) {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    background: "#282c34",
    color: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const titleStyle = {
    margin: 0,
    fontSize: 28,
    fontWeight: "bold",
  };

  const navButtonStyle = {
    padding: "10px 15px",
    margin: "0 8px",
    borderRadius: 5,
    border: "none",
    cursor: "pointer",
    backgroundColor: "#61dafb",
    color: "#282c34",
    fontSize: 16,
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#21a1f1",
      color: "white",
    },
  };

  const welcomeTextStyle = {
    marginRight: 15,
    fontSize: 18,
    fontWeight: "normal",
    color: "#a0a0a0",
  };

  return (
    <header style={headerStyle}>
      <h2 style={titleStyle}>My React App</h2>
      <nav>
        {user ? (
          <>
            <span style={welcomeTextStyle}>Welcome, <b style={{color: '#61dafb'}}>{user}</b>!</span>
            <button
              onClick={() => {
                setUser(null);
                setView("home");
              }}
              style={navButtonStyle}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setView("login")} style={navButtonStyle}>Login</button>
            <button onClick={() => setView("signup")} style={navButtonStyle}>Signup</button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Head;
