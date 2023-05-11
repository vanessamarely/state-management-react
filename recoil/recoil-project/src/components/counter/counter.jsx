import React from "react";

import { useCounterState } from "../../store";

export default function Counter() {
  const [count, setCount] = useCounterState();

  const increment = () => {
    setCount((prevCounter) => prevCounter + 1);
  };
  const decrement = () => {
    setCount((prevCounter) => prevCounter - 1);
  };
  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button aria-label="Increment value" onClick={increment}>
          Increment
        </button>
        <p>
          <span>{count}</span>
        </p>

        <button aria-label="Decrement value" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}
