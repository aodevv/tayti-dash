import React, { useRef, useState, useEffect } from "react";

import { useSpring, animated } from "react-spring";

import { connect } from "react-redux";

import {
  addSalairesDAB,
  addSalairesMPT,
  addSalairesMI,
} from "../../redux/Salaires/salaires.actions";

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
  setSalaires,
  addSalairesDAB,
  addSalairesMI,
  addSalairesMPT,
}) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [datePer, setDatePer] = useState("");
  const [mtRec, setMtRec] = useState(0);
  const [hReg, setHReg] = useState(0);
  const [hSup, setHSup] = useState(0);
  const [tReg, setTReg] = useState(0);
  const [tSup, setTSup] = useState(0);
  const [tauxVac, setTauxVac] = useState(0);
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
    setHReg(0);
    setHSup(0);
    setTReg(0);
    setTSup(0);
    setTauxVac(0);
    setAe(false);
    setRrq(false);
    setRqap(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const salaireObj = {
      name: name,
      status: status,
      date_per: datePer,
      montant_rec: parseFloat(mtRec),
      Hreg: parseFloat(hReg),
      Hsup: parseFloat(hSup),
      Treg: parseFloat(tReg),
      Tsup: parseFloat(tSup),
      taux_vac: parseFloat(tauxVac),
      ae: ae,
      rrq: rrq,
      rqap: rqap,
    };
    let newSalaires;
    if (type !== "new") {
      newSalaires = [...salaires[dossier], salaireObj];
      Object.keys(salaires).map(function (key, index) {
        if (key === dossier) {
          salaires[key] = newSalaires;
        }
      });
    } else {
      newSalaires = [...salaires, salaireObj];
    }

    switch (type) {
      case "dab":
        console.log("hereee");
        addSalairesDAB(salaires);
        break;
      case "mpt":
        addSalairesMPT(salaires);
        break;
      case "mi":
        addSalairesMI(salaires);
        break;
      case "new":
        setSalaires(newSalaires);
        break;
      default:
        break;
    }
    reset();
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
                          label="Salaire réclamé"
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
                              label="Supplementaires 1"
                              inputValue={hSup}
                              handleChange={(e) => setHSup(e.target.value)}
                            />
                            <LabeledInput
                              id="hSup"
                              type="number"
                              label="Supplementaires 2"
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
                              label="Supplementaires 1"
                              inputValue={tSup}
                              handleChange={(e) => setTSup(e.target.value)}
                            />
                            <LabeledInput
                              id="tSup"
                              type="number"
                              label="Supplementaires 2"
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

const mapDispatchToProps = (dispatch) => ({
  addSalairesDAB: (newFacts) => dispatch(addSalairesDAB(newFacts)),
  addSalairesMPT: (newFacts) => dispatch(addSalairesMPT(newFacts)),
  addSalairesMI: (newFacts) => dispatch(addSalairesMI(newFacts)),
});

export default connect(null, mapDispatchToProps)(AjoutSalaireModal);
