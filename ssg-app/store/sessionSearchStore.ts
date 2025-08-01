import { create } from "zustand";

interface SessionSearchState {
  search: string;
  setSearch: (value: string) => void;
}

export const useSessionSearchStore = create<SessionSearchState>((set) => ({
  search: "",
  setSearch: (value) => set({ search: value }),
}));