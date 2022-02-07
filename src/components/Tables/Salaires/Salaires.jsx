import React from "react";

import { useParams } from "react-router-dom";

import SalairesTab from "./SalairesTab";

import "../DossierDetails.scss";

const Salaires = () => {
  const params = useParams();
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
      <SalairesTab />
    </div>
  );
};

export default Salaires;
