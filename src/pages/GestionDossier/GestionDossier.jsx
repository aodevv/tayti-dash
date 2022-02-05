import React, { useState } from "react";

import AjoutDossierModal from "../../components/Modals/AjoutDossierModal";
import ModalContainer from "../../components/Modals/ModalContainer";
import TableDossier from "../../components/TableDossier/TableDossier";
import { ButtonM } from "../../components/Mix/Mix.styles";

import "./GestionDossier.scss";

const GestionDossier = ({}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="gs-container">
      <ButtonM onClick={() => setShowModal(true)}>Ajouter Dossier</ButtonM>
      <ModalContainer showModal={showModal} setShowModal={setShowModal} />
      <TableDossier />
    </div>
  );
};

export default GestionDossier;
