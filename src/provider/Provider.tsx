import React from "react";
import {
  CounterContext,
  useValue,
} from "../store/useContextSelectorCounterStore";

const Provider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [state, dispatch] = useValue();

  return (
    <CounterContext.Provider value={[state, dispatch]}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default Provider;
