import styled from "styled-components";

export const HContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 4rem;
  height: 10rem;
  background-color: var(--color-primary-dark);
  color: var(--color-primary-white);
`;

export const HeaderCenter = styled.div`
  display: flex;
  margin: 0 4rem;
`;

export const HCleft = styled.div`
  display: flex;
  align-items: center;
`;

export const HCright = styled.div`
  display: flex;
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  margin-left: 9rem;
  width: 30rem;

  span {
    margin-left: -1px;
    border-top-right-radius: 2.625rem;
    border-bottom-right-radius: 2.625rem;
    background-color: var(--color-primary-grey);
    border: 0.0625rem solid transparent;
    min-width: 3.125rem;
    display: flex;
    align-items: center;
    padding: 0.532rem 0.75rem;
    cursor: pointer;
    svg {
      color: white;
      font-size: 2.5rem;
      margin-right: 0.2rem;
    }
  }
`;

export const SearchInput = styled.input`
  background-color: var(--color-primary-grey);
  border: 0;
  //background: #F6F6F6;
  border-top-left-radius: 2.625rem;
  border-bottom-left-radius: 2.625rem;
  height: 5rem;
  flex-grow: 1;
  padding: 0 2rem;
  font-size: 1.5rem;
  color: white;
  &:focus {
    outline: none;
  }
`;

export const PageTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
`;
