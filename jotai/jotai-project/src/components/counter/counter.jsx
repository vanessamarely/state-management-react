import React from "react";
import { atom, useAtom } from "jotai";

export const countAtom = atom(0);

export default function Counter() {
  const [count, setCount] = useAtom(countAtom);

  const increment = () => setCount((prevCount) => prevCount + 1);;
  const decrement = () => setCount((prevCount) => prevCount - 1);
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
