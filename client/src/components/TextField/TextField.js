import { v4 as uuidv4 } from "uuid";
import "./textField.css";

const TextField = ({ label, value, handleChange, type, id, ...other }) => {
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
          type={type || "text"}
          value={value}
          onChange={handleChange}
          {...other}
        />
      </label>
    </div>
  );
};

export default TextField;
