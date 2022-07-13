import { useState } from "react";
import { useNavigate } from "react-router";
import { useUser } from "../../context/UserContext";
import "./login.css";
import Form from "../../components/Form/Form";
import YahtzeeButton from "../../components/YahtzeeButton/YahtzeeButton";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { setCurrentUser } = useUser().actions;

  const loginUser = async () => {
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

  const validateInputValues = () => {
    return [username, password].every((val) => val.length > 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateInputValues())
      return console.warn("Input fields cannot be empty");
    loginUser();
  };

  return (
    <div className="login">
      <Form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="usernameInput">Username:</label>
          <input
            id="usernameInput"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="passwordInput">Password:</label>
          <input
            id="passwordInput"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <YahtzeeButton data-styling="secondary" type="submit">
          Submit
        </YahtzeeButton>
      </Form>
    </div>
  );
};

export default Login;
