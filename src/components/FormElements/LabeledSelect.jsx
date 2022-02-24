import React from "react";
import { SelectContainer } from "./LabeledInput.styles";

const LabeledSelect = ({ id, label, options, handleChange, disabled }) => {
  return (
    <SelectContainer>
      <select name="test" id="test" onChange={handleChange}>
        <option defaultValue></option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <label htmlFor="test">{label}</label>
    </SelectContainer>
  );
};

export default LabeledSelect;
