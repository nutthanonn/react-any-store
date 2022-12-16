import { Counter, CounterActionType, CounterActionInterface } from "./types";

export const increment = (): CounterActionInterface => ({
  type: CounterActionType.INCREMENT,
  payload: null,
});

export const decrement = (): CounterActionInterface => ({
  type: CounterActionType.DECREMENT,
  payload: null,
});
