const addDiceValues = (diceValues, val) => {
  const points = diceValues.reduce((acc, cur) => {
    if (!val || val === cur) acc += cur;
    return acc;
  }, 0);
  return points;
};

const DEFAULT_SCORING_OPTIONS = [
  {
    id: 1,
    label: "aces (1)",
    howToScore: "Count & Add Only Aces",
    calculatePointsFromDiceValues: (diceValues) => addDiceValues(diceValues, 1),
    section: "upper",
  },
  {
    id: 2,
    label: "twos (2)",
    howToScore: "Count & Add Only Twos",
    calculatePointsFromDiceValues: (diceValues) => addDiceValues(diceValues, 2),
    section: "upper",
  },
  {
    id: 3,
    label: "threes (3)",
    howToScore: "Count & Add Only Threes",
    calculatePointsFromDiceValues: (diceValues) => addDiceValues(diceValues, 3),
    section: "upper",
  },
  {
    id: 4,
    label: "fours (4)",
    howToScore: "Count & Add Only Fours",
    calculatePointsFromDiceValues: (diceValues) => addDiceValues(diceValues, 4),
    section: "upper",
  },
  {
    id: 5,
    label: "fives (5)",
    howToScore: "Count & Add Only Fives",
    calculatePointsFromDiceValues: (diceValues) => addDiceValues(diceValues, 5),
    section: "upper",
  },
  {
    id: 6,
    label: "sixes (6)",
    howToScore: "Count & Add Only Sixes",
    calculatePointsFromDiceValues: (diceValues) => addDiceValues(diceValues, 6),
    section: "upper",
  },
  {
    id: 7,
    label: "3-of-a-kind",
    howToScore: "Count & Add all dice",
    calculatePointsFromDiceValues: (diceValues) => {
      const checkValidity = () => {
        const valueCounts = {};
        diceValues.forEach(
          (val) => (valueCounts[val] = valueCounts[val] + 1 || 1)
        );
        for (const valueCount in valueCounts) {
          if (valueCounts[valueCount] >= 3) return true;
        }
        return false;
      };
      const isValid = checkValidity();
      return isValid ? addDiceValues(diceValues) : 0;
    },
    section: "lower",
  },
  {
    id: 8,
    label: "4-of-a-kind",
    howToScore: "Count & Add all dice",
    calculatePointsFromDiceValues: (diceValues) => {
      const checkValidity = () => {
        const valueCounts = {};
        diceValues.forEach(
          (val) => (valueCounts[val] = valueCounts[val] + 1 || 1)
        );
        for (const valueCount in valueCounts) {
          if (valueCounts[valueCount] >= 4) return true;
        }
        return false;
      };
      const isValid = checkValidity();
      return isValid ? addDiceValues(diceValues) : 0;
    },
    section: "lower",
  },
  {
    id: 9,
    label: "full-house",
    howToScore: "SCORE 25",
    calculatePointsFromDiceValues: (diceValues) => {
      const isValid = diceValues
        .sort((a, b) => a - b)
        .join("")
        .match("^([1-6])\\1{1,2}([1-6])\\2{1,2}$");
      return isValid ? 25 : 0;
    },
    section: "lower",
  },
  {
    id: 10,
    label: "small straight",
    howToScore: "SCORE 30",
    calculatePointsFromDiceValues: (diceValues) => {
      const uniqueValues = [...new Set(diceValues.sort((a, b) => a - b))];
      let consecutiveValues = [];
      let points = 0;
      for (let i = 0; i < diceValues.length + 1; i++) {
        if (consecutiveValues.length === 4) {
          points = 30;
          break;
        }
        if (
          consecutiveValues[consecutiveValues.length - 1] ===
          uniqueValues[i] - 1
        ) {
          consecutiveValues.push(uniqueValues[i]);
        } else {
          consecutiveValues = [uniqueValues[i]];
        }
      }
      return points;
      // let isValid = false;
      // for (let i = 0; i < uniqueValues.length; i++) {
      //   if (i === 0) continue;
      //   if (i === 3) {
      //     isValid = true;
      //     break;
      //   }
      //   if (uniqueValues[i] !== uniqueValues[i - 1] + 1) break;
      // }
      // return isValid ? 30 : 0;
    },
    section: "lower",
  },
  {
    id: 11,
    label: "large straight",
    howToScore: "SCORE 40",
    calculatePointsFromDiceValues: (diceValues) => {
      const valueStr = diceValues.sort((a, b) => a - b).join("");
      if (valueStr !== "12345" && valueStr !== "23456") return 0;
      return 40;
    },
    section: "lower",
  },
  {
    id: 12,
    label: "yahtzee",
    howToScore: "SCORE 50",
    calculatePointsFromDiceValues: (diceValues) => {
      const isValid = new Set(diceValues).size === 1;
      return isValid ? 50 : 0;
    },
    section: "lower",
  },
  {
    id: 13,
    label: "chance",
    howToScore: "Count & Add all dice",
    calculatePointsFromDiceValues: (diceValues) => addDiceValues(diceValues),
    section: "lower",
  },
];

export default DEFAULT_SCORING_OPTIONS;
