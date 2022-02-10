import styled from "styled-components";

export const RightContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  & > div:last-child {
    font-size: 1.4rem;
    padding: 2rem;
  }
`;
