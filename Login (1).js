import { useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple login logic (fake auth)
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input type="text" placeholder="Username" required /><br />
      <input type="password" placeholder="Password" required /><br />
      <button type="submit">Login</button>
    </form>
  );
}
