import React from "react";

function Head({ user, setView, setUser }) {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 20, background: "#282c34", color: "#fff" }}>
      <h2>My React App</h2>
      <nav>
        {user ? (
          <>
            <span style={{ marginRight: 15 }}>Welcome, {user}!</span>
            <button
              onClick={() => {
                setUser(null);
                setView("home");
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setView("login")} style={{ marginRight: 10 }}>Login</button>
            <button onClick={() => setView("signup")}>Signup</button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Head;
