import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  animation: fadeIn; 
  animation-duration: 1s; 
`;
export const Title = styled.header`
  margin-top: -100px;
  display: flex;
  justify-content: center;
strong{
    position: absolute;
    font-size: 100px;
    font-weight: bold;
    text-align: center;
    opacity:0.2 ;
}
span{  
    position: relative;
    text-align: center;
    font-size: 25px;
    font-weight: 700;
    top: 60px;
    bottom: 40px;
    left: 5px;
    right: 95px;
}
`;
export const Section = styled.section`
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  padding-left: 85px;

  h1{
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 5px;
    text-align: left;
    }
    div{
    display: grid;
    grid-template-columns: repeat(3,0.3fr);
    margin-bottom: 18px;
    
    div{
    display: flex;
    flex-direction: column;
    border: 2px solid #90235C;
    background-color: #01001F;
    border-radius: 5px;
    width: 22vw;
    height: auto;
    transition: border 0.2s;
    &:hover{
      border: 3px solid #90235C;
    }
      span{
       background-color: #90235C;
       text-align: center;
       margin: 4px 4px 0px 4px;
      }
      p{
        font-size: 16px;
        font-weight: 700;
        padding-left: 2px;
      }
      a{
        font-size: 14px;
       font-weight: 500; 
       color: #C81D76;  
       padding-left: 2px;
       transition: opacity 0.2s;
          &:hover{
          opacity: 0.7;
          
        }
      }
    
    }
  }
`;
export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;

  div:first-child{
  
   h1{
    text-align: center;
    font-size: 20px;
    color: #FFF;
   
   }
   ul{
   list-style: none;
   display: grid;
   grid-template-columns: repeat(3,0.7fr);
   grid-gap: 0.3em;

   }
   li{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid #90235C;
    background-color: #01001F;
    border-radius: 5px;
    width: 11vw;
    height: 7vh;
    padding: 5px;
    
   }
   span{
     font-size: 12px;
     font-weight: 500;
     text-align: center;
   }
 }
 div:last-child{
  
  h1{
    text-align: center;
    font-size: 20px;
    color: #FFF;
   
   }
   ul{
   list-style: none;
   display: grid;
   grid-template-columns: repeat(4,0.7fr);
   grid-gap: 0.3em;

   }
   li{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid #90235C;
    background-color: #01001F;
    border-radius: 5px;
    width: 11vw;
    height: 7vh;
    padding: 5px;
    
   }
   span{
     font-size: 12px;
     font-weight: 500;
     text-align: center;
   }
 }
`;
export const Button = styled.a`
display:  flex;
align-items: center;
justify-content: center;
margin-top: 20px;
  strong{
     width: 12vw;
     text-align: center;
     border: 2px solid #90235C;
     background-color: #01001F;
      border-radius: 15px;
      color: #FFFFFF;
      font-size: 18px;
      font-weight: 500;
      padding: 4px;
      margin: 4px;
      transition:width border 0.2s;
    &:hover{
      border: 4px solid #90235C;
      width: 13vw;
  }
  }
`;