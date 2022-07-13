import "./form.css";

const Form = ({ children, ...otherProps }) => {
  return (
    <div className="form-container">
      <form {...otherProps}>{children}</form>
    </div>
  );
};

export default Form;
