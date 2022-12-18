import React from "react";
import { useCounterStore } from "../store/zustandStore";

const ZustandCounter: React.FC = () => {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div>
      <h1>ZustandCounter</h1>
      <p>State Change : {Math.random()}</p>
      <div>{count}</div>
      <button onClick={increment}>increase</button>
      <button onClick={decrement}>decrease</button>
    </div>
  );
};

export default ZustandCounter;
