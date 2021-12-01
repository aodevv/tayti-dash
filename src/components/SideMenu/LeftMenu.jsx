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

const LeftMenu = () => {
  return (
    <div>
      <LMContainer>
        <LogoContainer>
          <img src={logo} alt="Logo" />
        </LogoContainer>
        <MenuOptions>
          <MenuOption>
            <a href="javascript:void(0)">
              <i>
                <IoFolderSharp />
              </i>
              <span>Gestion Dossiers</span>
              <i>
                <IoChevronForward />
              </i>
            </a>
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
