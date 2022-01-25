import { facturesDABData } from "./Factures.data";
import { facturesMPTData } from "./Factures.data";
import { facturesMIData } from "./Factures.data";

const INITIAL_STATE = {
  DAB: facturesDABData,
  MPT: facturesMPTData,
  MI: facturesMIData,
};

const facturesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_FACTURE":
      return {
        ...state,
        factures: action.payload,
      };
    default:
      return state;
  }
};

export default facturesReducer;
