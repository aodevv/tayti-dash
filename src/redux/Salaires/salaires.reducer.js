import { salairesDABData } from "./salaires.data";
import { salairesMPTData } from "./salaires.data";
import { salairesMIData } from "./salaires.data";

const INITIAL_STATE = {
  DAB: salairesDABData,
  MPT: salairesMPTData,
  MI: salairesMIData,
};

const salairesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_SALAIRES_DAB":
      return {
        ...state,
        DAB: action.payload,
      };
    case "ADD_SALAIRES_MPT":
      return {
        ...state,
        MPT: action.payload,
      };
    case "ADD_SALAIRES_MI":
      return {
        ...state,
        MI: action.payload,
      };
    default:
      return state;
  }
};

export default salairesReducer;
