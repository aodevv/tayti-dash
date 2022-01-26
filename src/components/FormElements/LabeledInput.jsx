import React from "react";

import { InputGroup } from "./LabeledInput.styles";

const LabeledInput = ({
  id,
  label,
  type,
  inputValue,
  handleChange,
  disabled,
}) => {
  const disabl = disabled ? true : false;
  return (
    <InputGroup
      className={
        inputValue || inputValue === 0 || type === "date" ? "focused" : ""
      }
    >
      <input
        disabled={disabl}
        value={inputValue}
        type={type}
        id={id}
        onChange={handleChange}
      />
      <label htmlFor={id}>{label}</label>
    </InputGroup>
  );
};

export default LabeledInput;
