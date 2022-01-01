import React, { useState } from "react";

import { InputGroup } from "./LabeledInput.styles";

const LabeledInput = ({ id, label, type }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <InputGroup className={value ? "focused" : ""}>
      <input type={type} id={id} value={value} onChange={handleChange} />
      <label htmlFor={id}>{label}</label>
    </InputGroup>
  );
};

export default LabeledInput;
