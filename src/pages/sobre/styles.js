import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  animation: bounceInDown;
  animation-duration: 2s;
  overflow: hidden;

  img:nth-child(4) {
    position: absolute;
    width: 40vw;
    height: 75vh;
    right: 0px;
    bottom: 0px;
    animation: animatedImage 4s alternate infinite;

    @keyframes animatedImage {
      from {
        filter: drop-shadow(
          -40px 40px 40px ${(props) => props.theme.secondary}
        );
      }
      to {
        filter: drop-shadow(40px 40px 40px ${(props) => props.theme.primary});
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    overflow-y: initial;
    overflow-x: hidden;
    animation: bounceInDown;
    animation-duration: 2s;
    img:nth-child(4) {
      height: 62vh;
      z-index: -1;
    }
  }

  @media (min-width: 300px) and (max-width: 767px) {
    overflow-y: initial;
    overflow-x: hidden;
    img:nth-child(4) {
      display: none;
    }
  }
`;
export const Section = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 198px;
  z-index: 1;

  div {
    flex-direction: column;
    width: 50vw;
    margin-left: 20px;
    h1 {
      margin-bottom: 20px;
      font-size: 1.8em;
      font-weight: 700;
      animation: bounceInDown;
      animation-duration: 8s;
    }
    p {
      font-size: 1em;
      text-indent: 10px;
      line-height: 20px;
      text-align: left;
      font-weight: 500;
      margin: 25px 0px;
    }
    p:nth-child(2) {
      animation: bounceInDown;
      animation-duration: 7s;
    }
    p:nth-child(3) {
      animation: bounceInDown;
      animation-duration: 6s;
    }
    p:nth-child(4) {
      animation: bounceInDown;
      animation-duration: 4s;
    }
    p:nth-child(5) {
      animation: bounceInDown;
      animation-duration: 2s;
    }
    strong {
      color: ${(props) => props.theme.secondary};
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    justify-content: center;
    margin-top: 150px;
    z-index: 0;
  }

  @media (min-width: 300px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    z-index: 0;

    div {
      width: 90vw;
      margin: 0 auto;
      h1 {
        margin-bottom: 10px;
        font-size: 1.5em;
        font-weight: 700;
        animation: fadeInLeft;
        animation-duration: 2s;
      }
      p {
        font-size: 1.3em;
        text-indent: 10px;
        line-height: 20px;
        text-align: left;
        margin: 10px 0px;
      }
      p:nth-child(2) {
        animation: fadeInLeft;
        animation-duration: 2s;
      }
      p:nth-child(3) {
        animation: fadeInLeft;
        animation-duration: 3s;
      }
      p:nth-child(4) {
        animation: fadeInLeft;
        animation-duration: 4s;
      }
      p:nth-child(5) {
        animation: fadeInLeft;
        animation-duration: 5s;
      }
      strong {
        color: ${(props) => props.theme.secondary};
      }
    }
  }
`;
export const Aside = styled.aside`
  margin-left: 40px;
  margin-top: 50px;
  width: 25vw;
  ul {
    list-style: none;
    li {
      font-size: 1em;
      font-weight: 500;
      margin-bottom: 30px;
      border-bottom: 1px solid ${(props) => props.theme.secondary};
    }
    li:nth-child(1) {
      animation: bounceInDown;
      animation-duration: 8s;
    }
    li:nth-child(2) {
      animation: bounceInDown;
      animation-duration: 6s;
    }
    li:nth-child(3) {
      animation: bounceInDown;
      animation-duration: 4s;
    }
    span {
      padding-left: 4px;

      a {
        transition: color.2s;
        color: ${(props) => props.theme.font};
        &:hover {
          color: ${(props) => props.theme.secondary};
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    z-index: 1;
  }
  @media (min-width: 300px) and (max-width: 767px) {
    margin: 0 auto;
    width: 90vw;
    ul {
      margin-top: 20px;
      list-style: none;
      li {
        font-size: 1.3em;
        margin-bottom: 20px;
      }
      li:nth-child(1) {
        animation: fadeInLeft;
        animation-duration: 5s;
      }
      li:nth-child(2) {
        animation: fadeInLeft;
        animation-duration: 6s;
      }
      li:nth-child(3) {
        animation: fadeInLeft;
        animation-duration: 7s;
      }
      span {
        padding-left: 4px;
        font-size: 14px;
      }
    }
  }
`;
export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 1s;

  strong {
    width: 25vw;
    text-align: center;
    background: ${(props) => props.theme.secondary};
    box-shadow: 0px 0px 15px ${(props) => props.theme.darkTransparent};
    border-radius: 10px;
    color: ${(props) => props.theme.font};
    font-size: 1.2em;
    font-weight: 500;
    padding: 5px;
    margin: 5px;
    animation: bounceInDown;
    animation-duration: 2s;
    &:hover {
      background: ${(props) => props.theme.primary};
    }
  }
  &:hover {
    -ms-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    strong {
      width: 34vw;
      border-radius: 10px;
      font-size: 1.1em;
      padding: 7px;
      margin: 7px;
    }
  }

  @media (min-width: 300px) and (max-width: 767px) {
    strong {
      width: 34vw;
      border-radius: 10px;
      font-size: 1em;
      padding: 7px;
      margin: 7px;
      animation: fadeInLeft;
      animation-duration: 3s;
      &:hover {
        background: ${(props) => props.theme.primary};
      }
    }
  }
`;
