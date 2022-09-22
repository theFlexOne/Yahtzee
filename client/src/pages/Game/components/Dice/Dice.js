import "./dice.css";
import Die from "../Die/Die";
import { useDice } from "../../../../context/DiceContext";

const Dice = () => {
  const [{ diceStates }, { toggleDieFreedom }, diceRef] = useDice();

  return (
    <div className="game-dice" ref={diceRef}>
      {diceStates.map((die) => {
        return (
          <Die
            className="game-die"
            key={die.position}
            dieState={die}
            toggleDieFreedom={toggleDieFreedom(die.position)}
          />
        );
      })}
    </div>
  );
};

export default Dice;
