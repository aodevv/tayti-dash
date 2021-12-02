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
        right:-0.1rem;
        top: -0.6rem;
        width:1.5rem;
        transform: rotate(45deg);

      }
      &:last-child{
        position:absolute;
        right:-0.1rem;
        top:0.6rem;
        width:1.5rem;
        transform: rotate(-45deg);
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
  border: solid 1px black;
  cursor: pointer;
  font-size: 1.5rem;
  min-width: 16.5rem;
  span {
    font-size: 5rem;
  }
  p {
    text-align: center;
  }
  &:hover {
    background-color: #d1d1d184;
  }
`;
