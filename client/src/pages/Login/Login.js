import { useNavigate } from "react-router";
import { useUser } from "../../context/UserContext";
import "./login.css";
import Form from "../../components/Form/Form";
import YahtzeeButton from "../../components/YahtzeeButton/YahtzeeButton";
import { useFormik } from "formik";
import TextField from "../../components/TextField/TextField";

const Login = () => {
  const navigate = useNavigate();

  const { setCurrentUser } = useUser().actions;

  // const validateInputValues = () => {
  //   return [username, password].every((val) => val.length > 0);
  // };

  const validate = () => {};

  const onSubmit = async (values) => {
    // if (!validateInputValues())
    //   return console.warn("Input fields cannot be empty");
    const data = { username: values.username, password: values.password };
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

  const formik = useFormik({
    initialValues: {},
    onSubmit,
  });

  console.log("formik", formik);

  return (
    <div className="login">
      <Form onSubmit={formik.handleSubmit}>
        <TextField
          name="username"
          label="Username:"
          placeholder="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        <TextField
          name="password"
          label="Password (PIN):"
          placeholder="password (PIN)"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <YahtzeeButton data-styling="secondary" type="submit">
          Submit
        </YahtzeeButton>
      </Form>
    </div>
  );
};

export default Login;
