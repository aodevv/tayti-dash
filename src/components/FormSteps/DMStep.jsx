import React, { useState, useEffect } from "react";

import { StepBtnGroup, StepTables } from "./FormSteps.Styles";

import { StepBtn } from "../FormElements/Buttons";

import FacturesTab from "../Tables/Factures/FacturesTab";
import AjoutFactureModal from "../Modals/AjoutFactureModal";

import SalairesTab from "../Tables/Salaires/SalairesTab";
import AjoutSalaireModal from "../Modals/AjoutSalaireModal";

import MachineriesTab from "../Tables/Machineries/MachineriesTab";
import AjoutMachineriesModal from "../Modals/AjoutMachineriesModal";

const DMStep = ({ prevStep, nextStep, values, setValues, stepName }) => {
  const [showFactModal, setShowFactModal] = useState(false);
  const [showSalModal, setShowSalModal] = useState(false);
  const [showMachModal, setShowMachModal] = useState(false);
  useEffect(() => {
    console.log(values);
    setFactures(values[stepName].factures);
    setSalaires(values[stepName].salaires);
    setMachineries(values[stepName].machineries);
  }, [stepName, values]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      [stepName]: {
        factures: factures,
        salaires: salaires,
        machineries: machineries,
      },
    });

    nextStep();
  };

  const [factures, setFactures] = useState(values[stepName].factures);
  const [salaires, setSalaires] = useState(values[stepName].salaires);
  const [machineries, setMachineries] = useState(values[stepName].machineries);

  const [isFactEdit, setIsFactEdit] = useState(false);
  const [isSalEdit, setIsSalEdit] = useState(false);
  const [isMachEdit, setIsMachEdit] = useState(false);
  const [factToEdit, setFactToEdit] = useState(null);

  const stepFullName = {
    dab: "Dommage aux biens",
    mpt: "Mesures préventives temporaires",
    mi: "Mesure d'interventions",
  };

  return (
    <div>
      <h1>{stepFullName[stepName]}</h1>
      <StepTables>
        <h2>Factures</h2>
        <StepBtn onClick={() => setShowFactModal(true)} type="button">
          Ajouter Facture
        </StepBtn>
        <FacturesTab
          factures={factures}
          setShowModal={setShowFactModal}
          setFactToEdit={setFactToEdit}
        />
        <AjoutFactureModal
          showModal={showFactModal}
          setShowModal={setShowFactModal}
          factures={factures}
          type={"new"}
          isEdit={isFactEdit}
          setIsEdit={setIsFactEdit}
          factToEdit={factToEdit}
          setFactures={setFactures}
        />
        <h2>Salaires</h2>
        <StepBtn onClick={() => setShowSalModal(true)} type="button">
          Ajouter Facture
        </StepBtn>
        <SalairesTab
          salaires={salaires}
          setShowModal={setShowFactModal}
          setFactToEdit={setFactToEdit}
        />
        <AjoutSalaireModal
          showModal={showSalModal}
          setShowModal={setShowSalModal}
          salaires={salaires}
          type={"new"}
          isEdit={isSalEdit}
          setIsEdit={setIsSalEdit}
          setSalaires={setSalaires}
        />
        <h2>Machineries</h2>
        <StepBtn onClick={() => setShowMachModal(true)} type="button">
          Ajouter machine
        </StepBtn>
        <MachineriesTab
          machineries={machineries}
          setShowModal={setShowMachModal}
          setFactToEdit={setFactToEdit}
        />
        <AjoutMachineriesModal
          showModal={showMachModal}
          setShowModal={setShowMachModal}
          machineries={machineries}
          type={"new"}
          isEdit={isMachEdit}
          setIsEdit={setIsMachEdit}
          setMachineries={setMachineries}
        />
      </StepTables>
      <StepBtnGroup>
        <StepBtn onClick={handleSubmit} type="submit">
          Suivant
        </StepBtn>
        <StepBtn onClick={prevStep} type="submit">
          Précédant
        </StepBtn>
      </StepBtnGroup>
    </div>
  );
};

export default DMStep;
