import React from "react";

import { StepBtnGroup } from "./FormSteps.Styles";

import { StepBtn } from "../FormElements/Buttons";

const MPTForm = ({ prevStep, nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Return = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <div>
      Step 3
      <StepBtnGroup>
        <StepBtn onClick={Continue} type="submit">
          Next
        </StepBtn>
        <StepBtn onClick={Return} type="submit">
          Return
        </StepBtn>
      </StepBtnGroup>
    </div>
  );
};

export default MPTForm;
