import "./dice.css";
import Die from "../Die/Die";
import { useDice } from "../../../../context/DiceContext";
import { useRef } from "react";

const Dice = () => {
  const [{ diceStates }, { toggleDieFreedom }, diceRef] = useDice();

  return (
    <div className="game-dice" ref={diceRef}>
      {diceStates.map((die) => (
        <Die
          className="game-die"
          key={die.id}
          dieState={die}
          toggleDieFreedom={toggleDieFreedom(die.id)}
        />
      ))}
    </div>
  );
};

export default Dice;
