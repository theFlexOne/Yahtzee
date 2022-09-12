import "./form.css";

const Form = ({ children, className, ...otherProps }) => {
  return (
    <div className={"form-container" + (className ? ` ${className}` : "")}>
      <form {...otherProps}>{children}</form>
    </div>
  );
};

export default Form;
