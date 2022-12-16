import { Counter, CounterActionType, CounterActionInterface } from "./types";

const initialState: Counter = {
  count: 0,
};

export const counterReducers = (
  state = initialState,
  action: CounterActionInterface
) => {
  switch (action.type) {
    case CounterActionType.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case CounterActionType.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
