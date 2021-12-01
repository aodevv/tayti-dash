import styled from "styled-components";

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 4rem 0 4rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  margin: 0 0 1rem 2rem;
`;

export const InfoLabel = styled.div`
  padding: 0.6rem 1.5rem;
  display: inline-block;
`;

export const InfoContent = styled.div`
  padding: 0.6rem 1.5rem;
  display: inline-block;
  background-color: var(--color-primary-light-grey);
  border-radius: 1.5rem;
`;

export const DoubleCard = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: 500;
  align-items: flex-start;
  & > div {
    padding: 1rem 0;
    &:first-child {
      margin-right: 1rem;
    }
    &:last-child {
      div {
        &:not(:first-child) {
          font-weight: 400;
        }
        &:first-child {
          font-size: 2.4rem;
        }
      }

      margin-left: 1rem;
    }
  }
`;

export const CBContainer = styled.div`
  display: grid;
  //width: 45rem;
  grid-gap: 1rem;
  grid-auto-flow: row;
  grid-template-columns: 1fr 1fr;
`;
