import { useState } from "react";

import Die from "./Die";

function Main() {
  const [dice, setDice] = useState(allNewDice);

  function allNewDice() {
    const diceSet = [];
    while (diceSet.length <= 9) {
      diceSet.push(Math.floor(Math.random() * (7 - 1) + 1));
    }
    return diceSet;
  }

  const diceElements = dice.map((dieNumber) => {
    return <Die value={dieNumber} />;
  });

  return (
    <main className="main__container">
      <div className="main__game-board">
        <div className="dice">{diceElements}</div>
      </div>
    </main>
  );
}

export default Main;
