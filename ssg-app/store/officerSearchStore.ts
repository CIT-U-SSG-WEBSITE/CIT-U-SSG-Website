import { create } from "zustand";

interface OfficerSearchState {
  search: string;
  setSearch: (value: string) => void;
}

export const useOfficerSearchStore = create<OfficerSearchState>((set) => ({
  search: "",
  setSearch: (value) => set({ search: value }),
}));