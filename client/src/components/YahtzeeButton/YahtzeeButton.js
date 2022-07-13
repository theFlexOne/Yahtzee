import "./yahtzeeButton.css";

const YahtzeeButton = ({ children, ...otherProps }) => {
  return (
    <button className="yahtzee-button" {...otherProps}>
      {children}
    </button>
  );
};

export default YahtzeeButton;
