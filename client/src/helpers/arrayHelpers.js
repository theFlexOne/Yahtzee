export const addUpValues = (diceValues, i) => {
  const score = diceValues.reduce((acc, cur) => {
    if (cur === i) return acc + cur;
    return acc;
  }, 0);
  return score;
};
