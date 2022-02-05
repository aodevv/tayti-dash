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

import { ButtonM } from "../Mix/Mix.styles";

const InfosDossierTest = ({
  nextStep,
  dossiers,
  addInfosDossier,
  values,
  setValues,
}) => {
  const [numDos, setNumDos] = useState("");
  const [evDate, setEvDate] = useState("");
  const [opDate, setOpDate] = useState("");
  const [desc, setDesc] = useState("");
  const [actof, setActOf] = useState("");
  const [prog, setProg] = useState("");
  const [partFonc, setPartFonc] = useState("");

  const clearStates = () => {
    setNumDos("");
    setEvDate("");
    setOpDate("");
    setDesc("");
    setActOf("");
    setProg("");
    setPartFonc("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDos = {
      Numero: numDos,
      Evenement: desc,
      "Date d'evenement": evDate,
      status: null,
      Admisibilité: false,
      MR: 0,
      MA: 0,
      MV: 0,
      Participation: "",
    };
    //addInfosDossier([...dossiers, newDos]);
    //clearStates();
    console.log("submited");
    setValues({ ...values, infosDossier: newDos });
    nextStep();
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
                    inputValue={numDos}
                    handleChange={(e) => setNumDos(e.target.value)}
                  />
                  <LabeledInput
                    id="datev"
                    type="date"
                    label="Date évenement"
                    inputValue={evDate}
                    handleChange={(e) => setEvDate(e.target.value)}
                  />
                  <LabeledInput
                    id="datouv"
                    type="date"
                    label="Date d'ouverture"
                    inputValue={opDate}
                    handleChange={(e) => setOpDate(e.target.value)}
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
                  inputValue={desc}
                  handleChange={(e) => setDesc(e.target.value)}
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
                    inputValue={actof}
                    handleChange={(e) => setActOf(e.target.value)}
                  />
                  <LabeledInput
                    id="program"
                    type="text"
                    label="Programme"
                    inputValue={prog}
                    handleChange={(e) => setProg(e.target.value)}
                  />
                  <LabeledInput
                    id="partfonc"
                    type="text"
                    label="Participation foncière"
                    inputValue={partFonc}
                    handleChange={(e) => setPartFonc(e.target.value)}
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
