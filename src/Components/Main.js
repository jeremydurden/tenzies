import Die from "./Die";

function Main() {
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
