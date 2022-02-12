import logo from "../../logo-generic.svg";
import {
  IoHomeSharp,
  IoFolderSharp,
  IoChevronForward,
  IoChatboxEllipses,
  IoEllipsisHorizontal,
  IoLogoUsd,
} from "react-icons/io5";
import React, { useEffect } from "react";

import {
  LMContainer,
  LogoContainer,
  MenuOptions,
  MenuOption,
} from "./LeftMenu.styles";

import { Link } from "react-router-dom";

const LeftMenu = ({ visible, pathname }) => {
  /* const history = createBrowserHistory();
  let pathname = history.location.pathname;

  useEffect(() => {
    console.log(history);
    return history.listen((location) => {
      console.log(location.location.pathname);
      console.log(pathname);
    });
  }, [history, pathname]); */
  return (
    <div>
      <LMContainer width={visible ? "30rem" : "0rem"}>
        {/* <LogoContainer>
          <img src={logo} alt="Logo" />
        </LogoContainer> */}
        <MenuOptions>
          <MenuOption active={pathname === "" ? true : false} visible={visible}>
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
          <MenuOption
            active={
              ["gestion-dossier", "dossier"].includes(pathname) ? true : false
            }
            visible={visible}
          >
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
          <MenuOption
            active={["liste-salaries"].includes(pathname) ? true : false}
            visible={visible}
          >
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
