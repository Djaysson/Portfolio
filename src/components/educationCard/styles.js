import styled from "styled-components";

export const ItemCard = styled.div`
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
  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 32vw;
    height: 170px;
    
  }

  @media (min-width: 768px) and (max-width: 1024px) {
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
  @media (min-width: 300px) and (max-width: 767px) {
   
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
    
  
`;
