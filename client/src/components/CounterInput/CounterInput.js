import "./counterInput.css";
import { useState } from "react";

const CounterInput = ({ playersQuantityRef }) => {
  const [counterValue, setCounterValue] = useState(1);

  const updatePlayersQuantityRef = (quantity) => {
    playersQuantityRef.current = quantity;
  };

  const decrementCounter = () => {
    if (counterValue === 1) return;
    const newValue = counterValue - 1;
    updatePlayersQuantityRef(newValue);
    setCounterValue(newValue);
  };
  const incrementCounter = () => {
    if (counterValue === 4) return;
    const newValue = counterValue + 1;
    updatePlayersQuantityRef(newValue);
    setCounterValue(newValue);
  };
  return (
    <div className="input-container">
      <button type="button" id="decrementButton" onClick={decrementCounter}>
        <span className="material-symbols-outlined">remove</span>
      </button>
      <input
        type="number"
        name="counterInput"
        id="counterInput"
        min="1"
        max="4"
        value={counterValue}
        onChange={(e) => setCounterValue(e.target.value)}
        readOnly
        tabIndex="-1"
      />
      <button type="button" id="incrementButton" onClick={incrementCounter}>
        <span className="material-symbols-outlined">add</span>
      </button>
    </div>
  );
};

export default CounterInput;
