import React from "react";
import {
  StepMonitorContainer,
  StepLabelContainer,
  StepCircle,
  StepPoint,
} from "../AjoutDossierForm/AjoutDossierForm.styles";

const StepMonitor = () => {
  return (
    <StepMonitorContainer>
      <StepLabelContainer>
        <StepCircle>
          <h2>1</h2>
        </StepCircle>
        <h2>Information dossier</h2>
        <StepPoint></StepPoint>
      </StepLabelContainer>
    </StepMonitorContainer>
  );
};

export default StepMonitor;
