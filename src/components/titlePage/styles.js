import styled from "styled-components";

export const Container = styled.header`
  margin-top: -80px;
  display: flex;
  justify-content: center;
  position: relative;
  strong {
    position: absolute;
    font-size: 7em;
    font-family: "Roboto", cursive;
    font-weight: 700;
    text-align: center;
    opacity: 0.1;
    color: ${(props) => props.theme.lighterWhiteTransparent};
  }
  span {
    position: relative;
    text-align: center;
    font-size: 1.6em;
    font-weight: 700;
    top: 60px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    strong {
      font-size: 6em;
    }
    span {
      font-size: 1.5em;
      top: 50px;
    }
  }
  @media (min-width: 300px) and (max-width: 767px) {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    position: relative;
    strong {
      font-size: 5em;
    }
    span {
      font-size: 1.5em;
      top: 30px;
    }
  }
`;
