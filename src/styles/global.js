import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
  *{ 
      margin: 0px;
      padding: 0px;
      outline: 0px;
      box-sizing: border-box;
  }
  body{
    background: rgb(8, 8, 26) none repeat scroll 0% 0%;
      height: 100vh;
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