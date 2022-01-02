import styled from "styled-components";

export const DossierFormContainer = styled.div`
  display: flex;
`;

export const StepMonitorContainer = styled.div`
  min-width: 30%;
  display: flex;
  flex-direction: column;
  padding-right: 2rem;
`;

export const StepLabelContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  background: linear-gradient(
    90deg,
    rgba(30, 30, 162, 0) 0%,
    rgba(214, 214, 214, 0.6979166666666667) 100%
  );
  padding: 2rem 4rem 2rem 0;
  & > h2 {
    margin-right: 2rem;
    text-align: right;
    font-weight: 400;
  }
  border-right: 2px solid black;
`;

export const StepCircle = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #b8b8b8;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StepPoint = styled.div`
  position: absolute;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: darkgray;
  border: 2px solid black;
  top: 50%;
  right: 0;
  transform: translate(55%, -50%);
`;
