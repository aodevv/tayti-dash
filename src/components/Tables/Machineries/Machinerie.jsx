import React, { useState } from "react";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectMachineries } from "../../../redux/Machineries/machineries.selectors";

import AjoutMachineriesModal from "../../Modals/AjoutMachineriesModal";
import { ButtonM } from "../../Mix/Mix.styles";

import MachineriesTab from "./MachineriesTab";

import { useParams } from "react-router-dom";
import "../DossierDetails.scss";

const Machinerie = ({ type, machineries }) => {
  const params = useParams();
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [machinerieToEdit, setMachinerieToEdit] = useState(null);
  const machineriesDossier = machineries[type.toUpperCase()][params.dossierId];
  const machineriesAll = machineries[type.toUpperCase()];
  const types = {
    dmb: "Dommages au biens",
    mpt: "Mesures préventifs temporaires",
    mi: "Mesures d'interventions",
  };
  return (
    <div className="dossier-details__container">
      <h1>
        Machineries {types[params.type]}, Dossier : {params.dossierId}
      </h1>
      <ButtonM onClick={() => setShowModal(true)}>Ajouter machine</ButtonM>
      <AjoutMachineriesModal
        showModal={showModal}
        setShowModal={setShowModal}
        machineries={machineriesAll}
        dossier={params.dossierId}
        type={type}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        machinerieToEdit={machinerieToEdit}
      />
      <MachineriesTab
        setIsEdit={setIsEdit}
        setMachinerieToEdit={setMachinerieToEdit}
        machineries={machineriesDossier}
        setShowModal={setShowModal}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  machineries: selectMachineries,
});

export default connect(mapStateToProps)(Machinerie);
