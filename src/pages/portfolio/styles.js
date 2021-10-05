import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  animation: bounceInDown;
  animation-duration: 2s;
  overflow-x: hidden;
  overflow-y: initial;
`;
export const ContainerImg = styled.section`
  @keyframes animed {
    0% {
      filter: drop-shadow(0px 0px 5px ${(props) => props.theme.secondary});
    }
    100% {
      filter: drop-shadow(0px 0px 5px ${(props) => props.theme.primary});
    }
  }
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-top: 120px;
  padding: 0 30px;

  article {
    margin: 10px auto;
    width: 24vw;
    height: 270px;
    z-index: 1;
    animation: animed 4s alternate infinite;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 24vw;
        height: 270px;
        border-radius: 10px;
      }
      div {
        position: absolute;
        width: 24vw;
        height: 270px;
        border-radius: 10px;
        strong {
          font-size: 1.4em;
          font-weight: 700;
          color: ${(props) => props.theme.secondary};
          visibility: hidden;
        }
        span {
          visibility: hidden;
        }
        p:nth-child(2) {
          font-size: 0.8em;
          font-weight: 700;
          margin: 10px;
          text-align: center;
          color: ${(props) => props.theme.font};
          visibility: hidden;
        }
        p:nth-child(3) {
          visibility: hidden;
          font-size: 0.7em;
          padding: 4px;
          border-bottom: 5px solid ${(props) => props.theme.secondary};
          box-shadow: 0px 0px 15px ${(props) => props.theme.darkTransparent};
          border-radius: 5px;
          background: ${(props) => props.theme.itemBackgroundColor};
          margin: 10px 0px;
        }
        &:hover {
          background: ${(props) => props.theme.TransparentBackground};
          border-bottom: 10px solid ${(props) => props.theme.secondary};
          strong {
            visibility: visible;
          }
          span {
            visibility: visible;
          }
          p:nth-child(2) {
            visibility: visible;
          }
          p:nth-child(3) {
            visibility: visible;
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    margin-top: 120px;
    padding: 0 30px;
    article {
      margin: 10px auto;
      width: 40vw;
      height: 270px;
      z-index: 0;
      animation: animed 4s alternate infinite;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img {
          width: 40vw;
          height: 270px;
          border-radius: 10px;
        }
        div {
          position: absolute;
          width: 40vw;
          height: 270px;
          border-radius: 10px;
          strong {
            font-size: 1.4em;
            font-weight: 700;
            color: ${(props) => props.theme.secondary};
            visibility: hidden;
          }
          span {
            visibility: hidden;
          }
          p:nth-child(2) {
            font-size: 0.8em;
            font-weight: 700;
            margin: 10px;
            text-align: center;
            color: ${(props) => props.theme.font};
            visibility: hidden;
          }
          p:nth-child(3) {
            visibility: hidden;
            font-size: 0.7em;
            padding: 4px;
            border-bottom: 5px solid ${(props) => props.theme.secondary};
            box-shadow: 0px 0px 15px ${(props) => props.theme.darkTransparent};
            border-radius: 5px;
            background: ${(props) => props.theme.itemBackgroundColor};
            margin: 10px 0px;
          }
          &:hover {
            background: ${(props) => props.theme.TransparentBackground};
            border-bottom: 10px solid ${(props) => props.theme.secondary};
            strong {
              visibility: visible;
            }
            span {
              visibility: visible;
            }
            p:nth-child(2) {
              visibility: visible;
            }
            p:nth-child(3) {
              visibility: visible;
            }
          }
        }
      }
    }
  }
  @media (min-width: 300px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    margin-top: 80px;
    padding: 0px;
    article {
      width: 80vw;
      height: 250px;
      z-index: 0;
      margin-bottom: 20px;
      animation: animed 4s alternate infinite;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img {
          width: 80vw;
          height: 250px;
          border-radius: 10px;
        }
        div {
          position: absolute;
          width: 80vw;
          height: 250px;
          border-radius: 10px;
          strong {
            font-size: 1.5em;
            font-weight: 700;
            color: ${(props) => props.theme.secondary};
            visibility: hidden;
          }
          span {
            visibility: hidden;
          }
          p:nth-child(2) {
            font-size: 1.1em;
            font-weight: 700;
            margin: 10px;
            text-align: center;
            color: ${(props) => props.theme.font};
            visibility: hidden;
          }
          p:nth-child(3) {
            visibility: hidden;
            font-size: 1em;
            padding: 4px;
            border-bottom: 5px solid ${(props) => props.theme.secondary};
            box-shadow: 0px 0px 15px ${(props) => props.theme.darkTransparent};
            border-radius: 5px;
            background: ${(props) => props.theme.itemBackgroundColor};
            margin: 10px 0px;
          }
          &:hover {
            background: ${(props) => props.theme.TransparentBackground};
            border-bottom: 10px solid ${(props) => props.theme.secondary};
            strong {
              visibility: visible;
            }
            span {
              visibility: visible;
            }
            p:nth-child(2) {
              visibility: visible;
            }
            p:nth-child(3) {
              visibility: visible;
            }
          }
        }
      }
    }
  }
`;
export const ContainerButtons = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  a {
    color: ${(props) => props.theme.font};
  }
  strong:first-child {
    background: ${(props) => props.theme.secondary};
    font-size: 0.9em;
    font-weight: 700;
    padding: 5px;
    margin-right: 7px;
    align-items: center;
    border-radius: 10px;
    transition: transform 0.2s;
    &:hover {
      background: ${(props) => props.theme.primary};
      -ms-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
  strong:last-child {
    background: ${(props) => props.theme.secondary};
    font-size: 0.9em;
    font-weight: 700;
    padding: 5px;
    align-items: center;
    border-radius: 10px;
    transition: transform 0.2s;
    &:hover {
      background: ${(props) => props.theme.primary};
      -ms-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @media (min-width: 300px) and (max-width: 767px) {
    strong:first-child {
      background: ${(props) => props.theme.secondary};
      font-size: 1.1em;
      font-weight: 700;
      padding: 5px;
      margin-right: 7px;
      align-items: center;
      border-radius: 10px;
      transition: transform 0.2s;
      &:hover {
        background: ${(props) => props.theme.primary};
        -ms-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
    }
    strong:last-child {
      background: ${(props) => props.theme.secondary};
      font-size: 1.1em;
      font-weight: 700;
      padding: 5px;
      align-items: center;
      border-radius: 10px;
      transition: transform 0.2s;
      &:hover {
        background: ${(props) => props.theme.primary};
        -ms-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
    }
  }
`;
