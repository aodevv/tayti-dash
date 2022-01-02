import React from "react";

import InfosDossier from "../FormSteps/InfosDossier";
import DMDossier from "../FormSteps/DMDossier";

const CurrentStep = ({ step, nextStep, prevStep, handleChange, values }) => {
  switch (step) {
    case 1:
      return (
        <InfosDossier
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <DMDossier
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    default:
    // do nothing
  }
};

export default CurrentStep;
