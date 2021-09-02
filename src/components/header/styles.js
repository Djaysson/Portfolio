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
`;
export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;

  ul{
      list-style: none;
      font-weight: bold;
  
  }
  li{
     font-size: 18px;
     padding: 10px;
     text-align: center;
  }
 
`;
export const Links = styled(NavLink)`
   text-decoration:none;
   font-weight: 500;
   color: ${props =>props.theme.font};
   transition: opacity color 0.2s;
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
