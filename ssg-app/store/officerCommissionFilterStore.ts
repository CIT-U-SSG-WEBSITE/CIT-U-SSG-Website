import { create } from "zustand";

interface OfficerCommissionFilterState {
  checkedCommissionIds: string[];
  setCheckedCommissionIds: (ids: string[] | ((prev: string[]) => string[])) => void;
}

export const useOfficerCommissionFilterStore = create<OfficerCommissionFilterState>((set) => ({
  checkedCommissionIds: [],
  setCheckedCommissionIds: (ids) =>
    set((state) => ({
      checkedCommissionIds: typeof ids === "function" ? ids(state.checkedCommissionIds) : ids,
    })),
}));
