import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  animation: bounceInDown; 
  animation-duration: 2s; 

`;
export const ContainerImg = styled.section`
  @keyframes animed {
      0% {
        transform:  rotatey(5deg);
        filter: drop-shadow(2px 2px 6px ${props => props.theme.primary});
      }
      100% {

        transform: rotateY(-30deg);
      }
    }

  width: 60vw;
  display: grid;
  margin-left: 10em;
  justify-content: center;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 1em;
  margin-top: 110px;
  article {
    width: 16vw; 
    height: 38vh;
    z-index: 1;
    animation: animed 4s alternate infinite;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; 
  
      img{
        width: 16vw; 
        height: 38vh;
        border-radius: 10px;
       
      }
      div{ 
        position: absolute;    
        width: 16vw;
        height: 38vh;
        border-radius: 10px;
        strong{     
          font-size: 25px;
          font-weight: 700;
          color: ${props => props.theme.secondary}; 
          visibility: hidden;
        }
        span{        
          visibility: hidden;
        }
        p:nth-child(2){
          font-size: 13px;
          font-weight: 700;
          margin: 10px;
          text-align: center;
          color: ${props => props.theme.font}; 
          visibility: hidden;
        }
        p:nth-child(3){
          visibility: hidden;  
          font-size: 9px;
          padding: 4px;
          border-bottom: 5px solid ${props => props.theme.secondary};
          box-shadow: 0px 0px 15px ${props => props.theme.darkTransparent};
          border-radius: 5px;
          background: ${props => props.theme.itemBackgroundColor};   
          margin: 10px 0px;
        }
        &:hover{     
          background: ${props => props.theme.TransparentBackground};
          border-bottom: 10px solid ${props => props.theme.secondary};

          strong{
              visibility:visible;         
          }
          span{
              visibility:visible;
          }
          p:nth-child(2){
            visibility:visible;
          }
          p:nth-child(3){
            visibility:visible;

          }
        } 
      }
    }
   
  }
`;
export const ContainerButtons = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 5px;

  a{
    color: ${props => props.theme.font};
  }
  strong:first-child{
    background: ${props => props.theme.secondary};
    font-size: 14px;
    font-weight: 700;
    padding: 5px;
    margin-right: 7px;
    align-items: center;
    border-radius: 10px;
    transition: transform .2s;
    &:hover{
      background: ${props => props.theme.primary};
        -ms-transform: scale(1.1); 
        -webkit-transform: scale(1.1); 
        transform: scale(1.1);
    }
   
  }
  strong:last-child{
    background: ${props => props.theme.secondary};
    font-size: 14px;
    font-weight: 700;
    padding: 5px;
    align-items: center;
    border-radius: 10px;
    transition: transform .2s;
    &:hover{
      background: ${props => props.theme.primary};
      -ms-transform: scale(1.1); 
      -webkit-transform: scale(1.1); 
      transform: scale(1.1);
    }
  }

`;