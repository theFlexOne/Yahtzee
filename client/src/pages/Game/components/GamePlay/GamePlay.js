import "./gamePlay.css";
import Dice from "../Dice/Dice";
import Scoresheet from "../Scoresheet/Scoresheet";
import YahtzeeButton from "../../../../components/YahtzeeButton/YahtzeeButton";
import { useRef, useState } from "react";
import usePlayers from "../../../../hooks/usePlayers";
import { useDice } from "../../../../context/DiceContext";
import { calculateScoringOptionPointsFromDiceValues } from "../../../../helpers/scoringHelpers";
import { useNavigate } from "react-router";
import useGameRecord from "../../../../hooks/useGameRecord";
import { MAX_NUMBER_OF_ROLLS_PER_TURN } from "../../../../constants/constants";

const GamePlay = ({ activePlayers }) => {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [takenScoringOptionId, setTakenScoringOptionId] = useState(null);

  const [dice, { rollDice, resetDice }] = useDice();
  const turnCount = useRef(1);
  const rollCount = useRef(0);
  const isRollable = rollCount.current < MAX_NUMBER_OF_ROLLS_PER_TURN;

  const { state: playersState, actions } = usePlayers(activePlayers);

  const navigate = useNavigate();

  const { recordRoll, endGame, endTurn } = useGameRecord();

  const currentPlayer = playersState[currentPlayerIndex];

  const isCompleteGame = playersState.every((p) =>
    p.scoresheet.every((opt) => opt.isLocked)
  );

  const endCurrentPlayersTurn = () => {
    const scoringOption = currentPlayer.scoresheet.find(
      (opt) => opt.id === takenScoringOptionId
    );
    const scoringOptionForRecord = {
      value: scoringOption.value,
      id: scoringOption.id,
    };
    const nextPlayerIndex =
      currentPlayerIndex < activePlayers.length - 1
        ? currentPlayerIndex + 1
        : 0;
    rollCount.current = 0;
    turnCount.current++;
    setCurrentPlayerIndex(nextPlayerIndex);
    setTakenScoringOptionId(null);
    endTurn(dice.diceStates, scoringOptionForRecord);
    resetDice();
  };

  const handleRollButtonClick = () => {
    if (!isRollable) return;
    if (rollCount.current !== 0) recordRoll({ ...dice.diceStates });
    rollCount.current++;
    setTakenScoringOptionId(null);
    rollDice(rollCount.current);
  };

  const handleTakeScoreButtonClick = () => {
    actions.lockPlayerScoringOption(takenScoringOptionId, currentPlayerIndex);
    endCurrentPlayersTurn();
  };

  const handleScoringOptionClick = (scoringOptionId, e) => {
    const scoringOption = currentPlayer.scoresheet.find(
      (opt) => opt.id === scoringOptionId
    );
    if (e.ctrlKey) return console.log("scoringOption", scoringOption); // development usage for current snapshot of scoring option
    if (rollCount.current === 0 || scoringOption.isLocked) return;
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
  const handleEndGame = () => {
    endGame();
    navigate("/");
  };

  return isCompleteGame ? (
    <div className="complete-game">
      <div className="cards">
        {playersState.map((p, i) => {
          return (
            <div key={i} className="card">
              <p>Player: {p.name}</p>
              <p>Upper Total: {p.upperTotal}</p>
              <p>Lower Total: {p.lowerTotal}</p>
              <p>Grand Total: {p.grandTotal}</p>
            </div>
          );
        })}
      </div>
      {playersState.length > 1 && (
        <div className="winner">
          <p>Congratulations, {actions.getWinningPlayer().name}!</p>
          <p>
            You've won with a grand total of{" "}
            {actions.getWinningPlayer().grandTotal}
          </p>
        </div>
      )}
      <div className="play-again-prompt">
        <p>Thanks for playing!</p>
        <YahtzeeButton onClick={handleEndGame}>Continue</YahtzeeButton>
      </div>
    </div>
  ) : (
    <div className="game-play">
      <Dice />
      <div className="game-controls">
        <YahtzeeButton
          className="roll-btn"
          disabled={!isRollable && !takenScoringOptionId}
          onClick={
            takenScoringOptionId
              ? handleTakeScoreButtonClick
              : handleRollButtonClick
          }
          data-styling={takenScoringOptionId ? "secondary" : ""}
        >
          {takenScoringOptionId || !isRollable ? "TAKE SCORE" : "ROLL!"}
        </YahtzeeButton>
      </div>
      <Scoresheet
        player={currentPlayer}
        onScoringOptionClick={handleScoringOptionClick}
        rollCount={rollCount}
        takenScoringOptionId={takenScoringOptionId}
      />
    </div>
  );
};

export default GamePlay;
