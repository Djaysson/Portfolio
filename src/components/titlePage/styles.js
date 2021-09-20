import styled from "styled-components";

export const Container = styled.header`
  margin-top: -80px;
  display: flex;
  justify-content: center;
  position: relative;
  strong {
    position: absolute;
    font-size: 90px;
    font-family: "Rampart One", cursive;
    text-align: center;
    opacity: 0.1;
    color: ${(props) => props.theme.fontLight};
  }
  span {
    position: relative;
    text-align: center;
    font-size: 25px;
    font-weight: 700;
    top: 65px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    strong {
      position: absolute;
      font-size: 80px;
      font-family: "Rampart One", cursive;
      text-align: center;
      opacity: 0.1;
      color: ${(props) => props.theme.fontLight};
    }
    span {
      position: relative;
      text-align: center;
      font-size: 20px;
      font-weight: 700;
      top: 60px;
    }
  }
  @media (min-width: 300px) and (max-width: 767px) {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    position: relative;
    strong {
      position: absolute;
      font-size: 50px;
      font-family: "Rampart One", cursive;
      text-align: center;
      opacity: 0.1;
      color: ${(props) => props.theme.fontLight};
    }
    span {
      position: relative;
      text-align: center;
      font-size: 16px;
      font-weight: 700;
      top: 35px;
    }
  }
`;
