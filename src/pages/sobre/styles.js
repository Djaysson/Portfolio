import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
 width: 100vw;
 height: 100vh;
 display: flex;
 flex-direction:column;
 animation: bounceInDown; 
  animation-duration: 2s; 

  img:nth-child(4){
    position: relative;
    margin-left:auto;
    width: 32vw;
    height: 66vh;
    top: -280px;
    z-index: 0;
    
  }
`;
export const Section = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 160px;
  z-index: 1;
  
 
 div{
    flex-direction: column;
    width: 50vw;
    margin-left: 20px;
    h1{
      margin-bottom: 20px;
      font-size: 25px;
      font-weight: 700;
    }
    p{
      font-size:16px; 
      text-indent:10px;
      line-height: 20px;
      text-align: justify;
      font-weight: 500;
      margin-bottom: 15px;
    }
    strong{
      color: #4545E5;
    }
 }
`;
export const Aside = styled.aside`
     margin-left: 40px;
   margin-top: 50px;
   width: 25vw;
   ul{
    list-style: none;
    li{
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 30px;
      border-bottom: 1px solid #4545E5;;
    }
    span{
      padding-left: 4px;
     
      a{
        transition: color.2s;
       &:hover{
          color: #4545E5;;
        }
      }
  } }
`;
export const LinkButton = styled(Link)`
  transition: transform 1s;
  span{
     border: 2px solid #4545E5;
     background-color: #01001F;
      border-radius: 15px;
      color: #FFF;
      font-size: 16px;
      font-weight: 500;
      padding: 5px;
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
export const Button = styled.a`
display:  flex;
align-items: center;
justify-content: center;
transition: transform 1s;

  strong{
     width: 25vw;
     text-align: center;
     border: 2px solid #4545E5;
      border-radius: 15px;
      color: #FFFFFF;
      font-size: 18px;
      font-weight: 500;
      padding: 5px;
      margin: 5px;
     
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
