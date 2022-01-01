import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Die from "./Die";

function Main() {
  const [dice, setDice] = useState(allNewDice);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: uuidv4(),
    };
  }

  function allNewDice() {
    const diceSet = [];
    while (diceSet.length <= 9) {
      diceSet.push(generateNewDie());
    }
    return diceSet;
  }

  function roll() {
    setDice((prevState) =>
      prevState.map((die) => {
        return die.isHeld ? die : generateNewDie();
      })
    );
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
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice">{diceElements}</div>
        <button className="rollButton" onClick={roll}>
          Roll
        </button>
      </div>
    </main>
  );
}

export default Main;
