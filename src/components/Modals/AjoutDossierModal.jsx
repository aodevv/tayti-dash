import React, { useRef, useState } from "react";
import { useSpring, animated } from "react-spring";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDossiers } from "../../redux/DossierInfos/infosDossier.selectors";
import { addInfosDossier } from "../../redux/DossierInfos/infosDossier.actions";

import {
  Background,
  AjoutModalContainer,
  ModalCloseBtn,
} from "./Modals.styles";

import { FormContainer } from "../FormSteps/FormSteps.Styles";
import {
  InputsContainer,
  InputsGroup,
  InfoGrid,
  InfoCompGrid,
} from "../FormSteps/FormSteps.Styles";

import LabeledInput from "../FormElements/LabeledInput";
import LabeledTextArea from "../FormElements/LabeledTextArea";

import { ButtonM } from "../Mix/Mix.styles";

const AjoutDossierModal = ({
  showModal,
  setShowModal,
  dossiers,
  addInfosDossier,
}) => {
  const [step, setStep] = useState(1);

  const [numDos, setNumDos] = useState("");
  const [evDate, setEvDate] = useState("");
  const [opDate, setOpDate] = useState("");
  const [desc, setDesc] = useState("");
  const [actof, setActOf] = useState("");
  const [prog, setProg] = useState("");
  const [partFonc, setPartFonc] = useState("");

  // go back to previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // proceed to the next step
  const nextStep = () => {
    setStep(step + 1);
  };

  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 100,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

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
    addInfosDossier([...dossiers, newDos]);
    setShowModal(false);
    clearStates();
  };

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <AjoutModalContainer showModal={showModal}>
              <ModalCloseBtn onClick={() => setShowModal(false)} />
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
                    <ButtonM type="submit">Ajouter</ButtonM>
                  </FormContainer>
                  {/* <LabeledInput id="adms" type="text" label="Admissibilité" />
        <LabeledInput id="status" type="text" label="Status" /> */}
                </form>
              </div>
            </AjoutModalContainer>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  dossiers: selectDossiers,
});

const mapDispatchToProps = (dispatch) => ({
  addInfosDossier: (newDossiers) => dispatch(addInfosDossier(newDossiers)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AjoutDossierModal);
