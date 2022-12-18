import create from "zustand";

interface initialState {
  count: number;
}

interface CountStore extends initialState {
  increment: () => void;
  decrement: () => void;
}

export const useCounterStore = create<CountStore>((set) => ({
  count: 0,
  increment: () => set((state: initialState) => ({ count: state.count + 1 })),
  decrement: () => set((state: initialState) => ({ count: state.count - 1 })),
}));
