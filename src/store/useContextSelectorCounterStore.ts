import { useReducer, Reducer } from "react";
import { createContext } from "use-context-selector";

export type CounterState = {
  count: number;
};

export type CounterActions = {
  type: "increment" | "decrement";
};

const initialState: CounterState = {
  count: 0,
};

const reducer: Reducer<CounterState, CounterActions> = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

type Dispatch = (action: CounterActions) => void;

export const useValue = () => useReducer(reducer, initialState);

export const CounterContext = createContext<[CounterState, Dispatch]>([
  initialState,
  () => {},
]);
