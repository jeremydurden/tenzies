function Die({ value, isHeld, hold }) {
  const styles = { background: isHeld ? "rgba(89, 227, 145, 1)" : "white" };
  return (
    <div onClick={hold} style={styles} className="die">
      <h2>{value}</h2>
    </div>
  );
}

export default Die;
