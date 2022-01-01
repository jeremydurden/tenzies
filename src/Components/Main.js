import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
        id: uuidv4(),
      });
    }
    return diceSet;
  }

  function roll() {
    setDice(allNewDice);
  }

  function hold(id) {
    setDice((prevState) =>
      prevState.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((die) => {
    return (
      <Die
        hold={() => hold(die.id)}
        key={die.id}
        value={die.value}
        isHeld={die.isHeld}
      />
    );
  });

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
