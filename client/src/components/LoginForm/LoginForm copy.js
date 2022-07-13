import "./loginForm.css";
import Form from "../Form/Form";
import { useState } from "react";

const LoginForm = ({ username, password, children }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const handleFormSubmission = () => {};

  return (
    <Form>
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
      {children}
    </Form>
  );
};

export default LoginForm;
