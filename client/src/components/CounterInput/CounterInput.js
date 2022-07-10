import "./counterInput.css";
import { useState } from "react";

const CounterInput = () => {
  const [counterValue, setCounterValue] = useState(1);
  const decrementCounter = () => {
    if (counterValue === 1) return;
    setCounterValue(() => counterValue - 1);
  };
  const incrementCounter = () => {
    if (counterValue === 4) return;
    setCounterValue(() => counterValue + 1);
  };
  return (
    <div className="input-container">
      <button type="button" id="decrement" onClick={decrementCounter}>
        <span class="material-symbols-outlined">remove</span>
      </button>
      <input
        type="number"
        name="counterInput"
        id="counterInput"
        min="1"
        max="4"
        value={counterValue}
        readonly
        tabIndex="-1"
      />
      <button type="button" id="increment" onClick={incrementCounter}>
        <span class="material-symbols-outlined">add</span>
      </button>
    </div>
  );
};

export default CounterInput;
