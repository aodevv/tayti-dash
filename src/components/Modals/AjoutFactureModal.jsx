import React, { useRef, useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

import {
  addFactureDAB,
  addFactureMPT,
  addFactureMI,
} from "../../redux/Factures/Factures.actions";

import { connect } from "react-redux";

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

const AjoutFactureModal = ({
  showModal,
  setShowModal,
  factures,
  type,
  dossier,
  addFactureDAB,
  addFactureMPT,
  addFactureMI,
  isEdit,
  setIsEdit,
  factToEdit,
  setFactures,
}) => {
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

  useEffect(() => {
    // Update the document title using the browser API
    if (isEdit) {
      console.log(factToEdit);
      const { id, desc_fact, date_fact, site_con, montant_rec } = factToEdit;
      setFactRef(id);
      setFactDesc(desc_fact);
      const [mm, dd, yyyy] = date_fact.split("/");
      setFactDate(`${yyyy}-${mm}-${dd}`);
      console.log(`${yyyy}-${mm}-${dd}`);
      setSiteConc(site_con);
      setMr(montant_rec);
      setTax(factToEdit.tax);
    }
  }, [isEdit, factToEdit]);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      reset();
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
    const factToAdd = {
      id: factRef,
      desc_fact: factDesc,
      date_fact: factDate,
      site_con: siteConc,
      montant_rec: mr,
      tax: tax,
    };
    let newFacts;
    if (type !== "new") {
      newFacts = [...factures[dossier], factToAdd];
      Object.keys(factures).map(function (key, index) {
        if (key === dossier) {
          factures[key] = newFacts;
        }
      });
    } else {
      newFacts = [...factures, factToAdd];
      console.log(newFacts);
    }

    switch (type) {
      case "dab":
        console.log("hereee");
        addFactureDAB(factures);
        break;
      case "mpt":
        addFactureMPT(factures);
        break;
      case "mi":
        addFactureMI(factures);
        break;
      case "new":
        setFactures(newFacts);
        break;
      default:
        break;
    }
    reset();
  };

  const handleCheck = (e) => {
    setTax(e.target.checked);
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
                  {isEdit ? "Modifier facture" : "Nouvelle facture"}
                </h1>
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
                          disabled={isEdit}
                        />
                        <LabeledTextArea
                          id="factDesc"
                          label="Déscription facture"
                          inputValue={factDesc}
                          handleChange={(e) => setFactDesc(e.target.value)}
                          rows={5}
                          cols={61}
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
  addFactureDAB: (newFacts) => dispatch(addFactureDAB(newFacts)),
  addFactureMPT: (newFacts) => dispatch(addFactureMPT(newFacts)),
  addFactureMI: (newFacts) => dispatch(addFactureMI(newFacts)),
});
export default connect(null, mapDispatchToProps)(AjoutFactureModal);
