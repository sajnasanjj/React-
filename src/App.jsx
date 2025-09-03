import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const onIncrement = () => {
    count < 10 ? setCount((prev) => prev + 1) : alert("Maximum count is 10");
  };
  const onDecrement = () => {
    count > 0 ? setCount((prev) => prev - 1) : alert("Minimum count is 0");
  };

  return (
    <>
      <h3> Counter App</h3>
      <h1>{count}</h1>
      <button onClick={onIncrement}>Up </button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={onDecrement}>Down</button>
    </>
  );
}

export default App;
