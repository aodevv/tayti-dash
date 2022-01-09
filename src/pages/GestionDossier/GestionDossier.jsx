import React, { useState } from "react";

import AjoutDossierModal from "../../components/Modals/AjoutDossierModal";
import TableDossier from "../../components/TableDossier/TableDossier";
import { ButtonM } from "../../components/Mix/Mix.styles";

import "./GestionDossier.scss";

const GestionDossier = ({}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="gs-container">
      <ButtonM onClick={() => setShowModal(true)}>Ajouter Dossier</ButtonM>
      <AjoutDossierModal showModal={showModal} setShowModal={setShowModal} />
      <TableDossier />
    </div>
  );
};

export default GestionDossier;
