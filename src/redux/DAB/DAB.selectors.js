import { createSelector } from "reselect";

const DAB = (state) => state.DAB;

export const selectDABFactures = createSelector([DAB], (DAB) => DAB.factures);
