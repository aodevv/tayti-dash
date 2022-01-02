import React from "react";
import {
  StepMonitorContainer,
  StepLabelContainer,
  StepCircle,
  StepPoint,
} from "../AjoutDossierForm/AjoutDossierForm.styles";

const StepMonitor = ({ step }) => {
  return (
    <StepMonitorContainer>
      <StepLabelContainer finished={step >= 1 ? true : false}>
        <StepCircle>
          <h2>1</h2>
        </StepCircle>
        <h2>Information dossier</h2>
        <StepPoint></StepPoint>
      </StepLabelContainer>
      <StepLabelContainer finished={step >= 2 ? true : false}>
        <StepCircle>
          <h2>2</h2>
        </StepCircle>
        <h2>Dommage aux bien</h2>
        <StepPoint></StepPoint>
      </StepLabelContainer>
      <StepLabelContainer finished={step >= 3 ? true : false}>
        <StepCircle>
          <h2>3</h2>
        </StepCircle>
        <h2>Mesures préventifs temporaires</h2>
        <StepPoint></StepPoint>
      </StepLabelContainer>
      <StepLabelContainer finished={step >= 4 ? true : false}>
        <StepCircle>
          <h2>4</h2>
        </StepCircle>
        <h2>Mesures d'interventions</h2>
        <StepPoint></StepPoint>
      </StepLabelContainer>
    </StepMonitorContainer>
  );
};

export default StepMonitor;
