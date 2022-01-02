import React, { Component } from "react";
import CurrentStep from "./CurrentStep";
import StepMonitor from "../FormSteps/StepMonitor";
import { DossierFormContainer } from "./AjoutDossierForm.styles";

export default class AjoutDossierForm extends Component {
  state = {
    step: 1,
    numdos: "1234",
    datouv: "",
    datev: "",
    actof: "",
    evn: "",
    status: "",
    program: "",
    admissibilite: "",
    mtrec: 0,
    mtaut: 0,
    mtvers: 0,
    partfonc: "",
  };

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      numdos,
      datouv,
      datev,
      actof,
      evn,
      status,
      program,
      admissibilite,
      mtrec,
      mtaut,
      mtvers,
      partfonc,
    } = this.state;
    const values = {
      numdos,
      datouv,
      datev,
      actof,
      evn,
      status,
      program,
      admissibilite,
      mtrec,
      mtaut,
      mtvers,
      partfonc,
    };
    return (
      <DossierFormContainer>
        <StepMonitor step={step} />
        <CurrentStep
          step={step}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
        />
      </DossierFormContainer>
    );
  }
}
