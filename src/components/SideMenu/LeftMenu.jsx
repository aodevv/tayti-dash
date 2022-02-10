import logo from "../../logo-generic.svg";
import {
  IoHomeSharp,
  IoFolderSharp,
  IoChevronForward,
  IoChatboxEllipses,
  IoEllipsisHorizontal,
  IoLogoUsd,
} from "react-icons/io5";
import React from "react";

import {
  LMContainer,
  LogoContainer,
  MenuOptions,
  MenuOption,
} from "./LeftMenu.styles";

import { Link } from "react-router-dom";

const LeftMenu = ({ visible }) => {
  return (
    <div>
      <LMContainer width={visible ? "30rem" : "0rem"}>
        {/* <LogoContainer>
          <img src={logo} alt="Logo" />
        </LogoContainer> */}
        <MenuOptions>
          <MenuOption>
            <Link to="/">
              <i>
                <IoHomeSharp />
              </i>
              <span>Acceuil</span>
              <i>
                <IoChevronForward />
              </i>
            </Link>
          </MenuOption>
          <MenuOption active={true}>
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
            <a href="#!">
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
            <Link to="/liste-salaries">
              <i>
                <IoLogoUsd />
              </i>
              <span>Liste salariés</span>
              <i>
                <IoChevronForward />
              </i>
            </Link>
          </MenuOption>
          <MenuOption>
            <a href="#!">
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
