import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
    width: 300px;
    height:100vh;
    background: ${props => props.theme.background};
    box-shadow:0 0 0.5em ${props => props.theme.darkTransparent};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    z-index: 1;

  div{ 
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      margin-top: -70px;
      width: 237px;
      height: 260px;
    } 
    strong{
      margin-top: 10px;
      font-size: 25px;
    }
  }

  @media(min-width: 769px) and (max-width: 1024px){
    width: 100%;
    height:14vh;
    div:nth-child(1){ 
      display: none;
    }
    footer:nth-child(3){
      display: none;
    }

  }
  @media(min-width: 300px) and (max-width: 768px){
    width: 100%;
    height:12vh;
    div:nth-child(1){ 
      display: none;
    }
    footer:nth-child(3){
      display: none;
    }

  }
`;
export const NavContainer = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;

  nav{
    ul{
        list-style: none;
        font-weight: bold;
      }
    li{
      font-size: 18px;
      padding: 20px;
      text-align: center;
    }
  }
  @media(min-width: 769px) and (max-width: 1024px){
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;  
    nav{ 
      height: 100vh;
      width: 30%;
      background: ${props => props.theme.background};
      box-shadow:0 0 0.5em ${props => props.theme.darkTransparent};
      transform: translateX(-9999px);
      transition: all 0.5s;
      position: absolute;
      &.open{
        transform: translateX(0px);
      }
      ul{
        position: relative;
        top: 15vh;
      }
      li{
        font-size: 18px;
        padding: 25px;
        text-align: center;
      }
    }
    
  }
  @media(min-width: 300px) and (max-width: 768px){
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;  
    z-index: 1;
    nav{ 
      height: 100%;
      width: 100%;
      background: ${props => props.theme.background};
      box-shadow:0 0 0.5em ${props => props.theme.darkTransparent};
      transform: translateY(-9999px);
      transition: all 0.5s;
      position: absolute;
      &.open{
        transform: translateY(0px);
      }
      ul{
        position: relative;
        top: 20vh;
     
      }
      li{
        font-size: 16px;
        padding: 25px;
        text-align: center;
      }
    }
    
  }
 
`;

export const NavMobile = styled.header`
display: none;
@media(min-width: 769px) and (max-width: 1024px){
  width: 100%;
  height:14vh;
  background: ${props => props.theme.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 
  z-index:1;
  button{
    margin-top: 10px;
    border: none;
    background: none;
    margin-left: 10px;

  }
  img{
    width: 100px;
    height: 45px;
    margin-right: 10px;
    object-fit: contain;
  }
 
}
@media(min-width: 300px) and (max-width: 768px){
  width: 100%;
  height:12vh;
  background: ${props => props.theme.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 
  z-index:1;
  button{
    margin-top: 10px;
    border: none;
    background: none;
    margin-left: 10px;

  }
  img{
    width: 100px;
    height: 45px;
    margin-right: 10px;
    object-fit: contain;
  }
}
`;
export const Links = styled(NavLink)`
   text-decoration:none;
   font-weight: 500;
   color: ${props =>props.theme.font};
   transition: border-bottom 0.2s;
    &:hover{
      border-bottom:4px solid ${props => props.theme.secondary};
  }

`;

export const Footer = styled.footer`
 display: flex;
 flex-direction: column;
 align-items: center;
   ul{
     list-style: none;
     display: flex;
     flex-direction: row;
     margin: auto;
   }
   li{
     padding-right: 10px;
     margin-bottom: 10px;
     transition: opacity color 0.2s;
     &:hover{
      opacity: 0.4;
      }
    }
  
   
`;



//tem que criar esse midia query tambem
//@media(min-width: 769px) and (max-width: 1024px)
//obs: tem que colocar acima dos outro midiaquery ok
