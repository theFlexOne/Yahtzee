import { v4 as uuidv4 } from "uuid";
import { useRef, useState } from "react";

const validateRollCount = (count) => {
  if (count < 0 || count > 2 || Number.isNaN(count)) return false;
  return true;
};

const validateTurnCount = (count) => {
  if (count < 0 || Number.isNaN(count)) return false;
  return true;
};

const validatePlayerName = (name) => {
  if (typeof name !== "string") return false;
  return true;
};

const validateDice = (dice) => {
  return true;
};

const validateGameData = (data) => {
  if (
    !validateRollCount(data?.rollCount) &&
    !validateTurnCount(data?.turnCount) &&
    !validatePlayerName(data?.name) &&
    !validateDice(data?.dice)
  )
    return false;
  return true;
};

const initialGameRecordRef = { turns: [], uuid: uuidv4() };

const generateInitialTurnState = (count) => {
  return {
    rolls: [],
    count,
  };
};
const useGameRecord = (playerNames) => {
  const gameRecord = useRef({ ...initialGameRecordRef, playerNames });
  const turnStateRef = useRef(generateInitialTurnState(1));

  const resetTurn = () =>
    (turnStateRef.current = generateInitialTurnState(
      gameRecord.current.turns.length + 1
    ));

  const recordTurn = () => {
    gameRecord.current.turns.push(turnStateRef.current);
    resetTurn();
  };

  const recordRoll = (rollState) => {
    turnStateRef.current.rolls.push(rollState);
    // if (turnStateRef.current.rolls.length === 3) {
    recordTurn();
    // }
  };

  console.log("turnStateRef.current", turnStateRef.current);
  console.log("gameRecord.current", gameRecord.current);

  return { recordRoll };
};

export default useGameRecord;

/*
  1) roll button clicked
    - record roll state to it's corresponding turn
*/
