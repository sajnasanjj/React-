import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const onIncrement = () => {
    count < 10 ? setCount((prev) => prev + 1) : 0;
  };
  const onDecrement = () => {
    count > 0 ? setCount((prev) => prev - 1) : 0;
  };

  return (
    <>
      <h3> Counter App {count} </h3>
      <button onClick={onIncrement}>Up </button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={onDecrement}>Down</button>
    </>
  );
}

export default App;
