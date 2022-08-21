import { useState } from "react";
import { useUser } from "../../context/UserContext";
import GamePlay from "./components/GamePlay/GamePlay";
import GameSetup from "./components/GameSetup/GameSetup";
import "./game.css";

const Game = () => {
  const { user } = useUser();

  const [players, setPlayers] = useState(user ? [user.username] : []);
  const [activeUsers, setActiveUsers] = useState(user ? [user] : []);
  const [isSettingUp, setIsSettingUp] = useState(true);

  return (
    <div className="game">
      {isSettingUp ? (
        <GameSetup
          players={players}
          setPlayers={setPlayers}
          activeUsers={activeUsers}
          setActiveUsers={setActiveUsers}
          setIsSettingUp={setIsSettingUp}
        />
      ) : (
        <GamePlay players={players} />
      )}
    </div>
  );
};

export default Game;

// const [dice, { rollDice, resetDice }] = useDice();

// const rollCount = useRef(0);
// const isRollable = rollCount.current < MAX_NUMBER_OF_ROLLS_PER_TURN;

// const [takenScoringOptionId, setTakenScoringOptionId] = useState(null);

// const getNextPlayerId = () => {
//   let nextPlayerId = currentPlayerId + 1;
//   if (players.findIndex((player) => player.id === nextPlayerId) < 0)
//     nextPlayerId = players[0].id;
//   return nextPlayerId;
// };

// const endCurrentPlayersTurn = () => {
//   rollCount.current = 0;
//   setCurrentPlayerId(getNextPlayerId());
//   setTakenScoringOptionId(null);
//   resetDice();
// };

// const handleRollButtonClick = () => {
//   if (!isRollable) return;
//   rollCount.current = rollCount.current + 1;
//   setTakenScoringOptionId(null);
//   rollDice();
// };

// const handleTakeScoreButtonClick = () => {
//   endCurrentPlayersTurn();
// };

// const handleScoringOptionClick = (scoringOptionId) => {
//   if (rollCount.current === 0) return;
//   const scoringOption = currentPlayer.scoresheet.find(
//     (opt) => opt.id === scoringOptionId
//   );
//   const isLockedCell =
//     scoringOption.value >= 0 && takenScoringOptionId !== scoringOptionId;
//   if (isLockedCell) return;
//   if (takenScoringOptionId === scoringOptionId) {
//     setTakenScoringOptionId(null);
//     updateCurrentPlayersScoresheet(
//       scoringOptionId,
//       currentPlayerId,
//       undefined
//     );
//     return;
//   }
//   const scoreValue = calculateScoringOptionPointsFromDiceValues(
//     scoringOptionId,
//     dice.diceValues
//   );
//   takenScoringOptionId &&
//     updateCurrentPlayersScoresheet(
//       takenScoringOptionId,
//       currentPlayerId,
//       undefined
//     );
//   updateCurrentPlayersScoresheet(
//     scoringOptionId,
//     currentPlayerId,
//     scoreValue
//   );
//   setTakenScoringOptionId(scoringOptionId);
// };
