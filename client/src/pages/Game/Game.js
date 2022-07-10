// import { useEffect, useMemo, useRef, useState } from "react";
// import { useDice } from "../../context/DiceContext";
// import usePlayers from "../../hooks/usePlayers";
// import Scoresheet from "./components/Scoresheet/Scoresheet";

import "./game.css";
import Dice from "./components/Dice/Dice";
// import { calculateScoringOptionPointsFromDiceValues } from "../../helpers/scoringHelpers";
// import { MAX_NUMBER_OF_ROLLS_PER_TURN } from "../../system/constants/gameConstants";
// import GameControls from "./components/GameControls/GameControls";
// import { useLocation } from "react-router";

const mockUserList = [
  { id: 1, name: "Red" },
  { id: 2, name: "Blue" },
];

const Game = () => {
  // const location = useLocation();
  // const [
  //   players,
  //   { updateCurrentPlayersScoresheet, calculateCurrentPlayersScores },
  // ] = usePlayers(location.state.playersQuantity);
  // const [currentPlayerId, setCurrentPlayerId] = useState(players[0].id);
  // const currentPlayer = useMemo(() => {
  //   return (
  //     players.find((p) => p.id === currentPlayerId) ||
  //     console.error(
  //       `currentPlayerId (${currentPlayerId}) could not be found in players`,
  //       players
  //     )
  //   );
  // }, [currentPlayerId, players]);

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

  // useEffect(() => {
  //   const endCurrentGame = () => {
  //     console.log(calculateCurrentPlayersScores());
  //   };
  //   const playerScoresheets = players.flatMap((p) =>
  //     p.scoresheet.map((opt) => ({ ...opt, playerId: p.id }))
  //   );
  //   if (true) endCurrentGame();
  // }, [players, calculateCurrentPlayersScores]);

  return (
    <div className="game">
      <Dice />
      {/* <GameControls
      // handleTakeScoreButtonClick={handleTakeScoreButtonClick}
      // handleRollButtonClick={handleRollButtonClick}
      // isRollable={isRollable}
      // takenScoringOptionId={takenScoringOptionId}
      /> */}
      {/* <Scoresheet
        // rollCount={rollCount.current}
        // player={currentPlayer}
        // onScoringOptionClick={handleScoringOptionClick}
        // takenScoringOptionId={takenScoringOptionId}
        // possibleScores={possibleScores}
      /> */}
    </div>
  );
};

export default Game;
