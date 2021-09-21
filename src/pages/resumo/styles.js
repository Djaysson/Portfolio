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
    font-size: 25px;
    font-weight: 700;
  }
  div {
    display: grid;
    grid-template-columns: repeat(2, 0.5fr);
    padding: 10px 0px;
    grid-gap: 15px;
    z-index: 1;
    div {
      display: flex;
      flex-direction: column;
      border-bottom: 5px solid ${(props) => props.theme.secondary};
      background: ${(props) => props.theme.itemBackgroundColor};
      box-shadow: 0px 0px 15px ${(props) => props.theme.darkTransparent};
      border-radius: 10px;
      width: 400px;
      height: 168px;
      span {
        background-color: ${(props) => props.theme.secondary};
        text-align: center;
        padding: 4px 0px;
        font-weight: 500;
      }
      p {
        font-weight: 700;
        padding-left: 15px;
        margin: -1px 0px;
      }
      p:nth-child(2) {
        font-size: 18.5px;
      }
      p:nth-child(3) {
        font-size: 16.5px;
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
    div {
      display: grid;
      grid-template-columns: repeat(2, 0.5fr);
      padding: 10px 0px;
      grid-gap: 10px;
      z-index: 1;
      div {
        width: 385px;
        height: 168px;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    animation: bounceInDown;
    animation-duration: 3s;
    overflow-y: initial;
    overflow-x: hidden;
    h1 {
      font-size: 20px;
    }
    div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 10px 0px;
      margin: 0 -5px;
      grid-gap: 2em;
      z-index: 0;

      div {
        width: 360px;
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
          font-size: 17.5px;
        }
        p:nth-child(3) {
          font-size: 14.5px;
        }
        a {
          position: relative;
        }
        img {
          transition: transform 1s;
          padding-left: 15px;
          margin: -5px 0px;
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
      font-size: 18px;
    }
    div {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      padding: 10px 0px;
      grid-gap: 10px;
      z-index: 0;

      div {
        width: 280px;
        height: 170px;
        span {
          text-align: center;
          padding: 4px 0px;
        }
        p {
          font-weight: 700;
          padding-left: 15px;
          margin: 2px 0px;
        }
        p:nth-child(2) {
          font-size: 17.5px;
        }
        p:nth-child(3) {
          font-size: 14.5px;
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
      font-size: 25px;
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
      width: 130px;
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
      font-size: 12px;
      font-weight: 500;
      text-align: center;
    }
  }
  div:last-child {
    z-index: 1;
    h1 {
      text-align: center;
      padding: 10px 0px;
      font-size: 25px;
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
      width: 130px;
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
      font-size: 12px;
      font-weight: 500;
      text-align: center;
    }
  }
  @media (min-width: 1025px) and (max-width: 1440px) {
    div {
      padding: 0px 10px;
    }
    div:first-child {
      z-index: 1;
      ul {
        grid-gap: 0.7em;
      }
      li {
        width: 120px;
        height: 60px;
        padding: 5px;
      }
    }
    div:last-child {
      z-index: 1;
      ul {
        grid-gap: 0.7em;
      }
      li {
        width: 120px;
        height: 60px;
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
        font-size: 20px;
        padding: 20px 0px;
      }
      ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2em;
      }
      li {
        width: 300px;
        height: 50px;
      }
      span {
        font-size: 11.5px;
      }
    }
    div:last-child {
      z-index: 0;
      h1 {
        font-size: 20px;
        padding: 20px 0px;
      }
      ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1em;
      }
      li {
        width: 200px;
        height: 50px;
      }

      span {
        font-size: 12px;
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
        font-size: 18.5px;
        padding: 20px 0px;
      }
      ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2em 3em;
      }
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 120px;
        height: 50px;
        padding: 5px;
      }
      span {
        font-size: 11px;
        font-weight: 500;
        text-align: center;
      }
    }
    div:last-child {
      z-index: 0;
      h1 {
        padding: 20px 0px;
        font-size: 18.5px;
      }
      ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2em 3em;
      }
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 120px;
        height: 50px;
        padding: 5px;
      }
      span {
        font-size: 11px;
      }
    }
  }
`;
