import { v4 as uuidv4 } from "uuid";
import { useEffect, useRef, useState } from "react";

const generateInitialGameRecordState = () => ({
  turns: [],
  uuid: uuidv4(),
});

const generateInitialTurnState = () => {
  return { rolls: [], option: undefined };
};

const useGameRecord = () => {
  const gameRecordRef = useRef(generateInitialGameRecordState());
  const turnStateRef = useRef(generateInitialTurnState());

  const sendGameRecordToServer = () => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(gameRecordRef.current),
    };
    fetch("/game_records", options)
      .then((res) => console.log("success"))
      .catch(console.error);
  };

  const resetTurn = () => (turnStateRef.current = generateInitialTurnState());

  const recordRoll = (rollState) => {
    turnStateRef.current.rolls.push(rollState);
  };

  const recordTurn = ({ value, id }) => {
    turnStateRef.current.option = { value, id };
    gameRecordRef.current.turns.push(turnStateRef.current);
  };

  const endTurn = (rollState, scoringOption) => {
    recordRoll(rollState);
    recordTurn(scoringOption);
    resetTurn();
  };

  const endGame = () => {
    console.log("gameRecordRef.current", gameRecordRef.current);
    sendGameRecordToServer();
  };

  return { recordRoll, endTurn, endGame };
};

export default useGameRecord;
