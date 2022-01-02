import React from "react";

import {
  InputsGroup,
  InfoGrid,
  MontantGrid,
  InputsContainer,
  FormContainer,
  StepBtnGroup,
} from "./FormSteps.Styles";

import LabeledInput from "../FormElements/LabeledInput";

import { StepBtn } from "../FormElements/Buttons";

const InfosDossier = ({ nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <div>
      <h1 className="u-mb-s">Ajout Dossier</h1>
      <form action="">
        <FormContainer>
          <InputsContainer>
            <InputsGroup>
              <h2>Infos dossier:</h2>
              <InfoGrid>
                <LabeledInput
                  id={values.numdos}
                  type="text"
                  label="Numéro Dossier"
                  inputValue={values.numdos}
                />
                <LabeledInput
                  id={values.datev}
                  type="text"
                  label="Date évenement"
                  inputValue={values.datev}
                />
                <LabeledInput
                  id={values.datouv}
                  type="text"
                  label="Date d'ouverture"
                  inputValue={values.datouv}
                />
              </InfoGrid>
            </InputsGroup>
            <InputsGroup>
              <h2>Montans:</h2>
              <MontantGrid>
                <LabeledInput
                  id={values.mrec}
                  type="text"
                  label="Montant réclamé"
                  inputValue={values.mrec}
                />
                <LabeledInput
                  id={values.maut}
                  type="text"
                  label="Montant autorisé"
                  inputValue={values.maut}
                />
                <LabeledInput
                  id={values.mvers}
                  type="text"
                  label="Montant Versé"
                  inputValue={values.mvers}
                />
              </MontantGrid>
            </InputsGroup>
          </InputsContainer>
          <StepBtnGroup>
            <StepBtn onClick={Continue} type="submit">
              Next
            </StepBtn>
          </StepBtnGroup>
        </FormContainer>
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

export default InfosDossier;
