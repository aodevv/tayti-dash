import styled from "styled-components";

export const StepBtn = styled.button`
  font-size: 1.6rem;
  padding: 1rem 2rem;
  background-color: var(--color-blue);
  border: none;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
  transition: 100ms linear;
  &:hover {
    background-color: var(--color-blue-darker);
  }
`;
