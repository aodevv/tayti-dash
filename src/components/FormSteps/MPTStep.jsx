import React, { useEffect } from "react";

import { StepBtnGroup } from "./FormSteps.Styles";

import { StepBtn } from "../FormElements/Buttons";

const MPTStep = ({ prevStep, nextStep, values, setValues }) => {
  useEffect(() => {
    console.log(values);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    nextStep();
  };

  return (
    <div>
      <h1>MPT step</h1>
      <StepBtnGroup>
        <StepBtn onClick={handleSubmit} type="submit">
          Next
        </StepBtn>
        <StepBtn onClick={prevStep} type="submit">
          Return
        </StepBtn>
      </StepBtnGroup>
    </div>
  );
};

export default MPTStep;
