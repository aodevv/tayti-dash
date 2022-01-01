import React from "react";

import Avatar from "../../assets/avatar.png";

import {
  CenterContainer,
  AvatarContainer,
  InfoContainer,
  InfoLabel,
  InfoContent,
  DoubleCard,
  CBContainer,
} from "./MainContainer.styles";

import {
  IoFolderOpenOutline,
  IoChatbubblesOutline,
  IoInformationCircleOutline,
  IoAnalyticsOutline,
} from "react-icons/io5";

import { Card, CardButton } from "../Mix/Mix.styles";

const MainContainer = () => {
  return (
    <CenterContainer>
      <DoubleCard>
        <div>
          <Card className="u-mt-s u-pt-l">
            <AvatarContainer>
              <img src={Avatar} alt="avatar" />
            </AvatarContainer>
            <div className="card-header">
              <h2 className="text-center">John Doe</h2>
              <p className="text-center">Administrateur</p>
            </div>
          </Card>
          <CBContainer>
            <CardButton bc="--color-blue">
              <span>
                <IoFolderOpenOutline />
              </span>
              <p className="fw-bold">Liste des dossiers en cours</p>
            </CardButton>

            <CardButton bc="--color-bluegreen">
              <span>
                <IoInformationCircleOutline />
              </span>
              <p className="fw-bold">Infos identifiant</p>
            </CardButton>
            <CardButton bc="--color-yellow">
              <span>
                <IoAnalyticsOutline />
              </span>
              <p className="fw-bold">Statistiques</p>
            </CardButton>
          </CBContainer>
        </div>

        <Card>
          <InfoLabel className="fs-xl fw-bold">Designation</InfoLabel>
          <InfoLabel>Nom : .......</InfoLabel>
          <InfoLabel>Adresse : .......</InfoLabel>
          <InfoLabel>Ville et code postal : .......</InfoLabel>
          <InfoLabel>MRC : .......</InfoLabel>
          <InfoLabel>Région : .......</InfoLabel>
          <InfoLabel>Population : .......</InfoLabel>
          <InfoLabel>Richesse fonciere uniformisé : .......</InfoLabel>
          <InfoLabel>Contact : .......</InfoLabel>
          <InfoLabel>Nom, Prénom : .......</InfoLabel>
          <InfoLabel>Fonction : .......</InfoLabel>
          <InfoLabel>Numéro de téléphone : .......</InfoLabel>
          <InfoLabel>Numéro de télécopieur : .......</InfoLabel>
          <InfoLabel>Adresse courriel : .......</InfoLabel>
          <InfoLabel>Taux de la C.S.S.T : .......</InfoLabel>
          <InfoLabel>
            Taux réduit d'assurance emploi s'il y a lieu : .......
          </InfoLabel>
        </Card>
      </DoubleCard>
    </CenterContainer>
  );
};

export default MainContainer;
