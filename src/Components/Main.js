import Die from "./Die";

function Main() {
  function allNewDice() {
    const diceSet = [];
    while (diceSet.length <= 9) {
      diceSet.push(Math.floor(Math.random() * (7 - 1) + 1));
    }
    return diceSet;
  }
  return (
    <main className="main__container">
      <div className="main__game-board">
        <div className="dice">
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
        </div>
      </div>
    </main>
  );
}

export default Main;
