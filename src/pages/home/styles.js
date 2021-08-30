import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const Container = styled.div`
  width: 100vw;
  height:100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: fadeIn; 
  animation-duration: 2s; 
img:nth-child(3){
    position: relative;
    margin: auto;
    width: 55vw;
    height: 55vh;
    bottom: -12px;
    z-index: 1;
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
  }
  
`;
export const Button = styled(Link)`
  margin-top: 10px;
  transition: transform 1s;
  strong{
     border: 2px solid #4545E5;
     background-color: #01001F;
      border-radius: 15px;
      color: #FFFFFF;
      font-size: 18px;
      font-weight: 500;
      padding: 10px;
      margin: 10px;
    &:hover{
      border: 3px solid #4545E5;
  }
  }
  &:hover{
      -ms-transform: scale(1.1); 
        -webkit-transform: scale(1.1); 
        transform: scale(1.1);
    }
`;
