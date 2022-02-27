import React, { useState } from "react";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectDABs } from "../../../redux/DAB/DAB.selectors";

import AjoutDabModal from "../../Modals/AjoutDabModal";
import { ButtonM } from "../../Mix/Mix.styles";

import DabTab from "./DabTab";

import { useParams } from "react-router-dom";
import "../DossierDetails.scss";

const DABs = ({ dabs, type }) => {
  const params = useParams();
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [dabToEdit, setDabToEdit] = useState(null);
  const DABsDossier = dabs[params.dossierId];

  return (
    <div className="dossier-details__container">
      <h1>DABs, Dossier : {params.dossierId}</h1>
      <ButtonM onClick={() => setShowModal(true)}>Ajouter dab</ButtonM>
      <AjoutDabModal
        showModal={showModal}
        setShowModal={setShowModal}
        dabs={dabs}
        dossier={params.dossierId}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        dabToEdit={dabToEdit}
        type={type}
      />
      <DabTab
        setIsEdit={setIsEdit}
        setDabToEdit={setDabToEdit}
        dabs={DABsDossier}
        setShowModal={setShowModal}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  dabs: selectDABs,
});

export default connect(mapStateToProps)(DABs);
