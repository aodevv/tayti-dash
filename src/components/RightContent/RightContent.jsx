import React from "react";
import { Routes, Route } from "react-router-dom";
import { RightContainer } from "./RightContent.styles";
import Header from "../Header/Header";
import Homepage from "../../pages/homepage/Homepage";
import GestionDossier from "../../pages/GestionDossier/GestionDossier";
import AjoutDossier from "../../pages/GestionDossier/AjoutDossier";
import DossierDetails from "../../pages/GestionDossier/DossierDetails";

import DABPage from "../../pages/GestionDossier/DABPage";
import MPTPage from "../../pages/GestionDossier/MPTPage";
import MIPage from "../../pages/GestionDossier/MIPage";

import Salaries from "../../pages/Salaries/Salaries";

import Factures from "../Tables/Factures/Factures";
import Machinerie from "../Tables/Machineries/Machinerie";
import Salaires from "../Tables/Salaires/Salaires";

import AjoutDossierForm from "../AjoutDossierForm/AjoutDossierForm";

const RightContent = ({ match, left, setLeft }) => {
  return (
    <RightContainer>
      <Header left={left} setLeft={setLeft} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/test" element={<AjoutDossierForm />} />
        <Route path="/gestion-dossier" element={<GestionDossier />} />
        <Route path="/liste-salaries" element={<Salaries />} />
        <Route path="/ajout-dossier" element={<AjoutDossier />} />
        <Route path="/dossier/:dossierId" element={<DossierDetails />} />
        <Route path="/dossier/:dossierId/dab/" element={<DABPage />}>
          <Route path="factures" element={<Factures type="dab" />} />
          <Route path="machineries" element={<Machinerie type="dab" />} />
          <Route path="salaires" element={<Salaires type="dab" />} />
        </Route>
        <Route path="/dossier/:dossierId/mpt/" element={<MPTPage />}>
          <Route path="factures" element={<Factures type="mpt" />} />
          <Route path="machineries" element={<Machinerie type="mpt" />} />
          <Route path="salaires" element={<Salaires type="mpt" />} />
        </Route>
        <Route path="/dossier/:dossierId/MI/" element={<MIPage />}>
          <Route path="factures" element={<Factures type="mi" />} />
          <Route path="machineries" element={<Machinerie type="mi" />} />
          <Route path="salaires" element={<Salaires type="mi" />} />
        </Route>
      </Routes>
    </RightContainer>
  );
};

export default RightContent;
