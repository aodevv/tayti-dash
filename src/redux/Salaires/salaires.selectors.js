import { createSelector } from "reselect";

export const selectSalaires = (state) => state.salaires;

export const selectDABSalaires = createSelector(
  [selectSalaires],
  (salaires) => salaires.DAB
);

export const selectMPTSalaires = createSelector(
  [selectSalaires],
  (salaires) => salaires.MPT
);

export const selectMISalaires = createSelector(
  [selectSalaires],
  (salaires) => salaires.MI
);
