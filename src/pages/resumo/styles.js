import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  animation: bounceInDown;
  animation-duration: 2s;
  overflow: hidden;
  @media (min-width: 768px) and (max-width: 1024px) {
    overflow-y: initial;
  }

  @media (min-width: 300px) and (max-width: 767px) {
    overflow-y: initial;
  }
`;
export const Section = styled.section`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: bounceInDown;
  animation-duration: 3s;

  h1 {
    font-size: 1.6em;
    font-weight: 700;
    padding-bottom: 10px;
  }
  div {
    display: grid;
    grid-template-columns: repeat(2, 0.5fr);
    grid-gap: 10px;
    z-index: 1;
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      border-bottom: 5px solid ${(props) => props.theme.secondary};
      background: ${(props) => props.theme.itemBackgroundColor};
      box-shadow: 0px 0px 15px ${(props) => props.theme.darkTransparent};
      border-radius: 10px;
      width: 32vw;
      height: 170px;
      span {
        background-color: ${(props) => props.theme.secondary};
        text-align: center;
        box-sizing: border-box;
        padding: 4px 0px;
        font-weight: 500;
      }
      p {
        font-weight: 700;
        padding-left: 15px;
        line-height: 20px;
      }
      p:nth-child(2) {
        font-size: 1.2em;
      }
      p:nth-child(3) {
        font-size: 1em;
        opacity: 0.7;
      }
      a {
        position: relative;
      }
      img {
        transition: transform 1s;
        padding-left: 15px;
        margin: 5px 0px;
        width: 70px;
        height: 30px;

        &:hover {
          color: ${(props) => props.theme.secondary};
          -ms-transform: scale(1.2);
          -webkit-transform: scale(1.2);
          transform: scale(1.2);
        }
      }
    }
  }
  @media (min-width: 1025px) and (max-width: 1440px) {
    h1 {
      padding-bottom: 10px;
    }
    div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
      z-index: 1;
      div {
        width: 32vw;
        height: 170px;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    animation: bounceInDown;
    animation-duration: 3s;
    overflow-y: initial;
    overflow-x: hidden;
    h1 {
      font-size: 1.4em;
      padding-bottom: 10px;
    }
    div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
      z-index: 0;

      div {
        width: 40vw;
        height: 170px;

        span {
          text-align: center;
          padding: 4px 0px;
        }
        p {
          font-weight: 700;
          padding-left: 15px;
        }
        p:nth-child(2) {
          font-size: 1.1em;
        }
        p:nth-child(3) {
          font-size: 0.9em;
        }
        a {
          position: relative;
        }
        img {
          transition: transform 1s;
          padding-left: 15px;
          margin: 0px;
          width: 60px;
          height: 25px;
        }
      }
    }
  }
  @media (min-width: 300px) and (max-width: 767px) {
    animation: fadeInLeft;
    animation-duration: 2s;
    h1 {
      font-size: 1.5em;
      padding-bottom: 10px;
    }
    div {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 10px;
      z-index: 0;

      div {
        width: 87vw;
        height: 170px;
        span {
          text-align: center;
          padding: 4px 0px;
        }
        p {
          font-weight: 700;
          padding-left: 15px;
        }
        p:nth-child(2) {
          font-size: 1.4em;
        }
        p:nth-child(3) {
          font-size: 1.2em;
        }
        a {
          position: relative;
        }
        img {
          transition: transform 1s;
          padding-left: 15px;
          margin: 5px 0px;
          width: 65px;
          height: 25px;
        }
      }
      div:nth-child(1) {
        animation: fadeInLeft;
        animation-duration: 2s;
      }
      div:nth-child(2) {
        animation: fadeInLeft;
        animation-duration: 3s;
      }
      div:nth-child(3) {
        animation: fadeInLeft;
        animation-duration: 4s;
      }
      div:nth-child(4) {
        animation: fadeInLeft;
        animation-duration: 5s;
      }
    }
  }
`;
export const Skills = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 0px;
  animation: bounceInDown;
  animation-duration: 2s;
  div:first-child {
    z-index: 1;
    h1 {
      text-align: center;
      font-size: 1.6em;
      padding: 10px 0px;
      color: ${(props) => props.theme.font};
    }
    ul {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1em;
    }
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-bottom: 5px solid ${(props) => props.theme.secondary};
      background: ${(props) => props.theme.itemBackgroundColor};
      box-shadow: 0px 0px 15px ${(props) => props.theme.darkTransparent};
      border-radius: 15px;
      width: 12vw;
      height: 60px;
      padding: 5px;
      &:hover {
        color: ${(props) => props.theme.secondary};
        -ms-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
    }
    span {
      font-size: 0.7em;
      font-weight: 500;
      text-align: center;
    }
  }
  div:last-child {
    z-index: 1;
    h1 {
      text-align: center;
      padding: 10px 0px;
      font-size: 1.6em;
      color: ${(props) => props.theme.font};
    }
    ul {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(4, 0.7fr);
      grid-gap: 1em;
    }
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-bottom: 5px solid ${(props) => props.theme.secondary};
      background: ${(props) => props.theme.itemBackgroundColor};
      box-shadow: 0px 0px 15px ${(props) => props.theme.darkTransparent};
      border-radius: 15px;
      width: 12vw;
      height: 60px;
      padding: 5px;
      &:hover {
        color: ${(props) => props.theme.secondary};
        -ms-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
    }
    span {
      font-size: 0.7em;
      font-weight: 500;
      text-align: center;
    }
  }
  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 75vw;
    margin: 0 auto;
    div {
      padding: 0px 10px;
    }
    div:first-child {
      z-index: 1;
      h1 {
        font-size: 1.6em;
        padding: 5px 0px;
      }
      ul {
        grid-gap: 0.7em;
      }
      li {
        width: 9vw;
        height: 50px;
        padding: 5px;
      }
    }
    div:last-child {
      z-index: 1;
      h1 {
        font-size: 1.6em;
        padding: 5px 0px;
      }
      ul {
        grid-gap: 0.7em;
      }
      li {
        width: 9vw;
        height: 50px;
        padding: 5px;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: bounceInDown;
    animation-duration: 2s;
    div {
      padding: 0px 20px;
    }
    div:first-child {
      z-index: 0;

      h1 {
        font-size: 1.3em;
        padding: 20px 0px;
      }
      ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2em;
      }
      li {
        width: 39vw;
        height: 50px;
      }
      span {
        font-size: 0.9em;
      }
    }
    div:last-child {
      z-index: 0;
      h1 {
        font-size: 1.3em;
        padding: 20px 0px;
      }
      ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1em;
      }
      li {
        width: 26vw;
        height: 50px;
      }

      span {
        font-size: 0.9em;
      }
    }
  }

  @media (min-width: 300px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
    overflow-y: initial;
    overflow-x: hidden;
    animation: fadeInLeft;
    animation-duration: 5s;
    div:first-child {
      z-index: 0;
      h1 {
        text-align: center;
        font-size: 1.5em;
        padding: 20px 0px;
      }
      ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
      }
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 40vw;
        height: 50px;
        padding: 5px;
      }
      span {
        font-size: 1em;
        font-weight: 500;
        text-align: center;
      }
    }
    div:last-child {
      z-index: 0;
      h1 {
        padding: 20px 0px;
        font-size: 1.5em;
      }
      ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
      }
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 40vw;
        height: 50px;
        padding: 5px;
      }
      span {
        font-size: 1em;
      }
    }
  }
`;
