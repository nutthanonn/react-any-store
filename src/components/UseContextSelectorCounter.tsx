import React from "react";
import { useContextSelector } from "use-context-selector";
import { CounterContext } from "../store/useContextSelectorCounterStore";

const UseContextSelectorCounter: React.FC = () => {
  const counter = useContextSelector(CounterContext, (state) => state[0].count);
  const dispatch = useContextSelector(CounterContext, (state) => state[1]);
  return (
    <div>
      <h1>useContextSelector</h1>
      <p>State Change : {Math.random()}</p>
      <div>{counter}</div>
      <button onClick={() => dispatch({ type: "increment" })}>increase</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrease</button>
    </div>
  );
};

export default UseContextSelectorCounter;
