import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/background.jpg';



export default createGlobalStyle`
  *{ 
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
  }
  body{
      background: #01001F url(${background}) no-repeat ;
      background-size:100vw 100vh;
      -webkit-font-smoothing: antialiased;
  }
  body,input, button,label,textarea{
      font: 14px Poppins,sans-serif;
      color: #FFF;
  }
  #root {
      height: 100vh;
      display: flex;
      flex-direction: row;
    
  }
  button{
      cursor: pointer;
  }
  a{
     text-decoration: none;
     color: #FFF;
  }
 
 
`;