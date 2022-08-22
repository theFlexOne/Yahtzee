import "./yahtzeeButton.css";

const YahtzeeButton = ({ children, className, ...otherProps }) => {
  return (
    <button className={`yahtzee-button ${className}`} {...otherProps}>
      {children}
    </button>
  );
};

export default YahtzeeButton;
