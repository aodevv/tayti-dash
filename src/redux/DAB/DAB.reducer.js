import { facturesData } from "./DAB.data";

const INITIAL_STATE = {
  factures: facturesData,
};

const DABReducer = (state = INITIAL_STATE, action) => {
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

export default DABReducer;
