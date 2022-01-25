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
      <FacturesTab factures={factures[type.toUpperCase()][params.dossierId]} />
    </FacturesContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  factures: selectFactures,
});

export default connect(mapStateToProps)(Factures);
