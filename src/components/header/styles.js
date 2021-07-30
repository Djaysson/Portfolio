import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
    width: 300px;
    height:100% ;
    background: rgb(8, 8, 26);
    box-shadow:0 0 0.5em #542EFF;
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
   transition: opacity color 0.2s;
    &:hover{
      opacity: 0.4;
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
   p{
     font-size: 13px;
     padding-bottom: 10px;
     img{
       width: 25px;
     }
   }
`;
