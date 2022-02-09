import { createSelector } from "reselect";

export const selectMachineries = (state) => state.machineries;

export const selectDABMachineries = createSelector(
  [selectMachineries],
  (machineries) => machineries.DAB
);

export const selectMPTMachineries = createSelector(
  [selectMachineries],
  (machineries) => machineries.MPT
);

export const selectMIMachineries = createSelector(
  [selectMachineries],
  (machineries) => machineries.MI
);
