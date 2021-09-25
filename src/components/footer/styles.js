import styled from "styled-components";

export const Container = styled.footer`
  position: relative;
  bottom: 0px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 1em;
    font-weight: 400;
    img {
      width: 2vw;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    span {
      font-size: 1em;
      img {
        width: 2.5vw;
      }
    }
  }
  @media (min-width: 300px) and (max-width: 767px) {
    span {
      font-size: 0.9em;
      img {
        width: 3.5vw;
      }
    }
  }
`;
