import React from "react";
import { useCounterStore } from "../../store";

export default function Counter() {
  const store = useCounterStore();

  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  // const increment = store.increment;
  // const decrement = store.decrement;
  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button aria-label="Increment value" onClick={increment}>
          Increment
        </button>
        <p>
          <span>{store.count}</span>
        </p>

        <button aria-label="Decrement value" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}
