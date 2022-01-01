import React from "react";

import {
  InputsGroup,
  InfoGrid,
  MontantGrid,
  FormGroup,
} from "./AjoutDossierForm.styles";

import LabeledInput from "../FormElements/LabeledInput";

const AjoutDossierForm = () => {
  return (
    <div>
      <h1 className="u-mb-s">Ajout Dossier</h1>
      <form action="">
        <FormGroup>
          <InputsGroup>
            <h2>Infos dossier:</h2>
            <InfoGrid>
              <LabeledInput id="ndossier" type="text" label="Numéro Dossier" />
              <LabeledInput id="datev" type="text" label="Date évenement" />
              <LabeledInput id="datouv" type="text" label="Date d'ouverture" />
            </InfoGrid>
          </InputsGroup>
          <InputsGroup>
            <h2>Montans:</h2>
            <MontantGrid>
              <LabeledInput id="mr" type="text" label="Montant réclamé" />
              <LabeledInput id="mat" type="text" label="Montant autorisé" />
              <LabeledInput id="mv" type="text" label="Montant Versé" />
            </MontantGrid>
          </InputsGroup>
        </FormGroup>
        {/* <LabeledInput id="acteoff" type="text" label="Acte officiel" />
        <LabeledInput id="status" type="text" label="Status" />
        <LabeledInput id="ev" type="text" label="Evénement" />
        <LabeledInput id="adms" type="text" label="Admissibilité" />
        <LabeledInput id="pgm" type="text" label="Programme" />
        <LabeledInput id="pf" type="text" label="Participation foncière" /> */}
      </form>
    </div>
  );
};

export default AjoutDossierForm;
