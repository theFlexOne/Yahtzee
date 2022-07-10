// class SinglesScoringOption {
import { DEFAULT_SCORING_OPTIONS } from "../system/constants/defaultScoringOptions";

export const generatePossibleScores = (diceValues) => {
  const possibleScores = DEFAULT_SCORING_OPTIONS.map((opt) => {
    const scoringOption = {
      id: opt.id,
      value: opt.calculatePointsFromDiceValues(diceValues),
      section: opt.section,
    };
    return scoringOption;
  });
  return possibleScores;
};

export const calculateScoringOptionPointsFromDiceValues = (
  scoringOptionId,
  diceValues
) => {
  const scoringOption = DEFAULT_SCORING_OPTIONS.find(
    (opt) => opt.id === scoringOptionId
  );
  return scoringOption.calculatePointsFromDiceValues(diceValues);
};
