import { useState } from "react";
import { useNavigate } from "react-router";
import Form from "../../components/Form/Form";
import YahtzeeButton from "../../components/YahtzeeButton/YahtzeeButton";
import { useUser } from "../../context/UserContext";
import "./signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const { setCurrentUser } = useUser().actions;

  const signupUser = async (e) => {
    e.preventDefault();
    if (passwordConfirmation !== password)
      return setErrors({ ...errors, passwordConfirmation: true });
    const data = { username, password };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const res = await fetch("/users", options);
    if (!res.ok) return console.error(res.error);
    const user = await res.json();
    setCurrentUser(user);
    navigate("/");
  };

  return (
    <div className="signup">
      <Form onSubmit={signupUser}>
        <div className="input-container">
          <label htmlFor="usernameInput">Username:</label>
          <input
            id="usernameInput"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="passwordInput">
            Password:
            {errors.passwordConfirmation && <span>Passwords do not match</span>}
          </label>
          <input
            id="passwordInput"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="passwordConfirmationInput">Confirm password:</label>
          <input
            id="passwordConfirmationInput"
            type="password"
            placeholder="Password Confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>
        <YahtzeeButton data-styling="secondary" type="submit">
          Submit
        </YahtzeeButton>
      </Form>
    </div>
  );
};

export default Signup;
