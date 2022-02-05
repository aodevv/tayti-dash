import React, { useState, useEffect } from "react";

import { StepBtnGroup, StepTables } from "./FormSteps.Styles";

import { StepBtn } from "../FormElements/Buttons";

import FacturesTab from "../Tables/Factures/FacturesTab";
import AjoutFactureModal from "../Modals/AjoutFactureModal";

const DMStep = ({ prevStep, nextStep, values, setValues, stepName }) => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    console.log(values);
    setFactures(values[stepName].factures);
  }, [stepName, values]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      [stepName]: {
        factures: factures,
        salaires: [],
        machineries: [],
      },
    });

    nextStep();
  };

  const [factures, setFactures] = useState(values[stepName].factures);
  const [isEdit, setIsEdit] = useState(false);
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
        <StepBtn onClick={() => setShowModal(true)} type="button">
          Ajouter Facture
        </StepBtn>
        <FacturesTab
          factures={factures}
          setShowModal={setShowModal}
          setFactToEdit={setFactToEdit}
        />
        <AjoutFactureModal
          showModal={showModal}
          setShowModal={setShowModal}
          factures={factures}
          type={"new"}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          factToEdit={factToEdit}
          setFactures={setFactures}
        />
        <h2>Salaires</h2>
        <h3>Table salaires</h3>
        <h2>Machinerie</h2>
        <h3>Table machinerie</h3>
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
