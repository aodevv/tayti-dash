import React from "react";

//import InfosDossier from "../FormSteps/InfosDossier";
import InfosDossierTest from "../FormSteps/InfosDossierTest";
//import DMDossier from "../FormSteps/DMDossier";
import DMStep from "../FormSteps/DMStep";
//import MPTForm from "../FormSteps/MPTForm";
import MPTStep from "../FormSteps/MPTStep";

const CurrentStep = ({
  step,
  nextStep,
  prevStep,
  handleChange,
  values,
  setValues,
}) => {
  switch (step) {
    case 1:
      return (
        <InfosDossierTest
          nextStep={nextStep}
          values={values}
          setValues={setValues}
        />
      );
    case 2:
      return (
        <DMStep
          prevStep={prevStep}
          nextStep={nextStep}
          values={values}
          setValues={setValues}
          stepName="dab"
          step={step}
        />
      );
    case 3:
      return (
        <DMStep
          prevStep={prevStep}
          nextStep={nextStep}
          values={values}
          setValues={setValues}
          stepName="mpt"
          step={step}
        />
      );
    case 4:
      return (
        <DMStep
          prevStep={prevStep}
          nextStep={nextStep}
          values={values}
          setValues={setValues}
          stepName="mi"
          step={step}
        />
      );
    default:
    // do nothing
  }
};

export default CurrentStep;
