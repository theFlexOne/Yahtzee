import { useNavigate } from "react-router";
import { useUser } from "../../context/UserContext";
import YahtzeeButton from "../../components/YahtzeeButton/YahtzeeButton";
import { useFormik } from "formik";
import Form from "../../components/Form/Form";
import "./signup.css";
import { useState } from "react";

const initialValues = {
  username: "",
  password: "",
  passwordConfirmation: "",
};

const validate = (values) => {
  const errors = {};
  if (values.username.length < 7)
    errors.username = "Username must be at least 7 characters";
  if (values.password.length < 7)
    errors.password = "Password must be at least 7 characters";
  if (values.password !== values.passwordConfirmation)
    errors.passwordConfirmation = "Passwords must match";
  return errors;
};

const Signup = () => {
  const [backendErrors, setBackendErrors] = useState({});
  const {
    user,
    actions: { setCurrentUser },
  } = useUser();

  const onSubmit = (values) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    const createUser = async () => {
      const res = await fetch("/users", options);
      const data = await res.json();
      if (data.error) return setBackendErrors(data.error);
      setCurrentUser(data);
    };
    createUser();
  };

  const formik = useFormik({ initialValues, onSubmit, validate });

  const navigate = useNavigate();

  if (user) return navigate("/");

  return (
    <div className="signup">
      <Form id="signupForm" onSubmit={formik.handleSubmit}>
        <div className="input-container">
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="create a unique username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.errors.username && formik.touched.username && (
            <div className="input-error">{formik.errors.username}</div>
          )}
          {backendErrors.username && (
            <div className="input-error">username {backendErrors.username}</div>
          )}
        </div>
        <div className="input-container">
          <div className="input-wrapper">
            <label htmlFor="username">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="must be at least 7 characters"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.errors.password && formik.touched.password && (
            <div className="input-error">{formik.errors.password}</div>
          )}
        </div>
        <div className="input-container">
          <div className="input-wrapper">
            <label htmlFor="username">Re-enter Password</label>
            <input
              type="password"
              id="passwordConfirmation"
              name="passwordConfirmation"
              placeholder="confirm password"
              value={formik.values.passwordConfirmation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.errors.passwordConfirmation &&
            formik.touched.passwordConfirmation && (
              <div className="input-error">
                {formik.errors.passwordConfirmation}
              </div>
            )}
        </div>
        <YahtzeeButton data-styling="secondary">Submit</YahtzeeButton>
      </Form>
    </div>
  );
};

export default Signup;
