import { useNavigate } from "react-router";
import { useUser } from "../../context/UserContext";
import YahtzeeButton from "../../components/YahtzeeButton/YahtzeeButton";
import "./signup.css";
import { useFormik } from "formik";
import { useEffect } from "react";
import Form from "../../components/Form/Form";

const initialValues = {
  username: "",
  password: "",
  passwordConfirmation: "",
};

const Signup = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  const formik = useFormik({ initialValues, onSubmit });

  const { user } = useUser();
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
            />
          </div>
        </div>
        <div className="input-container">
          <div className="input-wrapper">
            <label htmlFor="username">Password</label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="must be at least 7 characters"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="input-container">
          <div className="input-wrapper">
            <label htmlFor="username">Re-enter Password</label>
            <input
              type="text"
              id="passwordConfirmation"
              name="passwordConfirmation"
              placeholder="confirm password"
              value={formik.values.passwordConfirmation}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <YahtzeeButton data-styling="secondary">Submit</YahtzeeButton>
      </Form>
    </div>
  );
};

export default Signup;
