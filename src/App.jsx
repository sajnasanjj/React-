import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";

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
      <Counter count={count} onIncrement={onIncrement} onDecrement={onDecrement}/>
    </>
  );
}

export default App;
