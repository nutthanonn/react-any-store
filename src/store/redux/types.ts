export interface Counter {
  count: number;
}

export enum CounterActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

export type CounterAction = CounterActionType;

export interface CounterActionInterface {
  type: CounterAction;
  payload: any;
}
