import styled from "styled-components";

export const Hamburger = styled.div`
  display: inline-block;
  position: relative;
  width: 3rem;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;

  &:hover {
    span {
      &:last-child {
        width: 3rem;
      }
    }
  }

  ${({ isActive }) =>
    isActive &&
    `position: relative;
    
    span{
      &:first-child{
        position:absolute;
        left:-0.1rem;
        top: -0.6rem;
        width:1.5rem;
        transform: rotate(-45deg);

      }
      &:last-child{
        position:absolute;
        left:-0.1rem;
        top:0.6rem;
        width:1.5rem;
        transform: rotate(45deg);
      }
    }

    &:hover {
    span {
      &:last-child {
        width: 1.5rem;
      }
    }
  }
  `}
`;

export const Line = styled.span`
  background: #fff;
  display: block;
  height: 0.2rem;
  border-radius: 0.3rem;
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  margin-right: auto;
  transition: all 0.3s ease-in-out;
  &:last-child {
    width: 1.8rem;
  }
`;

export const Card = styled.div`
  margin-bottom: 1.875rem;
  background-color: #fff;
  transition: all 0.5s ease-in-out;
  position: relative;
  border: 0rem solid transparent;
  border-radius: 1.25rem;
  box-shadow: 0rem 0.3125rem 0.3125rem 0rem rgba(82, 63, 105, 0.05);
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  word-wrap: break-word;
  padding-bottom: 2rem;
  .card-header {
    font-size: 1.6rem;
    padding: 2rem 2.5rem;
  }
`;

export const CardButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  border-radius: 1rem;
  //background-color: #dbdbdbb0;
  cursor: pointer;
  font-size: 1.5rem;
  min-width: 16.5rem;
  span {
    font-size: 5rem;
  }
  p {
    text-align: center;
  }
  transition: background-color 0.2s linear;

  ${({ bc }) =>
    bc &&
    `
    background-color: var(${bc}-light);
    color: var(${bc});
    &:hover {
    background-color: var(${bc}-lighter);
  }
  `}
`;

export const ButtonM = styled.button`
  margin-bottom: 1rem;
  font-size: 1.6rem;
  border-radius: 5px;
  border: none;
  background-color: var(--color-blue);
  color: white;
  cursor: pointer;
  transition: 100ms linear;
  padding: 1rem 2rem;

  &:hover {
    background-color: var(--color-blue-darker);
  }
`;

export const ButtonS = styled.button`
  font-size: 2rem;
  border-radius: 5px;
  border: 1px solid var(--color-primary-grey);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(122, 122, 122, 0.19931722689075626) 100%
  );
  cursor: pointer;
  transition: 100ms linear;
  padding: 0.6rem 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: 0 6px 10px 2px #00000037;
    transform: translateY(-2px);
  }
`;
