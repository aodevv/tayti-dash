import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
`;

export const AjoutModalContainer = styled.div`
  width: 80rem;
  padding: 2rem;
  box-shadow: 0 5px 1.6rem rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 1rem;
  ${({ large }) =>
    large &&
    `
    width: 120rem;
    min-height: 65rem;
  `}
`;

export const ModalCloseBtn = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 3.2rem;
  height: 3.2rem;
  padding: 0;
  z-index: 10;
`;

export const Checkbox = styled.div`
  display: inline-block;
  margin-bottom: 1.4rem;
  margin-left: 2rem;
  label {
    color: black;
    font-weight: bold;
    font-size: 2rem;
    display: flex;
    align-items: center;

    input {
      margin-left: 2rem;
      width: 2.2rem;
      height: 2.2rem;
    }
  }
`;

export const ModalSteps = styled.div``;
export const ModalStepMonitor = styled.div``;
export const SplitModals = styled.div`
  display: flex;
`;
