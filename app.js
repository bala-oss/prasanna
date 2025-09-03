import React, { useState } from "react";
import Head from "./componets/head";
import Body from "./componets/body";

function App() {
  const [user, setUser] = useState(null);
  const [view, setView] = useState("home"); // home | login | signup
  const [registeredUsers, setRegisteredUsers] = useState([]); // New state to store registered usernames

  return (
    <div>
      <Head user={user} setView={setView} setUser={setUser} />
      <Body
        user={user}
        setUser={setUser}
        view={view}
        setView={setView}
        registeredUsers={registeredUsers} // Pass registeredUsers to Body
        setRegisteredUsers={setRegisteredUsers} // Pass setRegisteredUsers to Body
      />
      <footer style={{ textAlign: "center", marginTop: 40, padding: 20, background: "#eee", color: "#333", borderTop: "1px solid #ddd" }}>
        &copy; 2025 Your Company
      </footer>
    </div>
  );
}

export default App;
