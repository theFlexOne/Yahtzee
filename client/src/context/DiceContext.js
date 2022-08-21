import { useContext, createContext, useState, useRef, useEffect } from "react";
import { randomNumberBetween } from "../helpers/mathHelpers";

const DiceContext = createContext();

const buildNewDie = (id) => ({ id, value: 0, isFree: true });
const buildNewDiceStates = () => {
  const newDiceBuilder = [];
  for (let i = 1; i < 5 + 1; i++) {
    newDiceBuilder.push(buildNewDie(i));
  }
  return newDiceBuilder;
};

const DiceProvider = ({ children }) => {
  const [diceStates, setDiceStates] = useState(buildNewDiceStates());
  const diceRef = useRef();

  const startRollDiceAnimation = () => {
    const dieElements = [
      ...diceRef.current.querySelectorAll(".die:not(.held)"),
    ];
    dieElements.forEach((die) => {
      console.log(die);
    });
  };

  const rollDice = () => {
    startRollDiceAnimation();
    const newDiceStates = diceStates.map((dieState) => {
      if (!dieState.isFree) return dieState;
      const newValue = randomNumberBetween(1, 6);
      return { ...dieState, value: newValue };
    });
    setDiceStates(newDiceStates);
  };

  const resetDice = () => setDiceStates(buildNewDiceStates());

  const toggleDieFreedom = (id) => () => {
    const newDiceStates = diceStates.map((dieState) => {
      if (dieState.id !== id) return dieState;
      return { ...dieState, isFree: !dieState.isFree };
    });
    setDiceStates(newDiceStates);
  };

  const states = diceStates && {
    diceStates,
    diceValues: diceStates.map((die) => die.value),
    diceFreedom: diceStates.map((die) => die.isFree),
  };
  const actions = { rollDice, resetDice, toggleDieFreedom };

  return (
    diceStates && (
      <DiceContext.Provider value={[states, actions, diceRef]}>
        {children}
      </DiceContext.Provider>
    )
  );
};

const useDice = () => {
  const ctx = useContext(DiceContext);
  if (!ctx)
    return console.error("'useDice' can only be called from within the Dice");
  return ctx;
};

// const useDie = (dieId) => {};

export { useDice, DiceProvider };
