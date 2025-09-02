import { Link } from "react-router-dom";

export default function Navbar({ isLoggedIn }) {
  return (
    <nav style={{ padding: "10px", background: "#282c34", color: "white" }}>
      <Link to="/" style={{ margin: "10px", color: "white" }}>Home</Link>
      {!isLoggedIn && <Link to="/login" style={{ margin: "10px", color: "white" }}>Login</Link>}
      {!isLoggedIn && <Link to="/signup" style={{ margin: "10px", color: "white" }}>Signup</Link>}
      {isLoggedIn && <Link to="/logout" style={{ margin: "10px", color: "white" }}>Logout</Link>}
    </nav>
  );
          }
