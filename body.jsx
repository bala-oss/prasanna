import React, { useState } from "react";

function Body({ user, setUser, view, setView }) {
  const [loginName, setLoginName] = useState("");
  const [signupName, setSignupName] = useState("");

  const formContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "60vh",
  };

  if (view === "login") {
    return (
      <div style={formContainerStyle}>
        <h3>Login</h3>
        <input
          type="text"
          placeholder="Enter username"
          value={loginName}
          onChange={e => setLoginName(e.target.value)}
          style={{ marginBottom: 10, padding: 8, width: 200 }}
        />
        <div>
          <button
            onClick={() => {
              setUser(loginName);
              setView("home");
            }}
            style={{ marginRight: 10 }}
          >
            Login
          </button>
          <button onClick={() => setView("home")}>
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
        <input
          type="text"
          placeholder="Choose username"
          value={signupName}
          onChange={e => setSignupName(e.target.value)}
          style={{ marginBottom: 10, padding: 8, width: 200 }}
        />
        <div>
          <button
            onClick={() => {
              setUser(signupName);
              setView("home");
            }}
            style={{ marginRight: 10 }}
          >
            Signup
          </button>
          <button onClick={() => setView("home")}>
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <main style={{ padding: 40, textAlign: "center" }}>
      <h1>Welcome to the Home Page</h1>
      {user && <p>You are logged in as <b>{user}</b>.</p>}
    </main>
  );
}

export default Body;

