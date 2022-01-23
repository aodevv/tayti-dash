import React from "react";

import { useParams } from "react-router-dom";
import "../DossierDetails.scss";

const Machinerie = () => {
  const params = useParams();
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
    </div>
  );
};

export default Machinerie;
