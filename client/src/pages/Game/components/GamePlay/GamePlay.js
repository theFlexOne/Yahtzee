import "./gamePlay.css";
import Dice from "../Dice/Dice";
import GameControls from "../GameControls/GameControls";
import Scoresheet from "../Scoresheet/Scoresheet";
import YahtzeeButton from "../../../../components/YahtzeeButton/YahtzeeButton";
import { useRef, useState } from "react";
import usePlayers from "../../../../hooks/usePlayers";
import { useDice } from "../../../../context/DiceContext";
import { MAX_NUMBER_OF_ROLLS_PER_TURN } from "../../../../system/constants/gameConstants";
import { calculateScoringOptionPointsFromDiceValues } from "../../../../helpers/scoringHelpers";

const GamePlay = ({ players }) => {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [takenScoringOptionId, setTakenScoringOptionId] = useState(null);

  const [dice, { rollDice, resetDice }] = useDice();
  const rollCount = useRef(0);
  const isRollable = rollCount.current < MAX_NUMBER_OF_ROLLS_PER_TURN;

  const { state: playersState, actions } = usePlayers(players);

  console.log("playersState", playersState);

  const currentPlayer = playersState[currentPlayerIndex];

  console.log("currentPlayer", currentPlayer);

  const endCurrentPlayersTurn = () => {
    rollCount.current = 0;
    const nextPlayerIndex =
      currentPlayerIndex < players.length - 1 ? currentPlayerIndex + 1 : 0;
    setCurrentPlayerIndex(nextPlayerIndex);
    setTakenScoringOptionId(null);
    resetDice();
  };

  const handleRollButtonClick = () => {
    if (!isRollable) return;
    rollCount.current = rollCount.current + 1;
    setTakenScoringOptionId(null);
    rollDice();
  };

  const handleTakeScoreButtonClick = () => {
    endCurrentPlayersTurn();
  };

  const handleScoringOptionClick = (scoringOptionId) => {
    if (rollCount.current === 0) return;
    const scoringOption = currentPlayer.scoresheet.find(
      (opt) => opt.id === scoringOptionId
    );
    const isLockedCell =
      scoringOption.value >= 0 && takenScoringOptionId !== scoringOptionId;
    if (isLockedCell) return;
    if (takenScoringOptionId === scoringOptionId) {
      setTakenScoringOptionId(null);
      actions.updateCurrentPlayersScoresheet(
        scoringOptionId,
        currentPlayerIndex
      );
      return;
    }
    const scoreValue = calculateScoringOptionPointsFromDiceValues(
      scoringOptionId,
      dice.diceValues
    );
    takenScoringOptionId &&
      actions.updateCurrentPlayersScoresheet(
        takenScoringOptionId,
        currentPlayerIndex,
        undefined
      );
    actions.updateCurrentPlayersScoresheet(
      scoringOptionId,
      currentPlayerIndex,
      scoreValue
    );
    setTakenScoringOptionId(scoringOptionId);
  };
  return (
    <div className="game-play">
      <Dice />
      <div className="game-controls">
        <YahtzeeButton
          className="roll-btn"
          disabled={!isRollable || takenScoringOptionId}
          onClick={handleRollButtonClick}
        >
          ROLL!
        </YahtzeeButton>
        <YahtzeeButton
          className="take-score-btn"
          disabled={!takenScoringOptionId}
          onClick={handleTakeScoreButtonClick}
        >
          TAKE SCORE
        </YahtzeeButton>
      </div>
      <Scoresheet
        player={currentPlayer}
        onScoringOptionClick={handleScoringOptionClick}
        rollCount={rollCount}
      />
    </div>
  );
};

export default GamePlay;
