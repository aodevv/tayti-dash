import styled from "styled-components";

export const LMContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 33rem;
  height: 100%;
  background-color: var(--color-primary-dark);
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  img {
    width: 60%;
    filter: grayscale(100%);
  }
`;

export const MenuOptions = styled.ul`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
`;

export const MenuOption = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  a {
    color: var(--color-primary-white-light);
    font-size: 1.8rem;
    font-weight: 500;
    padding: 1.4rem 2.2rem;
    text-decoration: none;
    display: flex;
    justify-content: center;
    i {
      font-size: 2.2rem;
      margin-right: 1.25rem;
      border-radius: 0.125rem;
      border-radius: 0.125rem;
      &:last-child {
        margin-right: 0;
      }
    }
    span {
      flex-grow: 1;
    }
  }
`;
