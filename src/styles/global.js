import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
  *{ 
      margin: 0px;
      padding: 0px;
      outline: 0px;
      box-sizing: border-box;
  }
  body{
    background: ${props => props.theme.background} none repeat scroll 0% 0%;
      height: 100vh;
      -webkit-font-smoothing: antialiased;
  }
  body,input, button,label,textarea{
      font: 16px 'Roboto',sans-serif;
      color: ${props => props.theme.font};
  }
  #root {
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: row;
    
  }
  button{
      cursor: pointer;
  }
  a{
     text-decoration: none;
     color: ${props => props.theme.font};
  }
 
 
`;