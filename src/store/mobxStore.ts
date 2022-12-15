import { makeAutoObservable } from "mobx";

export class MobxStore {
  count: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment = () => {
    this.count++;
  };

  decrement = () => {
    this.count--;
  };
}

export const mobxStore = new MobxStore();
