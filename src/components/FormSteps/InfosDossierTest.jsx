import React, { useState } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDossiers } from "../../redux/DossierInfos/infosDossier.selectors";
import { addInfosDossier } from "../../redux/DossierInfos/infosDossier.actions";

import { FormContainer } from "../FormSteps/FormSteps.Styles";
import {
  InputsContainer,
  InputsGroup,
  InfoGrid,
  InfoCompGrid,
  StepBtnGroup,
} from "../FormSteps/FormSteps.Styles";

import LabeledInput from "../FormElements/LabeledInput";
import LabeledTextArea from "../FormElements/LabeledTextArea";
import { StepBtn } from "../FormElements/Buttons";

const InfosDossierTest = ({ nextStep, values, setValues }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // const newDos = {
    //   Numero: numDos,
    //   Evenement: desc,
    //   "Date d'evenement": evDate,
    //   status: null,
    //   Admisibilité: false,
    //   MR: 0,
    //   MA: 0,
    //   MV: 0,
    //   Participation: "",
    // };
    //addInfosDossier([...dossiers, newDos]);
    //clearStates();
    console.log("submited");
    //setValues({ ...values, infosDossier: newDos });
    nextStep();
  };

  const changeInput = (e, chunk) => {
    const infosDossier = values.infosDossier;
    setValues({
      ...values,
      infosDossier: { ...infosDossier, [chunk]: e.target.value },
    });
  };

  return (
    <>
      <div>
        <h1 className="u-mb-s">Nouveau dossier</h1>
        <form onSubmit={handleSubmit}>
          <FormContainer>
            <InputsContainer>
              <InputsGroup>
                <h2>Identification:</h2>
                <InfoGrid>
                  <LabeledInput
                    id="numdos"
                    type="text"
                    label="Numéro Dossier"
                    inputValue={values.infosDossier.Numero}
                    handleChange={(e) => changeInput(e, "Numero")}
                  />
                  <LabeledInput
                    id="datev"
                    type="date"
                    label="Date évenement"
                    inputValue={values.infosDossier.datEv}
                    handleChange={(e) => changeInput(e, "datEv")}
                  />
                  <LabeledInput
                    id="datouv"
                    type="date"
                    label="Date d'ouverture"
                    inputValue={values.infosDossier.datOuv}
                    handleChange={(e) => changeInput(e, "datOuv")}
                  />
                </InfoGrid>
              </InputsGroup>
            </InputsContainer>
            <InputsContainer>
              <InputsGroup>
                <h2>Desciption de l'évenement</h2>
                <LabeledTextArea
                  id="evn"
                  label="Déscription"
                  inputValue={values.infosDossier.Evenement}
                  handleChange={(e) => changeInput(e, "Evenement")}
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
                    inputValue={values.infosDossier.actOf}
                    handleChange={(e) => changeInput(e, "actOf")}
                  />
                  <LabeledInput
                    id="program"
                    type="text"
                    label="Programme"
                    inputValue={values.infosDossier.prgm}
                    handleChange={(e) => changeInput(e, "prgm")}
                  />
                  <LabeledInput
                    id="partfonc"
                    type="text"
                    label="Participation foncière"
                    inputValue={values.infosDossier.partFonc}
                    handleChange={(e) => changeInput(e, "partFonc")}
                  />
                </InfoCompGrid>
              </InputsGroup>
            </InputsContainer>
            <StepBtnGroup>
              <StepBtn type="submit">Next</StepBtn>
            </StepBtnGroup>
          </FormContainer>
          {/* <LabeledInput id="adms" type="text" label="Admissibilité" />
        <LabeledInput id="status" type="text" label="Status" /> */}
        </form>
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  dossiers: selectDossiers,
});

const mapDispatchToProps = (dispatch) => ({
  addInfosDossier: (newDossiers) => dispatch(addInfosDossier(newDossiers)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfosDossierTest);
