import React from "react";

import TableDossier from "../../components/TableDossier/TableDossier";
import { Button1 } from "../../components/Mix/Mix.styles";

import { Link } from "react-router-dom";

import "./GestionDossier.scss";

const GestionDossier = () => {
  return (
    <div className="gs-container">
      <Button1>
        <Link to="/ajout-dossier">Ajouter Dossier</Link>
      </Button1>
      <TableDossier />
    </div>
  );
};

export default GestionDossier;
