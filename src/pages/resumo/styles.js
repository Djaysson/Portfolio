import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  animation: fadeIn; 
  animation-duration: 1s; 
`;

export const Section = styled.section`
  margin: 0 auto;
  margin-top: 90px;
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
    grid-template-columns: repeat(2,0.5fr);
    margin-bottom: 10px;
    
    div{
    display: flex;
    flex-direction: column;
    border: 2px solid #4545E5;
    background-color: #01001F;
    border-radius: 5px;
    width:30vw;
    height: 21vh;
      span{
       background-color: #4545E5;
       text-align: center;
       margin: 4px 4px 0px 4px;
      }
      p{
        font-size: 16px;
        font-weight: 700;
        padding-left: 15px;
      }
      a{
        font-size: 14px;
       font-weight: 500; 
       color: #FFF;  
       transition: transform 1s;
       img{ 
         padding-left: 28px;
         margin-top: 8px;
         width: 80px;
         height: 30px;
       }

       &:hover{
        color: #4545E5;
        -ms-transform: scale(1.1); 
        -webkit-transform: scale(1.1); 
        transform: scale(1.1);
    }
      }
    
    }
  }
`;
export const Skills = styled.footer`
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
    border: 2px solid #4545E5;
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
    border: 2px solid #4545E5;
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
