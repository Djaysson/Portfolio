import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  div {
    width: 60px;
    height: 60px;
    box-shadow: 0 0 40px ${(props) => props.theme.primary};
    position: absolute;
    img {
      width: 100%;
      height: 100%;
      background: ${(props) => props.theme.secondary};
      border-radius: 10px;
    }
  }

  div:nth-child(1) {
    top: 20%;
    left: 40%;
    animation: square 5s linear infinite;
  }
  div:nth-child(2) {
    top: 10%;
    left: 60%;
    animation: square 7s linear infinite;
  }
  div:nth-child(3) {
    top: 60%;
    left: 20%;
    animation: square 9s linear infinite;
  }
  div:nth-child(4) {
    top: 60%;
    left: 40%;
    animation: square 11s linear infinite;
  }
  div:nth-child(5) {
    top: 90%;
    left: 60%;
    animation: square 15s linear infinite;
  }
  div:nth-child(6) {
    top: 80%;
    left: 30%;
    animation: square 13s linear infinite;
  }
  div:nth-child(7) {
    top: 10%;
    left: 20%;
    animation: square 12s linear infinite;
  }
  div:nth-child(8) {
    top: 20%;
    left: 85%;
    animation: square 8s linear infinite;
  }
  div:nth-child(9) {
    top: 75%;
    left: 65%;
    animation: square 9s linear infinite;
  }
  div:nth-child(10) {
    top: 80%;
    left: 90%;
    animation: square 7s linear infinite;
  }

  /* Animação */
  @keyframes square {
    0% {
      transform: scale(0) translateY(0) rotate(0);
      opacity: 1;
    }
    100% {
      transform: scale(1.2) translateY(-90px) rotate(360deg);
      opacity: 0;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    overflow-x: hidden;
    div {
      width: 30px;
      height: 30px;
      box-shadow: 0 0 40px ${(props) => props.theme.primary};
      position: absolute;
      img {
        width: 100%;
        height: 100%;
        background: ${(props) => props.theme.secondary};
        border-radius: 5px;
      }
    }

    div:nth-child(1) {
      top: 35%;
      left: 10%;
      animation: square 5s linear infinite;
    }
    div:nth-child(2) {
      top: 45%;
      left: 60%;
      animation: square 7s linear infinite;
    }
    div:nth-child(3) {
      top: 70%;
      left: 5%;
      animation: square 9s linear infinite;
    }
    div:nth-child(4) {
      top: 60%;
      left: 40%;
      animation: square 11s linear infinite;
    }
    div:nth-child(5) {
      top: 96%;
      left: 60%;
      animation: square 15s linear infinite;
    }
    div:nth-child(6) {
      top: 96%;
      left: 20%;
      animation: square 13s linear infinite;
    }
    div:nth-child(7) {
      top: 10%;
      left: 20%;
      animation: square 12s linear infinite;
    }
    div:nth-child(8) {
      top: 20%;
      left: 85%;
      animation: square 8s linear infinite;
    }
    div:nth-child(9) {
      top: 60%;
      left: 80%;
      animation: square 9s linear infinite;
    }
    div:nth-child(10) {
      top: 90%;
      left: 94%;
      animation: square 7s linear infinite;
    }
  }
  @media (min-width: 300px) and (max-width: 767px) {
    overflow-x: hidden;
    div {
      width: 25px;
      height: 25px;
      box-shadow: 0 0 40px ${(props) => props.theme.primary};
      position: absolute;
      img {
        width: 100%;
        height: 100%;
        background: ${(props) => props.theme.secondary};
        border-radius: 5px;
      }
    }

    div:nth-child(1) {
      top: 25%;
      left: 40%;
      animation: square 4s linear infinite;
    }
    div:nth-child(2) {
      top: 60%;
      left: 80%;
      animation: square 7s linear infinite;
    }
    div:nth-child(3) {
      top: 40%;
      left: 5%;
      animation: square 9s linear infinite;
    }
    div:nth-child(4) {
      top: 60%;
      left: 40%;
      animation: square 11s linear infinite;
    }
    div:nth-child(5) {
      top: 95%;
      left: 60%;
      animation: square 15s linear infinite;
    }
    div:nth-child(6) {
      top: 97%;
      left: 5%;
      animation: square 13s linear infinite;
    }
    div:nth-child(7) {
      top: 10%;
      left: 20%;
      animation: square 12s linear infinite;
    }
    div:nth-child(8) {
      top: 35%;
      left: 85%;
      animation: square 8s linear infinite;
    }
    div:nth-child(9) {
      top: 75%;
      left: 2%;
      animation: square 9s linear infinite;
    }
    div:nth-child(10) {
      top: 96%;
      left: 90%;
      animation: square 7s linear infinite;
    }
  }
`;
