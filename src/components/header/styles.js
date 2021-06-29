import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
    min-width: 250px;
    height: 100vh;
    background-color: #01001F;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

  div{ 
    display: flex;
    flex-direction: column;
    align-items: center;
  img{
      width: 160px;
      height: 160px;
      margin-top: 40px;
      border: 5px solid #fff;
      border-radius: 100px;
  }
  strong{
      margin-top: 10px;
      font-size: 20px;
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
     font-size: 17px;
     padding: 10px;
     text-align: center;
  }
 
`;
export const Links = styled(Link)`
   text-decoration:none;
   font-weight: 500;
   color: #FFFFFF;
   transition:  color 0.2s;
    &:hover{
    color: #90235C;
  }
`;
export const Footer = styled.footer`
   padding-bottom: 10px;
   color: #FFFFFF;
   span{
     padding: 10px;
     transition: opacity 0.2s;
    &:hover{
    opacity: 0.4;
    
  }
   }
`;
