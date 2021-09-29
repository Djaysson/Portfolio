import "react-toastify/dist/ReactToastify.css";

import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
    /* Works on Firefox */
  * {
      scrollbar-width: 5px;
      scrollbar-color: #4717F3 rgba(0, 0, 0, 0.7) ; 
    }
    
    /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
      width: 5px;
    }
    
  *::-webkit-scrollbar-track {
      background:${(props) => props.theme.scrollbarDarkColor};
    }
    
  *::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.scrollbarLighterColor};
      border-radius: 5px;     
  }

  *{ 
      margin: 0px;
      padding: 0px;
      outline: 0px;
      box-sizing: border-box;
      scroll-behavior: smooth;
  }
  body{
    background: ${(props) => props.theme.background} none repeat;
      height: 100vh;
      -webkit-font-smoothing: antialiased;
  }
  body,input, button,label,textarea{
      font: 16px 'Roboto',sans-serif;
      color: ${(props) => props.theme.font};
  }
  #root {
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: row;  
      --toastify-color-progress-success:  ${(props) => props.theme.secondary};
      --toastify-font-family:'Roboto', sans-serif;
      
  }
  button{
      cursor: pointer;
  }
  a{
     text-decoration: none;
  }
 
  @media(min-width: 769px) and (max-width: 1024px){
    body,input, button,label,textarea{
      font: 16px 'Roboto',sans-serif;
    }
    #root {
      display: flex;
      flex-direction: column;
    }
  }
  @media(min-width: 300px) and (max-width: 768px){
    body,input, button,label,textarea{
      font: 12px 'Roboto',sans-serif;
    }
    #root {
      display: flex;
      flex-direction: column;
    }
  }

`;
