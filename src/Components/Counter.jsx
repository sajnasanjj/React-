import React from "react";

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={onIncrement}>Up</button>
      {"\u00A0"}
      {"\u00A0"}
      <button onClick={onDecrement}>Down</button>
    </>
  );
};

export default Counter;
