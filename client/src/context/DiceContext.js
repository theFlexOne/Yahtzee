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
const setupRollingAnimations = async (ref) => {};

const DiceProvider = ({ children }) => {
  const [diceStates, setDiceStates] = useState(buildNewDiceStates());
  const diceRef = useRef();

  const generateNewDiceState = () => {
    const newDiceStates = diceStates.map((dieState) => {
      if (!dieState.isFree) return dieState;
      const newValue = randomNumberBetween(1, 6);
      return { ...dieState, value: newValue };
    });
    setDiceStates(newDiceStates);
  };

  const rollDice = (rollCount) => {
    if (rollCount === 1) return generateNewDiceState();
    const svgs = [...diceRef.current.getElementsByTagName("svg")];
    console.log("svgs", svgs);
    svgs.forEach((svg) => {
      if (svg.classList.contains("held")) return;
      svg.addEventListener("animationend", () => {
        svg.style.animation = "";
        generateNewDiceState();
        svg.removeEventListener("animationend", () => {});
      });
      svg.style.animation = "die-roll 700ms";
    });
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
