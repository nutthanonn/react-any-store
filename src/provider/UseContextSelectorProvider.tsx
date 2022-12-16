import React from "react";
import {
  CounterContext,
  useValue,
} from "../store/useContextSelectorCounterStore";

const UseContextSelectorProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [state, dispatch] = useValue();

  return (
    <CounterContext.Provider value={[state, dispatch]}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default UseContextSelectorProvider;
