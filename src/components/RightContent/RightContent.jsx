import React from "react";
import { Routes, Route } from "react-router-dom";
import { RightContainer } from "./RightContent.styles";
import Header from "../Header/Header";
import Homepage from "../../pages/homepage/Homepage";
import GestionDossier from "../../pages/GestionDossier/GestionDossier";
import AjoutDossier from "../../pages/GestionDossier/AjoutDossier";
import DossierDetails from "../../pages/GestionDossier/DossierDetails";

const RightContent = () => {
  return (
    <RightContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gestion-dossier" element={<GestionDossier />} />
        <Route path="/ajout-dossier" element={<AjoutDossier />} />
        <Route path="/dossier" element={<DossierDetails />} />
      </Routes>
    </RightContainer>
  );
};

export default RightContent;
