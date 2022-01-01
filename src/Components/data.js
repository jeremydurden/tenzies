import { useState } from "react";

import Die from "./Die";

function Main() {
  const [dice, setDice] = useState(allNewDice);

  function allNewDice() {
    const diceSet = [];
    let num = -1;
    while (diceSet.length <= 9) {
      num++;
      const randomNumber = Math.floor(Math.random() * (7 - 1) + 1);
      diceSet.push({
        value: randomNumber,
        isHeld: true,
        id: num,
      });
    }
    return diceSet;
  }

  function roll() {
    setDice(allNewDice);
  }

  //   function hold(id) {
  //     setDice((prevState) => {
  //       return prevState.map((die) => {
  //         return die.id === 0 ? { ...die, isHeld: !die.isHeld } : die;
  //       });
  //     });
  //   }

  const diceElements = dice.map((die) => {
    return (
      <Die
        // hold={() => hold(die.id)}
        key={dice.index}
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
