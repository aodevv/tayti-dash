import styled from "styled-components";

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 4rem 0 4rem;
  position: relative;
`;

export const AvatarContainer = styled.div`
  position: absolute;
  width: 12rem;
  height: 12rem;
  top: 0;
  right: 50%;
  transform: translate(50%, -50%);
  background-color: #f5f7fb;
  border: solid 2rem #f5f7fb;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const InfoContainer = styled.div`
  display: inline-flex;
  align-items: center;
  font-size: 1.6rem;
  margin: 0 0 1rem 1rem;
  border: solid 1px red;
  border-radius: 1.5rem;
`;

export const InfoLabel = styled.div`
  padding: 0.6rem 1.5rem;
  display: inline-block;
`;

export const InfoContent = styled.div`
  padding: 0.6rem 1.5rem;
  display: inline-block;
`;

export const DoubleCard = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: 400;
  align-items: flex-start;
  & > div {
    padding: 1rem 0;
    &:first-child {
      margin-right: 1rem;
    }
    &:last-child {
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
