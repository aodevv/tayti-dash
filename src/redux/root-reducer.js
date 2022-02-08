import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import infosDossierReducer from "./DossierInfos/infoDossier.reducer";
import facturesReducer from "./Factures/Factures.reducer";
import salairesReducer from "./Salaires/salaires.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["factures", "dossiers"],
};

const rootReducer = combineReducers({
  dossiers: infosDossierReducer,
  factures: facturesReducer,
  salaires: salairesReducer,
});

export default persistReducer(persistConfig, rootReducer);
