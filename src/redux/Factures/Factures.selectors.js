import { createSelector } from "reselect";

export const selectFactures = (state) => state.factures;

export const selectDABFactures = createSelector(
  [selectFactures],
  (factures) => factures.DAB
);
