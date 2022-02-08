import React, { useRef, useState, useEffect } from "react";

import { useSpring, animated } from "react-spring";

import {
  Background,
  AjoutModalContainer,
  ModalCloseBtn,
  Checkbox,
} from "./Modals.styles";

import { FormContainer } from "../FormSteps/FormSteps.Styles";
import {
  InputsContainer,
  InputsGroup,
  SplitInputs,
} from "../FormSteps/FormSteps.Styles";

import LabeledInput from "../FormElements/LabeledInput";
import { ButtonM } from "../Mix/Mix.styles";

const AjoutSalaireModal = ({
  showModal,
  setShowModal,
  salaires,
  type,
  dossier,
  isEdit,
  setIsEdit,
  salaireToEdit,
}) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [datePer, setDatePer] = useState("");
  const [mtRec, setMtRec] = useState("");
  const [hReg, setHReg] = useState("");
  const [hSup, setHSup] = useState("");
  const [tReg, setTReg] = useState("");
  const [tSup, setTSup] = useState("");
  const [tauxVac, setTauxVac] = useState("");
  const [ae, setAe] = useState(false);
  const [rrq, setRrq] = useState(false);
  const [rqap, setRqap] = useState(false);

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
      reset();
    }
  };

  const clearStates = () => {
    setName("");
    setStatus("");
    setDatePer("");
    setMtRec("");
    setHReg("");
    setHSup("");
    setTReg("");
    setTSup("");
    setTauxVac("");
    setAe(false);
    setRrq(false);
    setRqap(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const reset = () => {
    setShowModal(false);
    clearStates();
    setIsEdit(false);
  };
  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <AjoutModalContainer showModal={showModal}>
              <ModalCloseBtn onClick={reset} />
              <div>
                <h1 className="u-mb-s">
                  {isEdit ? "Modifier salaire" : "Nouveau salaire"}
                </h1>
                <form onSubmit={handleSubmit}>
                  <FormContainer>
                    <InputsContainer>
                      <InputsGroup>
                        <h2>Formulaire:</h2>
                        <LabeledInput
                          id="name"
                          type="text"
                          label="Nom complet"
                          inputValue={name}
                          handleChange={(e) => setName(e.target.value)}
                          disabled={isEdit}
                        />

                        <LabeledInput
                          id="status"
                          type="text"
                          label="Status"
                          inputValue={status}
                          handleChange={(e) => setStatus(e.target.value)}
                        />
                        <LabeledInput
                          id="datePer"
                          type="date"
                          label="Date de la facture"
                          inputValue={datePer}
                          handleChange={(e) => setDatePer(e.target.value)}
                        />
                        <LabeledInput
                          id="mtRec"
                          type="number"
                          label="Montant réclamé avant tax"
                          inputValue={mtRec}
                          handleChange={(e) => setMtRec(e.target.value)}
                        />
                        <div>
                          <h2>Heures réclamées:</h2>
                          <SplitInputs>
                            <LabeledInput
                              id="hReg"
                              type="number"
                              label="Régulières"
                              inputValue={hReg}
                              handleChange={(e) => setHReg(e.target.value)}
                            />
                            <LabeledInput
                              id="hSup"
                              type="number"
                              label="Supplementaires"
                              inputValue={hSup}
                              handleChange={(e) => setHSup(e.target.value)}
                            />
                          </SplitInputs>
                        </div>
                        <div>
                          <h2>Taux horaires:</h2>
                          <SplitInputs>
                            <LabeledInput
                              id="tReg"
                              type="number"
                              label="Réguliers"
                              inputValue={tReg}
                              handleChange={(e) => setTReg(e.target.value)}
                            />
                            <LabeledInput
                              id="tSup"
                              type="number"
                              label="Supplementaires"
                              inputValue={tSup}
                              handleChange={(e) => setTSup(e.target.value)}
                            />
                          </SplitInputs>
                        </div>
                        <LabeledInput
                          id="tauxVac"
                          type="number"
                          label="Taux de vacances"
                          inputValue={tauxVac}
                          handleChange={(e) => setTauxVac(e.target.value)}
                        />
                        <Checkbox>
                          <label>
                            A.E
                            <input
                              name="ae"
                              type="checkbox"
                              checked={ae}
                              onChange={(e) => setAe(e.target.checked)}
                            />
                          </label>
                        </Checkbox>
                        <Checkbox>
                          <label>
                            R.R.Q
                            <input
                              name="rrq"
                              type="checkbox"
                              checked={rrq}
                              onChange={(e) => setRrq(e.target.checked)}
                            />
                          </label>
                        </Checkbox>
                        <Checkbox>
                          <label>
                            R.Q.A.P
                            <input
                              name="rqap"
                              type="checkbox"
                              checked={rqap}
                              onChange={(e) => setRqap(e.target.checked)}
                            />
                          </label>
                        </Checkbox>
                      </InputsGroup>
                    </InputsContainer>
                    <ButtonM type="submit">
                      {isEdit ? "Modifier" : "Ajouter"}
                    </ButtonM>
                  </FormContainer>
                </form>
              </div>
            </AjoutModalContainer>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default AjoutSalaireModal;
