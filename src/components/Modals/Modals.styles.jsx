import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Baackground = styled.div`
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
