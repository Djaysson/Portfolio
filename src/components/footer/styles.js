import styled from "styled-components";

export const Container = styled.footer`
  position: relative;
  bottom: -0px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 27px;
  span {
    font-size: 1em;
    font-weight: 400;
    padding-right: 4px;
  }
  img {
    width: 3vw;
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
