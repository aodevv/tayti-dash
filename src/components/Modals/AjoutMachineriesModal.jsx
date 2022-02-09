import React, { useRef, useState, useEffect } from "react";

import { useSpring, animated } from "react-spring";

import { connect } from "react-redux";

import {
  addMachineriesDAB,
  addMachineriesMPT,
  addMachineriesMI,
} from "../../redux/Machineries/machineries.actions";

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

const AjoutMachineriesModal = ({
  showModal,
  setShowModal,
  machineries,
  type,
  dossier,
  isEdit,
  setIsEdit,
  machinerieToEdit,
  setMachineries,
  addMachineriesDAB,
  addMachineriesMI,
  addMachineriesMPT,
}) => {
  const [code, setCode] = useState("");
  const [desc, setDesc] = useState("");
  const [care, setCare] = useState("");
  const [siteConc, setSiteConc] = useState("");
  const [hrsFonc, setHrsFonc] = useState(0);
  const [hrsStat, setHrsStat] = useState(0);

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
    setCode("");
    setDesc("");
    setCare("");
    setSiteConc("");
    setHrsFonc(0);
    setHrsStat(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const machineObj = {
      code: code,
      desc: desc,
      care: care,
      site_conc: siteConc,
      hrs_fonc: parseFloat(hrsFonc),
      hrs_stat: parseFloat(hrsStat),
    };
    let newMachines;
    if (type !== "new") {
      newMachines = [...machineries[dossier], machineObj];
      Object.keys(machineries).map(function (key, index) {
        if (key === dossier) {
          machineries[key] = newMachines;
        }
      });
    } else {
      newMachines = [...machineries, machineObj];
    }

    switch (type) {
      case "dab":
        addMachineriesDAB(machineries);
        break;
      case "mpt":
        addMachineriesMPT(machineries);
        break;
      case "mi":
        addMachineriesMI(machineries);
        break;
      case "new":
        setMachineries(newMachines);
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
                  {isEdit ? "Modifier machine" : "Nouvelle machine"}
                </h1>
                <form onSubmit={handleSubmit}>
                  <FormContainer>
                    <InputsContainer>
                      <InputsGroup>
                        <h2>Formulaire:</h2>
                        <LabeledInput
                          id="code"
                          type="text"
                          label="Code et appelation"
                          inputValue={code}
                          handleChange={(e) => setCode(e.target.value)}
                          disabled={isEdit}
                        />

                        <LabeledInput
                          id="desc"
                          type="text"
                          label="Description"
                          inputValue={desc}
                          handleChange={(e) => setDesc(e.target.value)}
                        />
                        <LabeledInput
                          id="care"
                          type="text"
                          label="Care"
                          inputValue={care}
                          handleChange={(e) => setCare(e.target.value)}
                        />
                        <LabeledInput
                          id="siteConc"
                          type="text"
                          label="Site concérné"
                          inputValue={siteConc}
                          handleChange={(e) => setSiteConc(e.target.value)}
                        />
                        <div>
                          <h2>Heures de service</h2>
                          <SplitInputs>
                            <LabeledInput
                              id="hrsFonc"
                              type="number"
                              label="En fonction"
                              inputValue={hrsFonc}
                              handleChange={(e) => setHrsFonc(e.target.value)}
                            />
                            <LabeledInput
                              id="hrsStat"
                              type="number"
                              label="Stationaire"
                              inputValue={hrsStat}
                              handleChange={(e) => setHrsStat(e.target.value)}
                            />
                          </SplitInputs>
                        </div>
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
  addMachineriesDAB: (newFacts) => dispatch(addMachineriesDAB(newFacts)),
  addMachineriesMPT: (newFacts) => dispatch(addMachineriesMPT(newFacts)),
  addMachineriesMI: (newFacts) => dispatch(addMachineriesMI(newFacts)),
});

export default connect(null, mapDispatchToProps)(AjoutMachineriesModal);
