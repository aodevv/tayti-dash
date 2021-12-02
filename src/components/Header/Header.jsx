import React, { useState } from "react";

import { IoSearchSharp } from "react-icons/io5";

import {
  HContainer,
  PageTitle,
  HeaderCenter,
  HCleft,
  SearchContainer,
  SearchInput,
} from "./Header.styles";
import { Hamburger, Line } from "../Mix/Mix.styles";

const Header = () => {
  const [burger, setBurger] = useState(false);
  const toggleBurger = () => {
    setBurger(!burger);
    console.log("clicked");
    console.log(burger);
  };
  return (
    <HContainer>
      <Hamburger onClick={toggleBurger} isActive={burger}>
        <Line />
        <Line />
        <Line />
      </Hamburger>
      <HeaderCenter>
        <HCleft>
          <PageTitle>Acceuil</PageTitle>
          <SearchContainer>
            <SearchInput type="text" />
            <span>
              <IoSearchSharp />
            </span>
          </SearchContainer>
        </HCleft>
      </HeaderCenter>
    </HContainer>
  );
};

export default Header;
