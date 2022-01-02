import styled, { css } from "styled-components";

const topLabel = css`
  font-size: 1.4rem;
  top: 0;
  left: 1rem;
  z-index: 1;
  padding: 0rem 0.2rem;
  background-color: #f5f7fb;
  font-weight: bold;
`;

const sharedCss = css`
  position: relative;
  margin: 1.4rem;
  label {
    position: absolute;
    top: 50%;
    left: 2rem;
    transform: translateY(-50%);
    font-size: 1.5rem;
    z-index: -1;
    transition: all 50ms linear;
  }
  &.focused {
    label {
      ${topLabel}
    }
  }
`;

const sharedInputStyle = css`
  padding: 1.2rem 2rem;
  border: 2px solid black;
  border-radius: 1rem;
  background-color: transparent;
  font-size: 1.8rem;
  &:focus + label {
    ${topLabel}
  }
`;

export const InputGroup = styled.div`
  ${sharedCss}
  input {
    ${sharedInputStyle}
    width: 100%;
    height: 5rem;
  }
`;

export const TextAreaGroup = styled.div`
  ${sharedCss}
  textarea {
    ${sharedInputStyle}
  }
`;
