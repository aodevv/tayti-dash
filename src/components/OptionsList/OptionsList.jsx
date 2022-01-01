import React from "react";
import { OptionsListContainer, Option } from "./OptionsList.styles";

const OptionsList = () => {
  return (
    <OptionsListContainer>
      <Option>DM</Option>
      <Option>MPT</Option>
      <Option>MI</Option>
      <Option>BCC</Option>
    </OptionsListContainer>
  );
};

export default OptionsList;
