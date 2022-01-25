import React, { useRef, useState } from "react";
import { useSpring, animated } from "react-spring";

import {
  Background,
  AjoutModalContainer,
  ModalCloseBtn,
  Checkbox,
} from "./Modals.styles";

import { FormContainer } from "../FormSteps/FormSteps.Styles";
import { InputsContainer, InputsGroup } from "../FormSteps/FormSteps.Styles";

import LabeledInput from "../FormElements/LabeledInput";
import LabeledTextArea from "../FormElements/LabeledTextArea";

import { ButtonM } from "../Mix/Mix.styles";

const AjoutFactureModal = ({ showModal, setShowModal }) => {
  const [factRef, setFactRef] = useState("");
  const [factDesc, setFactDesc] = useState("");
  const [factDate, setFactDate] = useState("");
  const [siteConc, setSiteConc] = useState("");
  const [mr, setMr] = useState("");
  const [tax, setTax] = useState(false);

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
    setFactRef("");
    setFactDesc("");
    setFactDate("");
    setSiteConc("");
    setMr("");
    setTax(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearStates();
  };

  const handleCheck = (e) => {
    setTax(e.target.checked);
  };

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <AjoutModalContainer showModal={showModal}>
              <ModalCloseBtn onClick={() => setShowModal(false)} />
              <div>
                <h1 className="u-mb-s">Nouvelle facture</h1>
                <form onSubmit={handleSubmit}>
                  <FormContainer>
                    <InputsContainer>
                      <InputsGroup>
                        <h2>Formulaire:</h2>
                        <LabeledInput
                          id="factRef"
                          type="text"
                          label="Référence Facture"
                          inputValue={factRef}
                          handleChange={(e) => setFactRef(e.target.value)}
                        />
                        <LabeledTextArea
                          id="factDesc"
                          label="Déscription facture"
                          inputValue={factDesc}
                          handleChange={(e) => setFactDesc(e.target.value)}
                          rows={5}
                          cols={50}
                        />
                        <LabeledInput
                          id="factDate"
                          type="date"
                          label="Date de la facture"
                          inputValue={factDate}
                          handleChange={(e) => setFactDate(e.target.value)}
                        />
                        <LabeledInput
                          id="siteConc"
                          type="text"
                          label="Sites concernés"
                          inputValue={siteConc}
                          handleChange={(e) => setSiteConc(e.target.value)}
                        />
                        <LabeledInput
                          id="mr"
                          type="number"
                          label="Montant réclamé avant tax"
                          inputValue={mr}
                          handleChange={(e) => setMr(e.target.value)}
                        />
                        <Checkbox>
                          <label>
                            Taxable ?
                            <input
                              name="tax"
                              type="checkbox"
                              checked={tax}
                              onChange={handleCheck}
                            />
                          </label>
                        </Checkbox>
                      </InputsGroup>
                    </InputsContainer>
                    <ButtonM type="submit">Ajouter</ButtonM>
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

export default AjoutFactureModal;
