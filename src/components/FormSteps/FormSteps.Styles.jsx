import styled from "styled-components";

export const FormGrid = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const InputsGroup = styled.div``;

export const InputsContainer = styled.div`
  display: flex;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StepBtnGroup = styled.div`
  padding: 0 1.4rem;
  display: flex;
  flex-direction: row-reverse;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr;

  & > div:first-child {
    grid-column-start: span 2;
  }
`;

export const MontantGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr;

  & > div:last-child {
    grid-column-start: span 2;
  }
`;

export const InfoCompGrid = styled.div`
  width: 100%;
  display: flex;
`;
