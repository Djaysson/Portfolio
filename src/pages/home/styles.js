import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const Container = styled.div`
  width: 100vw;
  height:100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: bounceInDown; 
  animation-duration: 2s; 
img:nth-child(3){
    position: relative;
    filter: drop-shadow(2px 2px 6px ${props => props.theme.darkTransparent});
    margin: auto;
    width: 55vw;
    height: 55vh;
    top: -2px;
    animation: zoomIn; 
  animation-duration: 4s; 
  }
`;
export const Section = styled.section`
margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1{
  font-size: 30px;
  font-weight: 500;
  }
  strong{
  font-size: 50px;
  font-weight: 700;
    b{
      color: ${props => props.theme.secondary};
    }
  }
  
`;
export const Button = styled(Link)`
  margin-top: 10px;
  transition: transform 2s;
  z-index: 1;

  strong{
    border: none;
    background-color: ${props => props.theme.secondary};
      border-radius: 15px;
      color: #FFFFFF;
      font-size: 18px;
      font-weight: 500;
      padding: 10px;
      svg{
       margin: auto;
        animation: movingAnimation 2s  infinite;
      }
    &:hover{
      background: ${props => props.theme.primary};
  }
  }
  &:hover{
      -ms-transform: scale(1.1); 
        -webkit-transform: scale(1.1); 
        transform: scale(1.1);
    }
    @keyframes movingAnimation {
    0% {
      opacity: 1;
      transform:  translateY(5px);
      
    }
    100% {
      opacity: 0;
      transform: translateY(20px);
   
    }
  }
`;
