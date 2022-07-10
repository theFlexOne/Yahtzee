import "./dice.css";
import Die from "../Die/Die";
import { useDice } from "../../../../context/DiceContext";

const Dice = () => {
  const [{ diceStates }, { toggleDieFreedom }] = useDice();

  return (
    <div className="game-dice">
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
