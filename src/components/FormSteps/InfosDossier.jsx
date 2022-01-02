import React from "react";

import {
  InputsGroup,
  InfoGrid,
  MontantGrid,
  InputsContainer,
  FormContainer,
  StepBtnGroup,
  InfoCompGrid,
} from "./FormSteps.Styles";

import LabeledInput from "../FormElements/LabeledInput";

import { StepBtn } from "../FormElements/Buttons";
import { InputGroup } from "../FormElements/LabeledInput.styles";

import LabeledTextArea from "../FormElements/LabeledTextArea";

const InfosDossier = ({ nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <div>
      <h1 className="u-mb-s">Informations de bases</h1>
      <form action="">
        <FormContainer>
          <InputsContainer>
            <InputsGroup>
              <h2>Identification:</h2>
              <InfoGrid>
                <LabeledInput
                  id="numdos"
                  type="text"
                  label="Numéro Dossier"
                  inputValue={values.numdos}
                  handleChange={handleChange("numdos")}
                />
                <LabeledInput
                  id="datev"
                  type="date"
                  label="Date évenement"
                  inputValue={values.datev}
                  handleChange={handleChange("datev")}
                />
                <LabeledInput
                  id="datouv"
                  type="date"
                  label="Date d'ouverture"
                  inputValue={values.datouv}
                  handleChange={handleChange("datouv")}
                />
              </InfoGrid>
            </InputsGroup>
            <InputsGroup>
              <h2>Montans:</h2>
              <MontantGrid>
                <LabeledInput
                  id="mtrec"
                  type="number"
                  label="Montant réclamé"
                  inputValue={values.mtrec}
                  handleChange={handleChange("mtrec")}
                />
                <LabeledInput
                  id="mtaut"
                  type="number"
                  label="Montant autorisé"
                  inputValue={values.mtaut}
                  handleChange={handleChange("mtaut")}
                />
                <LabeledInput
                  id="mtvers"
                  type="number"
                  label="Montant Versé"
                  inputValue={values.mtvers}
                  handleChange={handleChange("mtvers")}
                />
              </MontantGrid>
            </InputsGroup>
          </InputsContainer>
          <InputsContainer>
            <InputsGroup>
              <h2>Desciption de l'évenement</h2>
              <LabeledTextArea
                id="evn"
                label="Déscription"
                inputValue={values.evn}
                handleChange={handleChange("evn")}
                rows={5}
                cols={50}
              />
            </InputsGroup>
          </InputsContainer>
          <InputsContainer>
            <InputsGroup>
              <h2>Infos complementaire:</h2>
              <InfoCompGrid>
                <LabeledInput
                  id="actof"
                  type="text"
                  label="Acte officiel"
                  inputValue={values.actof}
                  handleChange={handleChange("actof")}
                />
                <LabeledInput
                  id="program"
                  type="text"
                  label="Programme"
                  inputValue={values.program}
                  handleChange={handleChange("program")}
                />
                <LabeledInput
                  id="partfonc"
                  type="text"
                  label="Participation foncière"
                  inputValue={values.partfonc}
                  handleChange={handleChange("partfonc")}
                />
              </InfoCompGrid>
            </InputsGroup>
          </InputsContainer>
          <StepBtnGroup>
            <StepBtn onClick={Continue} type="submit">
              Next
            </StepBtn>
          </StepBtnGroup>
        </FormContainer>
        {/* <LabeledInput id="adms" type="text" label="Admissibilité" />
        <LabeledInput id="status" type="text" label="Status" /> */}
      </form>
    </div>
  );
};

export default InfosDossier;
