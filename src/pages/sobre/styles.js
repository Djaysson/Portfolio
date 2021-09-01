import styled from 'styled-components';

export const Container = styled.div`
 width: 100vw;
 height: 100vh;
 display: flex;
 flex-direction:column;
 animation: bounceInDown; 
  animation-duration: 2s; 
  overflow: hidden;
 

  img:nth-child(4){
    position: relative;
    width: 32vw;
    height: 65vh;
    right: -680px;
    bottom: 240px;
    z-index: 0;
    animation: animatedImage 4s alternate infinite;

    @keyframes animatedImage{
      0% {
        filter: drop-shadow(0px);
        transform:  translateX(0px);
      
      }
      100% {
        filter: drop-shadow(100px -60px 100px ${props => props.theme.primary});
        transform: translateX(-90px);
        
      }
    }
  }
`;
export const Section = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 198px;
  z-index: 1;
  
 
 div{
    flex-direction: column;
    width: 50vw;
    margin-left: 20px;
    h1{
      margin-bottom: 20px;
      font-size: 25px;
      font-weight: 700;
      animation:  bounceInDown; 
      animation-duration: 8s; 
    }
    p{
      font-size:16px; 
      text-indent:10px;
      line-height: 20px;
      text-align: left;
      font-weight: 500;
      margin-bottom: 15px;
    }
    p:nth-child(2){
      animation:bounceInDown;  
     animation-duration: 6s; 
    }
    p:nth-child(3){
     animation:bounceInDown; 
     animation-duration: 4s; 
    }
    p:nth-child(4){
    animation:bounceInDown; 
     animation-duration: 2s; 
    }
    strong{
      color: ${props => props.theme.secondary};
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
      border-bottom: 1px solid ${props => props.theme.secondary};
    }
    li:nth-child(1){
      animation:bounceInDown; 
     animation-duration: 8s; 
    }
    li:nth-child(2){
      animation:bounceInDown; 
     animation-duration: 6s; 
    }
    li:nth-child(3){
      animation:bounceInDown; 
     animation-duration: 4s; 
    }
    span{
      padding-left: 4px;
     
      a{
        transition: color.2s;
       &:hover{
          color: ${props => props.theme.secondary};
        }
      }
  } }
`;

export const Button = styled.a`
display:  flex;
align-items: center;
justify-content: center;
transition: transform 1s;

  strong{
    width: 25vw;
    text-align: center;
    background: ${props => props.theme.secondary};
    box-shadow: 0px 0px 15px ${props => props.theme.darkTransparent};
    border-radius: 15px;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 500;
    padding: 5px;
    margin: 5px;
    animation:bounceInDown; 
    animation-duration: 2s; 
    &:hover{
      background: ${props => props.theme.primary};
    }
  }
  &:hover{
      -ms-transform: scale(1.1); 
      -webkit-transform: scale(1.1); 
      transform: scale(1.1);
    }
`;
