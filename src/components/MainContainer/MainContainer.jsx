import React from "react";
import {
  CenterContainer,
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
} from "react-icons/io5";
import { Card, CardButton } from "../Mix/Mix.styles";

const MainContainer = () => {
  return (
    <CenterContainer>
      <Card>
        <div className="card-header">
          <h2>Identification de la session</h2>
        </div>
        <InfoContainer>
          <InfoLabel>Nom</InfoLabel>
          <InfoContent>Nom</InfoContent>
        </InfoContainer>
        <InfoContainer>
          <InfoLabel>Prenom</InfoLabel>
          <InfoContent>Prenom</InfoContent>
        </InfoContainer>
        <InfoContainer>
          <InfoLabel>Titre</InfoLabel>
          <InfoContent>Titre</InfoContent>
        </InfoContainer>
      </Card>
      <DoubleCard>
        <CBContainer>
          <CardButton>
            <span>
              <IoFolderOpenOutline />
            </span>
            <p>Liste des dossiers en cours</p>
          </CardButton>
          <CardButton>
            <span>
              <IoChatbubblesOutline />
            </span>
            <p>Messagerie</p>
          </CardButton>
          <CardButton>
            <span>
              <IoInformationCircleOutline />
            </span>
            <p>Infos identifiant</p>
          </CardButton>
        </CBContainer>
        <Card>
          <InfoLabel>Designation</InfoLabel>
          <InfoLabel>Nom</InfoLabel>
          <InfoLabel>Adresse</InfoLabel>
          <InfoLabel>Ville et code postal</InfoLabel>
          <InfoLabel>MRC</InfoLabel>
          <InfoLabel>Région</InfoLabel>
          <InfoLabel>Population</InfoLabel>
          <InfoLabel>Richesse fonciere uniformisé</InfoLabel>
          <InfoLabel>Contact</InfoLabel>
          <InfoLabel>Nom, Prénom</InfoLabel>
          <InfoLabel>Fonction</InfoLabel>
          <InfoLabel>Numéro de téléphone</InfoLabel>
          <InfoLabel>Numéro de télécopieur</InfoLabel>
          <InfoLabel>Adresse courriel</InfoLabel>
          <InfoLabel>Taux de la C.S.S.T</InfoLabel>
          <InfoLabel>Taux réduit d'assurance emploi s'il y a lieu</InfoLabel>
        </Card>
      </DoubleCard>
    </CenterContainer>
  );
};

export default MainContainer;
