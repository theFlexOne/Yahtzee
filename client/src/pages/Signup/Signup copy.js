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

  const UsernameInput = () => (
    <div className="input-container">
      <label htmlFor="usernameInput">Username:</label>
      <div className="input-wrapper">
        <input
          id="usernameInput"
          type="text"
          placeholder="Between 6 & 25 characters"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
    </div>
  );

  const PasswordInput = () => {
    return (
      <div className="input-container">
        <label htmlFor="passwordInput">Password:</label>
        <div className="input-wrapper">
          <input
            id="passwordInput"
            type="password"
            placeholder="Between 6 & 25 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.passwordConfirmation && (
            <span class="error-message">Passwords do not match</span>
          )}
        </div>
      </div>
    );
  };

  const PasswordConfirmationInput = () => {
    return (
      <div className="input-container">
        <label htmlFor="passwordConfirmationInput">Confirm password:</label>
        <div className="input-wrapper">
          <input
            id="passwordConfirmationInput"
            type="password"
            placeholder=""
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>
      </div>
    );
  };

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
        <UsernameInput />
        <PasswordInput />
        <PasswordConfirmationInput />
        <YahtzeeButton data-styling="secondary" type="submit">
          Submit
        </YahtzeeButton>
      </Form>
    </div>
  );
};

export default Signup;
