import "./form.css";

const Form = ({ children, className, ...otherProps }) => {
  return (
    <div className={className + " form-container"}>
      <form {...otherProps}>{children}</form>
    </div>
  );
};

export default Form;
