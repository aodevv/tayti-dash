import React from "react";
import { RightContainer } from "./RightContent.styles";
import Header from "../Header/Header";
import MainContainer from "../MainContainer/MainContainer";

const RightContent = () => {
  return (
    <RightContainer>
      <Header />
      <MainContainer />
    </RightContainer>
  );
};

export default RightContent;
