import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  animation: fadeIn; 
  animation-duration: 1s; 

`;
export const ContainerImg = styled.section`
  width: 60vw;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 0.5em;
  margin-top: 110px;
  
  article {
    width: 20vw; 
    height: 35vh;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;   
        img{
        width: 20vw; 
        height: 35vh;
        border-radius: 8px;
        box-shadow:  0 0 0.5em rgb(106, 90, 205);
        border: 2px solid #4545E5;;
      }
        div{ 
          position: absolute;    
          width: 20vw;
          height: 35vh;
          transition: filter  background 1s;
          strong{     
              font-size: 20px;
              font-weight: 700;
              color: #FFF;   
              visibility: hidden;
            }
          span{        
              visibility: hidden;
            }
          &:hover{      
                backdrop-filter: blur(2px);
                -o-backdrop-filter:blur(2px);
                -ms-backdrop-filter:blur(2px);
                -moz-backdrop-filter:blur(2px);
                -webkit-backdrop-filter:blur(2px);
                background: rgba(0, 0, 0, 0.7);
                strong{
                    visibility:visible;
                    
                }
                span{
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

  strong:first-child{
    border: 2px solid #4545E5;
    background-color: #01001F;
    font-size: 14px;
    font-weight: 700;
    padding: 5px;
    margin-right: 7px;
    align-items: center;
    border-radius: 10px;
    transition: transform .2s;
    
 
   

    &:hover{
        -ms-transform: scale(1.1); 
        -webkit-transform: scale(1.1); 
        transform: scale(1.1);
    }
   
  }
  strong:last-child{
    border: 2px solid #4545E5;
    background-color: #01001F;   
    font-size: 14px;
    font-weight: 700;
    padding: 5px;
    align-items: center;
    border-radius: 10px;
    transition: transform .2s;
    &:hover{
        -ms-transform: scale(1.1); 
        -webkit-transform: scale(1.1); 
        transform: scale(1.1);
    }
 }

`;