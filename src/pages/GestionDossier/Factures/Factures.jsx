import React from "react";

import { useParams } from "react-router-dom";

import { FacturesContainer } from "./Factures.styles";

import FacturesTab from "./FacturesTab";

const Factures = () => {
  const params = useParams();
  const types = {
    dmb: "Dommages au biens",
    mpt: "Mesures préventifs temporaires",
    mi: "Mesures d'interventions",
  };
  return (
    <FacturesContainer>
      <h1>
        Factures {types[params.type]}, Dossier : {params.dossierId}
      </h1>
      <FacturesTab />
    </FacturesContainer>
  );
};

export default Factures;
