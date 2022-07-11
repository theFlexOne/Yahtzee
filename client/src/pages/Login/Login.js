import { useState } from "react";
import { useNavigate } from "react-router";
import { useUser } from "../../context/UserContext";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { setCurrentUser } = useUser().actions;

  const loginUser = async (e) => {
    e.preventDefault();
    const data = { username, password };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const res = await fetch("/login", options);
    if (!res.ok) return console.error(res);
    const user = await res.json();
    console.log(user);
    setCurrentUser(user);
    navigate("/");
  };

  return (
    <form onSubmit={loginUser}>
      <label htmlFor="usernameInput"></label>
      <input
        id="usernameInput"
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="passwordInput"></label>
      <input
        id="passwordInput"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
