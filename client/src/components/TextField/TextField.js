import { v4 as uuidv4 } from "uuid";
import "./textField.css";

const ErrorMessage = ({ children, ...props }) => {
  return (
    <div className="error-message-wrapper">
      <p className="error-message" {...props}>
        {children}
      </p>
    </div>
  );
};

const TextField = ({
  label,
  value,
  handleChange,
  errorMessage,
  type,
  id,
  ...other
}) => {
  id ||= uuidv4();

  if (type === "textarea")
    return (
      <div className="input-container">
        <label>
          {label && <h5>{label}</h5>}
          <textarea cols="30" rows="5" {...other} />
        </label>
      </div>
    );

  return (
    <div className="input-container">
      <label>
        {label && <h5>{label}</h5>}
        <input
          className="text-field"
          type={type || "text"}
          value={value}
          onChange={handleChange}
          {...other}
        />
      </label>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default TextField;
