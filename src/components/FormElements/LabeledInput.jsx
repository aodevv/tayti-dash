import React, { useState, useEffect } from "react";

import { InputGroup } from "./LabeledInput.styles";

const LabeledInput = ({ id, label, type, inputValue }) => {
  const [value, setValue] = useState(inputValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // useEffect(() => {
  //   setValue(inputValue);
  // }, []);

  return (
    <InputGroup className={value ? "focused" : ""}>
      <input value={value} type={type} id={id} onChange={handleChange} />
      <label htmlFor={id}>{label}</label>
    </InputGroup>
  );
};

export default LabeledInput;
