import React from "react";
import { Routes, Route } from "react-router-dom";
import { RightContainer } from "./RightContent.styles";
import Header from "../Header/Header";
import Homepage from "../../pages/homepage/Homepage";
import GestionDossier from "../../pages/GestionDossier/GestionDossier";
import AjoutDossier from "../../pages/GestionDossier/AjoutDossier";
import DossierDetails from "../../pages/GestionDossier/DossierDetails";
import Factures from "../../pages/GestionDossier/Factures/Factures";
import Machinerie from "../../pages/GestionDossier/Machinerie/Machinerie";
import Salaires from "../../pages/GestionDossier/Salaires/Salaires";

const RightContent = ({ match }) => {
  return (
    <RightContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gestion-dossier" element={<GestionDossier />} />
        <Route path="/ajout-dossier" element={<AjoutDossier />} />
        <Route path="/dossier/:dossierId" element={<DossierDetails />} />
        <Route path={`/:type/factures/:dossierId`} element={<Factures />} />
        <Route
          path={`/:type/machineries/:dossierId`}
          element={<Machinerie />}
        />
        <Route path={`/:type/salaires/:dossierId`} element={<Salaires />} />
      </Routes>
    </RightContainer>
  );
};

export default RightContent;
