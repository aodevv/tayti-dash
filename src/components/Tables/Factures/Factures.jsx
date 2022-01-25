import React, { useState } from "react";

import { useParams } from "react-router-dom";

import { FacturesContainer } from "./Factures.styles";

import AjoutFactureModal from "../../Modals/AjoutFactureModal";
import { ButtonM } from "../../Mix/Mix.styles";

import FacturesTab from "./FacturesTab";

const Factures = ({ type }) => {
  const [showModal, setShowModal] = useState(false);
  const params = useParams();
  const types = {
    dab: "Dommages au biens",
    mpt: "Mesures préventifs temporaires",
    mi: "Mesures d'interventions",
  };
  return (
    <FacturesContainer>
      <h1>
        Factures {types[type]}, Dossier : {params.dossierId}
      </h1>
      <ButtonM onClick={() => setShowModal(true)}>Ajouter Dossier</ButtonM>
      <AjoutFactureModal showModal={showModal} setShowModal={setShowModal} />
      <FacturesTab />
    </FacturesContainer>
  );
};

export default Factures;
