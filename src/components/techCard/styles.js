import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 5px solid ${(props) => props.theme.secondary};
  background: ${(props) => props.theme.itemBackgroundColor};
  box-shadow: 0px 0px 15px ${(props) => props.theme.darkTransparent};
  border-radius: 15px;
  cursor: pointer;
  width: 12vw;
  height: 60px;
  padding: 5px;
  &:hover {
    color: ${(props) => props.theme.secondary};
    -ms-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  svg {
    height: 20px;
    width: 20px;
  }

  span {
    font-size: 0.7em;
    font-weight: 500;
    text-align: center;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 9vw;
    height: 50px;
    padding: 5px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 26vw;
    height: 50px;
    span {
      font-size: 0.9em;
    }
  }

  @media (min-width: 300px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40vw;
    height: 50px;
    padding: 5px;

    span {
      font-size: 1em;
      font-weight: 500;
      text-align: center;
    }
  }
`;
