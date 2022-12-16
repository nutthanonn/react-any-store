import { RootState } from "./index";

export const counterSelector = (state: RootState) =>
  state.counterReducers.count;
