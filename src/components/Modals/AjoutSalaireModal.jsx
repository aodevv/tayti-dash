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
import LabeledSelect from "../FormElements/LabeledSelect";
import { ButtonM } from "../Mix/Mix.styles";

//import { SelectPicker, Button } from "rsuite";

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
  const [mtRec, setMtRec] = useState(0); // MT Rec = round(brut admissible + RRQ + AE + Vac + RQAP + FSST + CSST + Autres)
  const [hReg, setHReg] = useState(0);
  const [hSup1, setHSup1] = useState(0);
  const [hSup2, setHSup2] = useState(0);
  const [tReg, setTReg] = useState(0);
  const [tSup1, setTSup1] = useState(0);
  const [tSup2, setTSup2] = useState(0);
  const [tauxVac, setTauxVac] = useState(0);
  const [ae, setAe] = useState(false);
  const [rrq, setRrq] = useState(false);
  const [rqap, setRqap] = useState(false);
  const [fss, setFss] = useState(false);
  const [csst, setCsst] = useState(false);

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
      //reset();
      setShowModal(false);
    }
  };

  const clearStates = () => {
    setName("");
    setStatus("");
    setDatePer("");
    setMtRec(0);
    setHReg(0);
    setHSup1(0);
    setHSup2(0);
    setTReg(0);
    setTSup1(0);
    setTSup2(0);
    setTauxVac(0);
    setAe(false);
    setRrq(false);
    setRqap(false);
    setFss(false);
    setCsst(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(status);
    const total = calcSalRec();
    console.log(total);
    const salaireObj = {
      name: name,
      status: status,
      date_per: datePer,
      montant_rec: total,
      Hreg: parseFloat(hReg),
      Hsup: parseFloat(hSup1),
      Treg: parseFloat(tReg),
      Tsup: parseFloat(tReg * 1.5),
      taux_vac: parseFloat(tauxVac),
      ae: ae,
      rrq: rrq,
      rqap: rqap,
      fss: fss,
      csst: csst,
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

  const calcSalRec = () => {
    const RRQS = {
      2022: 0.0525,
      2021: 0.0511,
      2020: 0.049,
      2019: 0.0475,
      2018: 0.0456,
      2017: 0.0432,
    };
    const RQAPS = {
      2022: 0.00782,
      2021: 0.00772,
      2020: 0.00741,
      2019: 0.0072,
      2018: 0.007,
      2017: 0.00655,
    };
    const FSSS = {
      2022: 0.0426,
      2021: 0.041,
      2020: 0.037,
      2019: 0.032,
      2018: 0.03,
      2017: 0.03,
    };
    var total, salBrut;
    if (status === "Occasionnel") {
      salBrut = hReg * tReg + hSup1 * tSup1 + hSup2 * tSup2;
    } else if (status === "Régulier") {
      salBrut = hSup1 * tSup1 + hSup2 * tSup2;
    }
    const date = datePer.split("-")[0];
    console.log(RRQS[date]);
    total = salBrut;
    total = tauxVac > 0 ? total + salBrut * tauxVac : total;

    if (RRQS[date]) {
      console.log(RRQS[date]);
      total = rrq ? total + salBrut * RRQS[date] : total;
    }
    total = ae ? total + salBrut * 0.0206 : total;

    if (RQAPS[date]) {
      total = rqap ? total + salBrut * RQAPS[date] : total;
    }

    if (FSSS[date]) {
      total = fss ? total + salBrut * FSSS[date] : total;
    }
    total = csst ? total + salBrut * 0.23 : total;
    return Math.round(total * 100) / 100;
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
              <ModalCloseBtn onClick={() => setShowModal(false)} />
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
                        {/* <SelectPicker
                          data={["Occ", "Reg"]}
                          style={{ width: 224 }}
                        />
                        <Button appearance="primary"> Hello world </Button> */}
                        <LabeledSelect
                          id="stat"
                          label="Status"
                          options={["Régulier", "Occasionnel"]}
                          handleChange={(e) => setStatus(e.target.value)}
                        />

                        {/* <LabeledInput
                          id="status"
                          type="text"
                          label="Status"
                          inputValue={status}
                          handleChange={(e) => setStatus(e.target.value)}
                        /> */}
                        <LabeledInput
                          id="datePer"
                          type="date"
                          label="Date de fin de la période de paix"
                          inputValue={datePer}
                          handleChange={(e) => setDatePer(e.target.value)}
                        />
                        <div>
                          <h2>Heures réclamées:</h2>
                          <SplitInputs>
                            <LabeledInput
                              id="hReg"
                              type="number"
                              label="Régulières"
                              inputValue={hReg}
                              handleChange={(e) =>
                                setHReg(parseFloat(e.target.value))
                              }
                            />
                            <LabeledInput
                              id="hSup"
                              type="number"
                              label="Supplementaires 1"
                              inputValue={hSup1}
                              handleChange={(e) =>
                                setHSup1(parseFloat(e.target.value))
                              }
                            />
                            <LabeledInput
                              id="hSup"
                              type="number"
                              label="Supplementaires 2"
                              inputValue={hSup2}
                              handleChange={(e) =>
                                setHSup2(parseFloat(e.target.value))
                              }
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
                              handleChange={(e) => {
                                setTReg(parseFloat(e.target.value));
                                setTSup1(parseFloat(e.target.value) * 1.5);
                              }}
                            />
                            <LabeledInput
                              id="tSup"
                              type="number"
                              label="Supplementaires 1"
                              inputValue={parseFloat(tReg) * 1.5}
                              handleChange={(e) =>
                                setTSup1(parseFloat(e.target.value))
                              }
                            />
                            <LabeledInput
                              id="tSup"
                              type="number"
                              label="Supplementaires 2"
                              inputValue={tReg * 2}
                              handleChange={(e) =>
                                setTSup2(parseFloat(e.target.value))
                              }
                            />
                          </SplitInputs>
                        </div>
                        <LabeledInput
                          id="tauxVac"
                          type="number"
                          label="Taux de vacances"
                          inputValue={tauxVac}
                          handleChange={(e) =>
                            setTauxVac(parseFloat(e.target.value))
                          }
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
                        <Checkbox>
                          <label>
                            F.S.S
                            <input
                              name="fss"
                              type="checkbox"
                              checked={fss}
                              onChange={(e) => setFss(e.target.checked)}
                            />
                          </label>
                        </Checkbox>
                        <Checkbox>
                          <label>
                            C.S.S.T
                            <input
                              name="csst"
                              type="checkbox"
                              checked={csst}
                              onChange={(e) => setCsst(e.target.checked)}
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
