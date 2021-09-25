import { Link } from "react-router-dom";
import styled from "styled-components";
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: bounceInDown;
  animation-duration: 2s;
  img:nth-child(3) {
    position: relative;
    filter: drop-shadow(2px 2px 6px ${(props) => props.theme.darkTransparent});
    margin: auto;
    width: 55vw;
    height: 50vh;
    bottom: 0px;
    animation: zoomIn;
    animation-duration: 4s;
  }
  @media (min-width: 1025px) and (max-width: 1440px) {
    overflow-x: hidden;
    img:nth-child(3) {
      filter: drop-shadow(2px 2px 4px ${(props) => props.theme.secondary});
      margin: auto;
      width: 55vw;
      height: 50vh;
      padding-top: 20px;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    overflow-x: hidden;
    header:nth-child(1) {
      display: none;
    }
    img:nth-child(3) {
      filter: drop-shadow(2px 2px 4px ${(props) => props.theme.secondary});
      margin: auto;
      width: 70vw;
      height: 50vh;
      bottom: 0px;
    }
  }
  @media (min-width: 300px) and (max-width: 767px) {
    overflow-x: hidden;

    header:nth-child(1) {
      display: none;
    }
    img:nth-child(3) {
      filter: drop-shadow(2px 2px 4px ${(props) => props.theme.secondary});
      margin: auto;
      width: 80vw;
      height: 50vh;
      top: 10px;
      padding: 10px 0px;
    }
  }
`;
export const Section = styled.section`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 1.6em;
    font-weight: 500;
  }
  strong {
    font-size: 4em;
    font-weight: 700;
    b {
      padding: 0px 10px;
      color: ${(props) => props.theme.secondary};
    }
  }
  @media (min-width: 1025px) and (max-width: 1440px) {
    overflow-y: hidden;
    overflow-x: hidden;
    margin-top: 70px;
    h1 {
      font-size: 1.6em;
      font-weight: 500;
    }
    strong {
      font-size: 3.5em;
      font-weight: 700;
      b {
        color: ${(props) => props.theme.secondary};
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 100px;
    h1 {
      font-size: 1.5em;
      font-weight: 500;
    }
    strong {
      font-size: 3.4em;
      font-weight: 700;
      b {
        color: ${(props) => props.theme.secondary};
      }
    }
  }
  @media (min-width: 300px) and (max-width: 767px) {
    margin-top: 100px;

    h1 {
      font-size: 1.4em;
      font-weight: 500;
    }
    strong {
      font-size: 1.7em;
      font-weight: 700;
      b {
        color: ${(props) => props.theme.secondary};
      }
    }
  }
`;
export const Button = styled(Link)`
  margin: 20px 0px;
  transition: transform 2s;

  strong {
    border: none;
    background-color: ${(props) => props.theme.secondary};
    box-shadow: 0px 0px 15px ${(props) => props.theme.darkTransparent};
    border-radius: 15px;
    color: #ffffff;
    font-size: 1.3em;
    font-weight: 500;
    padding: 13px;
    svg {
      margin: auto;
      animation: movingAnimation 2s linear infinite;
    }
    &:hover {
      background: ${(props) => props.theme.primary};
    }
  }
  &:hover {
    -ms-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  @keyframes movingAnimation {
    0% {
      opacity: 1;
      transform: translateY(0px);
    }
    100% {
      opacity: 0;
      transform: translateY(15px);
    }
  }
  @media (min-width: 1025px) and (max-width: 1440px) {
    margin: 20px 0px;
    z-index: 1;
    strong {
      font-size: 1.2em;
      padding: 12px;
      svg:nth-child(1) {
        height: 23px;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 20px 0;
    z-index: 0;
    strong {
      font-size: 1.1em;
      padding: 11px;
      svg:nth-child(1) {
        height: 22px;
      }
    }
  }

  @media (min-width: 300px) and (max-width: 767px) {
    margin: 15px 0;
    cursor: pointer;
    strong {
      font-size: 1em;
      padding: 10px;
      svg:nth-child(1) {
        height: 20px;
      }
    }
  }
`;
