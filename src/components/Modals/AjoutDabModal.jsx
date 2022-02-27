import React, { useRef, useState, useEffect } from "react";

import { useSpring, animated } from "react-spring";

import { connect } from "react-redux";

import { addDab } from "../../redux/DAB/DAB.actions";

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

const AjoutDabsModal = ({
  showModal,
  setShowModal,
  dabs,
  type,
  dossier,
  isEdit,
  setIsEdit,
  dabToEdit,
  setDabs,
  addDab,
}) => {
  const [id, setId] = useState("");
  const [site, setSite] = useState("");
  const [nature, setNature] = useState("");
  const [partEnd, setPartEnd] = useState("");
  const [pourEnd, setPourEnd] = useState(0);
  const [typeRet, setTypeRet] = useState("");
  const [adm, setAdm] = useState(0);
  const [pourAdm, setPourAdm] = useState(0);
  const [totRec, setTotRec] = useState(0);

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
    setId("");
    setSite("");
    setNature("");
    setPourEnd(0);
    setPourAdm(0);
    setTypeRet(0);
    setAdm(0);
    setTotRec(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dabObj = {
      id: id,
      site: site,
      nature: nature,
      part_end: partEnd,
      pour_end: pourEnd,
      pour_adm: pourAdm,
      type_ret: typeRet,
      adm: adm,
      tot_rec: totRec,
    };
    let newDabs;
    if (type !== "new") {
      newDabs = [...dabs[dossier], dabObj];
      Object.keys(dabs).map(function (key, index) {
        if (key === dossier) {
          dabs[key] = newDabs;
        }
      });
    } else {
      newDabs = [...dabs, dabObj];
    }

    if (type === "new") {
      setDabs(newDabs);
    } else {
      addDab(dabs);
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
                          id="id"
                          type="text"
                          label="Identification"
                          inputValue={id}
                          handleChange={(e) => setId(e.target.value)}
                          disabled={isEdit}
                        />

                        <LabeledInput
                          id="site"
                          type="text"
                          label="Site"
                          inputValue={site}
                          handleChange={(e) => setSite(e.target.value)}
                        />

                        <LabeledInput
                          id="pourEnd"
                          type="number"
                          label="Pourcentage endommagé"
                          inputValue={pourEnd}
                          handleChange={(e) =>
                            setPourEnd(parseFloat(e.target.value))
                          }
                        />
                        <LabeledInput
                          id="nature"
                          type="text"
                          label="Nature"
                          inputValue={nature}
                          handleChange={(e) => setNature(e.target.value)}
                        />
                        <LabeledInput
                          id="partEnd"
                          type="text"
                          label="Partie endommagée"
                          inputValue={partEnd}
                          handleChange={(e) => setPartEnd(e.target.value)}
                        />
                        <div>
                          <h2>Heures de service</h2>
                          <SplitInputs>
                            <LabeledInput
                              id="typeRet"
                              type="text"
                              label="Type rétabli"
                              inputValue={typeRet}
                              handleChange={(e) => setTypeRet(e.target.value)}
                            />
                            <LabeledInput
                              id="adm"
                              type="number"
                              label="Admissible"
                              inputValue={adm}
                              handleChange={(e) =>
                                setAdm(parseFloat(e.target.value))
                              }
                            />
                          </SplitInputs>
                        </div>
                        <LabeledInput
                          id="pourAdm"
                          type="number"
                          label="Pourcentage admissible"
                          inputValue={pourAdm}
                          handleChange={(e) =>
                            setPourAdm(parseFloat(e.target.value))
                          }
                        />
                        <LabeledInput
                          id="totRec"
                          type="number"
                          label="Total réclamé"
                          inputValue={totRec}
                          handleChange={(e) =>
                            setTotRec(parseFloat(e.target.value))
                          }
                        />
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
  addDab: (newDabs) => dispatch(addDab(newDabs)),
});

export default connect(null, mapDispatchToProps)(AjoutDabsModal);
