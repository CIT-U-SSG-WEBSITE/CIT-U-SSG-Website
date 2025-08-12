import { create } from "zustand";

interface SessionFilterState {
  checkedSessionTypes: string[];
  setCheckedSessionTypes: (ids: string[] | ((prev: string[]) => string[])) => void;
}

export const useSessionFilterStore = create<SessionFilterState>((set) => ({
  checkedSessionTypes: [],
  setCheckedSessionTypes: (ids) =>
    set((state) => ({
      checkedSessionTypes: typeof ids === "function" ? ids(state.checkedSessionTypes) : ids,
    })),
}));