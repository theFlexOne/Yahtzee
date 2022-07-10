import { useState } from "react";
import { randomNumberBetween } from "../helpers/mathHelpers";

const initialDieState = { value: 0, isFree: true };

const rollDie = (die) => (die.value = randomNumberBetween(1, 6));

const generateInitialState = (quantity) => {
  const diceState = [];
  for (let i = 0; i < quantity; i++) {
    diceState.push({ ...initialDieState, id: i + 1 });
  }
  return diceState;
};

const generateRoll = (dice) => {
  const diceCopy = [...dice];
  const rollableDice = diceCopy.filter((die) => die.isFree);
  rollableDice.forEach(rollDie);
  return diceCopy;
};

const useDice = (quantity, rollCount) => {
  const [dice, setDice] = useState(generateInitialState(quantity));

  const rollDice = () => {
    const newDice = generateRoll(dice);
    setDice(newDice);
  };

  const resetDice = () => setDice(generateInitialState(quantity));

  const toggleDieFreedom = (id) => {
    if (rollCount < 1) return console.log(rollCount);
    const diceCopy = [...dice];
    diceCopy[id].isFree = !diceCopy[id].isFree;
    setDice(diceCopy);
  };

  console.log(dice);

  return [dice, { rollDice, toggleDieFreedom, resetDice }];
};

export default useDice;

// import { useState, useRef, useEffect } from "react";
// import DieDisplay from "../components/DieDisplay/DieDisplay";

// // class Die {
// //   static currentDieCount = 0;
// //   static all = [];
// //   isFree = true;
// //   isFrozen = false;
// //   value = 0;
// //   constructor() {
// //     this.id = ++Die.currentDieCount;
// //     Die.all.push(this);
// //   }
// //   roll() {
// //     // this.value =
// //   }
// // }

// const Die = (id) => {
//   const [value, setValue] = useState(0);
//   const [isFree, setIsFree] = useState(true);

//   const dieSVGRef = useRef();

//   const handleDieClick = (e) => setIsFree(() => !isFree);

//   useEffect(() => {
//     registerDie();
//   }, []);

//   return (
//     <div className="die">
//       <DieDisplay
//         dieState={{ value, isFree }}
//         ref={dieSVGRef}
//         onClick={handleDieClick}
//       ></DieDisplay>
//     </div>
//   );
// };

// const useDice = (num) => {
//   const dice = (() => {
//     const diceHolder = [];
//     for (let i = 0; i < num; i++) diceHolder.push(<Die key={i} id={i + 1} />);
//     return diceHolder;
//   })();
//   return dice;
// };

// export default useDice;
