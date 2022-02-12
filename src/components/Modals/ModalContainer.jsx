import React, { useRef, useState } from "react";
import { useSpring, animated } from "react-spring";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDossiers } from "../../redux/DossierInfos/infosDossier.selectors";
import { addInfosDossier } from "../../redux/DossierInfos/infosDossier.actions";

import {
  selectDABFactures,
  selectMPTFactures,
  selectMIFactures,
} from "../../redux/Factures/Factures.selectors";
import {
  addFactureDAB,
  addFactureMPT,
  addFactureMI,
} from "../../redux/Factures/Factures.actions";

import {
  selectDABSalaires,
  selectMISalaires,
  selectMPTSalaires,
} from "../../redux/Salaires/salaires.selectors";
import {
  addSalairesDAB,
  addSalairesMPT,
  addSalairesMI,
} from "../../redux/Salaires/salaires.actions";

import {
  selectDABMachineries,
  selectMPTMachineries,
  selectMIMachineries,
} from "../../redux/Machineries/machineries.selectors";
import {
  addMachineriesMPT,
  addMachineriesDAB,
  addMachineriesMI,
} from "../../redux/Machineries/machineries.actions";

import {
  Background,
  AjoutModalContainer,
  ModalCloseBtn,
  SplitModals,
} from "./Modals.styles";

import CurrentStep from "../AjoutDossierForm/CurrentStep";
import StepMonitor from "../FormSteps/StepMonitor";

const ModalContainer = ({
  showModal,
  setShowModal,
  dossiers,
  addInfosDossier,
  DABFactures,
  addFactureDAB,
  MPTFactures,
  addFactureMPT,
  MIFactures,
  addFactureMI,
  DABSalaires,
  addSalairesDAB,
  MPTSalaires,
  addSalairesMPT,
  MISalaires,
  addSalairesMI,
  DABMachineries,
  addMachineriesDAB,
  MPTMachineries,
  addMachineriesMPT,
  MIMachineries,
  addMachineriesMI,
}) => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    infosDossier: {
      Numero: "",
      Evenement: "",
      datEv: "",
      datOuv: "",
      status: null,
      Admisibilité: null,
      MR: 0,
      MA: 0,
      MV: 0,
      actOf: "",
      prgm: "",
      partFonc: "",
    },
    dab: {
      factures: [],
      salaires: [],
      machineries: [],
    },
    mpt: {
      factures: [],
      salaires: [],
      machineries: [],
    },
    mi: {
      factures: [],
      salaires: [],
      machineries: [],
    },
  });

  // go back to previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // proceed to the next step
  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      addInfosDossier([...dossiers, values.infosDossier]);
      const numDos = values.infosDossier.Numero;
      addFactureDAB({ ...DABFactures, [numDos]: values.dab.factures });
      addFactureMI({ ...MIFactures, [numDos]: values.mi.factures });
      addFactureMPT({ ...MPTFactures, [numDos]: values.mpt.factures });
      addSalairesDAB({ ...DABSalaires, [numDos]: values.dab.salaires });
      addSalairesMI({ ...MISalaires, [numDos]: values.mi.salaires });
      addSalairesMPT({ ...MPTSalaires, [numDos]: values.mpt.salaires });

      addMachineriesDAB({
        ...DABMachineries,
        [numDos]: values.dab.machineries,
      });
      addMachineriesMI({ ...MIMachineries, [numDos]: values.mi.machineries });
      addMachineriesMPT({
        ...MPTMachineries,
        [numDos]: values.mpt.machineries,
      });
      handleClose();
    }
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
      handleClose();
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setStep(1);
  };

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <AjoutModalContainer showModal={showModal} large>
              <ModalCloseBtn onClick={handleClose} />
              <SplitModals>
                <StepMonitor step={step} />
                <CurrentStep
                  step={step}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  //handleChange={handleChange}
                  values={values}
                  setValues={setValues}
                />
              </SplitModals>
            </AjoutModalContainer>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  DABFactures: selectDABFactures,
  MPTFactures: selectMPTFactures,
  MIFactures: selectMIFactures,
  DABSalaires: selectDABSalaires,
  MPTSalaires: selectMPTSalaires,
  MISalaires: selectMISalaires,
  DABMachineries: selectDABMachineries,
  MPTMachineries: selectMPTMachineries,
  MIMachineries: selectMIMachineries,
  dossiers: selectDossiers,
});

const mapDispatchToProps = (dispatch) => ({
  addInfosDossier: (newDossiers) => dispatch(addInfosDossier(newDossiers)),
  addFactureDAB: (newFacts) => dispatch(addFactureDAB(newFacts)),
  addFactureMPT: (newFacts) => dispatch(addFactureMPT(newFacts)),
  addFactureMI: (newFacts) => dispatch(addFactureMI(newFacts)),
  addSalairesDAB: (newFacts) => dispatch(addSalairesDAB(newFacts)),
  addSalairesMPT: (newFacts) => dispatch(addSalairesMPT(newFacts)),
  addSalairesMI: (newFacts) => dispatch(addSalairesMI(newFacts)),
  addMachineriesDAB: (newFacts) => dispatch(addMachineriesDAB(newFacts)),
  addMachineriesMPT: (newFacts) => dispatch(addMachineriesMPT(newFacts)),
  addMachineriesMI: (newFacts) => dispatch(addMachineriesMI(newFacts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
