import React from "react";
import { TextAreaGroup } from "./LabeledInput.styles";

const LabeledTextArea = ({
  id,
  label,
  inputValue,
  handleChange,
  rows,
  cols,
}) => {
  return (
    <TextAreaGroup className="focused">
      <textarea
        value={inputValue}
        id={id}
        onChange={handleChange}
        rows={rows}
        cols={cols}
      />
      <label htmlFor={id}>{label}</label>
    </TextAreaGroup>
  );
};

export default LabeledTextArea;
