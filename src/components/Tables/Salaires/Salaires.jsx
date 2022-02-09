import React, { useState } from "react";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectSalaires } from "../../../redux/Salaires/salaires.selectors";

import { useParams } from "react-router-dom";

import AjoutSalaireModal from "../../Modals/AjoutSalaireModal";
import { ButtonM } from "../../Mix/Mix.styles";

import SalairesTab from "./SalairesTab";

import "../DossierDetails.scss";

const Salaires = ({ type, salaires }) => {
  const params = useParams();
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [salaireToEdit, setSalaireToEdit] = useState(null);
  const salairesDossier = salaires[type.toUpperCase()][params.dossierId];
  const salairesAll = salaires[type.toUpperCase()];
  const types = {
    dmb: "Dommages au biens",
    mpt: "Mesures préventifs temporaires",
    mi: "Mesures d'interventions",
  };
  return (
    <div className="dossier-details__container">
      <h1>
        Salaires {types[params.type]}, Dossier : {params.dossierId}
      </h1>
      <ButtonM onClick={() => setShowModal(true)}>Ajouter salaire</ButtonM>
      <AjoutSalaireModal
        showModal={showModal}
        setShowModal={setShowModal}
        salaires={salairesAll}
        dossier={params.dossierId}
        type={type}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        salaireToEdit={salaireToEdit}
      />
      <SalairesTab
        setIsEdit={setIsEdit}
        setSalairesToEdit={setSalaireToEdit}
        salaires={salairesDossier}
        setShowModal={setShowModal}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  salaires: selectSalaires,
});

export default connect(mapStateToProps)(Salaires);
