import { useState } from "react";

import Die from "./Die";

function Main() {
  const [dice, setDice] = useState(allNewDice);

  function allNewDice() {
    const diceSet = [];
    while (diceSet.length <= 9) {
      const randomNumber = Math.floor(Math.random() * (7 - 1) + 1);
      diceSet.push({
        value: randomNumber,
        isHeld: false,
      });
    }
    return diceSet;
  }

  const diceElements = dice.map((die) => {
    console.log(die.value, "value");
    return <Die key={dice.index} value={die.value} />;
  });

  function roll() {
    setDice(allNewDice);
  }

  return (
    <main className="main__container">
      <div className="main__game-board">
        <div className="dice">{diceElements}</div>
        <button className="rollButton" onClick={roll}>
          Roll
        </button>
      </div>
    </main>
  );
}

export default Main;
