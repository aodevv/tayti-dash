import logo from "../../logo-generic.svg";
import {
  IoFolderSharp,
  IoChevronForward,
  IoChatboxEllipses,
  IoEllipsisHorizontal,
} from "react-icons/io5";
import React from "react";

import {
  LMContainer,
  LogoContainer,
  MenuOptions,
  MenuOption,
} from "./LeftMenu.styles";

import { Link } from "react-router-dom";

const LeftMenu = () => {
  return (
    <div>
      <LMContainer>
        <LogoContainer>
          <img src={logo} alt="Logo" />
        </LogoContainer>
        <MenuOptions>
          <MenuOption>
            <Link to="/gestion-dossier">
              <i>
                <IoFolderSharp />
              </i>
              <span>Gestion Dossiers</span>
              <i>
                <IoChevronForward />
              </i>
            </Link>
          </MenuOption>
          <MenuOption>
            <a href="javascript:void(0)">
              <i>
                <IoChatboxEllipses />
              </i>
              <span>Communication</span>
              <i>
                <IoChevronForward />
              </i>
            </a>
          </MenuOption>
          <MenuOption>
            <a href="javascript:void(0)">
              <i>
                <IoEllipsisHorizontal />
              </i>
              <span>Autres</span>
              <i>
                <IoChevronForward />
              </i>
            </a>
          </MenuOption>
          <MenuOption></MenuOption>
        </MenuOptions>
      </LMContainer>
    </div>
  );
};

export default LeftMenu;
