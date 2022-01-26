import React, { useState } from "react";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectFactures } from "../../../redux/Factures/Factures.selectors";

import { useParams } from "react-router-dom";

import { FacturesContainer } from "./Factures.styles";

import AjoutFactureModal from "../../Modals/AjoutFactureModal";
import { ButtonM } from "../../Mix/Mix.styles";

import FacturesTab from "./FacturesTab";

const Factures = ({ type, factures }) => {
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [factToEdit, setFactToEdit] = useState(null);
  const params = useParams();
  const facturesDossier = factures[type.toUpperCase()][params.dossierId];
  const facturesAll = factures[type.toUpperCase()];
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
      <ButtonM onClick={() => setShowModal(true)}>Ajouter Facture</ButtonM>
      <AjoutFactureModal
        showModal={showModal}
        setShowModal={setShowModal}
        factures={facturesAll}
        dossier={params.dossierId}
        type={type}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        factToEdit={factToEdit}
      />
      <FacturesTab
        setIsEdit={setIsEdit}
        setFactToEdit={setFactToEdit}
        factures={facturesDossier}
        setShowModal={setShowModal}
      />
    </FacturesContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  factures: selectFactures,
});

export default connect(mapStateToProps)(Factures);
