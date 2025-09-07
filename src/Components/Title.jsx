import React from "react";

export const Title = ({ count, userName, onIncrement}) => {
  return (
    <>
      <h5>
        {count}, {userName}
        <br />
        <button type="button" onClick={onIncrement}>Click from title for onIncrement</button>
      </h5>
    </>
  );
};

export default Title;
