import styled from "styled-components";

export const FormGrid = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const InputsGroup = styled.div``;

export const FormGroup = styled.div`
  display: flex;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr;
  width: 400px;

  & > div:first-child {
    grid-column-start: span 2;
  }
`;

export const MontantGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr;
  width: 400px;

  & > div:last-child {
    grid-column-start: span 2;
  }
`;
