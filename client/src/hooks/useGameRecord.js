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

const initialGameRecordRef = { turns: [] };

const useGameRecord = () => {
  const gameRecord = useRef(null);

  const newGameRecord = () => {
    gameRecord.current = { ...initialGameRecordRef, uniqueId: uuidv4() };
    return;
  };

  return { newGameRecord };
};

export default useGameRecord;
