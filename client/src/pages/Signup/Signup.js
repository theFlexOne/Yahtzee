import { useNavigate } from "react-router";
import { useUser } from "../../context/UserContext";
import YahtzeeButton from "../../components/YahtzeeButton/YahtzeeButton";
import { useFormik } from "formik";
import Form from "../../components/Form/Form";
import "./signup.css";
import { useState } from "react";
import TextField from "../../components/TextField/TextField";
import {
  PIN_VALIDATION_REGEX,
  USERNAME_MAX_LENGTH,
} from "../../constants/constants";

const initialValues = {
  username: "",
  PIN: "",
  PINConfirmation: "",
};

const validate = (values) => {
  const errors = {};
  if (values.username.length < 5)
    errors.username = "Username must be at least 5 characters";
  if (values.PIN.length !== 4)
    errors.PIN = "Can only contain numbers and must be 4 digits long.";
  if (values.PIN !== values.PINConfirmation)
    errors.PINConfirmation = "PINs must match";
  return errors;
};

const onSubmit = (setBackendErrors, setCurrentUser) => (values) => {
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

const Signup = () => {
  const [backendErrors, setBackendErrors] = useState({});
  const {
    user,
    actions: { setCurrentUser },
  } = useUser();

  const formik = useFormik({
    initialValues,
    onSubmit: onSubmit(setBackendErrors, setCurrentUser),
    validate,
  });

  const handlePINChange = (e) => {
    const { value } = e.target;
    PIN_VALIDATION_REGEX.test(value) && formik.handleChange(e);
  };

  const navigate = useNavigate();

  if (user) return navigate("/");

  return (
    <div className="signup">
      <Form id="signupForm" onSubmit={formik.handleSubmit}>
        <TextField
          name="username"
          label="Username:"
          placeholder="username"
          errorMessage={formik.errors.username}
          maxLength={USERNAME_MAX_LENGTH}
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        <TextField
          name="PIN"
          label="Create a 4 digit PIN:"
          placeholder="PIN"
          errorMessage={formik.errors.PIN}
          type="password"
          value={formik.values.PIN}
          onChange={handlePINChange}
          onBlur={formik.handleBlur}
        />
        <TextField
          name="PINConfirmation"
          label="Confirm PIN:"
          placeholder="PIN"
          errorMessage={formik.errors.PINConfirmation}
          type="password"
          value={formik.values.PINConfirmation}
          onChange={handlePINChange}
          onBlur={formik.handleBlur}
        />
        <YahtzeeButton data-styling="secondary">Submit</YahtzeeButton>
      </Form>
    </div>
  );
};

export default Signup;
