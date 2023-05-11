import React, { useState } from "react";

export default function Counter() {
  const [ count, setCount ] = useState(0)
  const increment = () => setCount((c) => c + 1)
  const decrement = () => setCount((c) => c - 1)
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
