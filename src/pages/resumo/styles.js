import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  animation: bounceInDown;
  animation-duration: 2s;
  overflow: hidden;
  overflow-y: initial;
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
  div {
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
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 75vw;
    margin: 0 auto;
    div {
      padding: 0px 10px;
    }
    div {
      z-index: 1;
      h1 {
        font-size: 1.6em;
        padding: 5px 0px;
      }
      ul {
        grid-gap: 0.7em;
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
    div {
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
    div {
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
    }
  }
`;
