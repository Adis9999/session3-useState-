import React, { useState } from "react";

const Counter = (props) => {
  const [state, setState] = useState(props.num);
  const plus = () => {
    setState((prev) => {
      prev++;
      return prev;
    });
  };
  const minus = () => {
    if (state > 0) {
      setState((prev) => {
        prev--;
        return prev;
      });
    }
  };
  const reset = () => {
    setState(0);
  };
  return (
    <div className="counter">
      <div className="plusMinus">
        <button className="count" onClick={plus}>+</button>
        <p className="num">{state}</p>
        <button className="count" onClick={minus}>-</button>
      </div>
      <button className="reset" onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
