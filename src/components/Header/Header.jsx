import React from "react";

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
  return (
    <HContainer>
      <Hamburger>
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
