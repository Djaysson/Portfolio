import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  animation: bounceInDown; 
  animation-duration: 2s; 
`;
export const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 150px;
  padding: 20px;
  
`;
export const ContainerContato = styled.div`

display: flex;
flex-direction: column;

div:first-child{
    margin-left: 20px;
    
   h1{
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 10px;
    text-transform: uppercase;
    }
   ul{
    list-style: none;  
    display: flex;
    flex-direction: column;  
   }
   li{
    display: flex;
    align-items: center;
    transition: opacity 0.2s;
    &:hover{
    opacity: 0.4;
    
  }
    
    a{
    margin-left: 10px;
    font-size: 17px;
    font-weight: 500;
    }
   }

}

div:last-child{
    margin-left: 20px;
  
   h1{
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 50px;
    padding-bottom: 10px;
    }
   ul{
    list-style: none;  
    display: flex;
    flex-direction: row;    
   }
   li{
    display: flex;
    align-items: center;
    margin: auto;
    transition: opacity 0.2s;
    &:hover{
    opacity: 0.4;
    
  }
    
    a{
    margin-left: 10px;
    
    }
   }

}
  
`;
export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  width: 55vw;
  label{
    font-size: 18px;
    font-weight: 500; 
   text-transform: uppercase;
  }
  div{
   display: flex;
   flex-direction: row;
   justify-content: space-between;

   input{
   border: 2px solid #4545E5;
   background: #01001F;
   width: 27vw;
   height: 7vh;
   padding-left: 10px;
   border-radius: 10px;
   margin-bottom: 12px;
   transition:  border 0.2s;
    &::placeholder{
      color: #FFF;
      font-weight: 500;
    }
    &:focus{
      border: 4px solid #4545E5;
   
  }
   }
  }

  textarea{
    resize: none;
    width: 55vw;
    height: 35vh;
    border: 2px solid #4545E5;
    background: #01001F;
    padding: 10px;
    margin-bottom: 12px;
    border-radius: 10px;
    transition:  border 0.2s;
   &::placeholder{
      color: #FFF;
      font-weight: 500;
    }
    &:focus{
      border: 4px solid #4545E5;
    }
  }
`;
export const Button = styled.input`
  width: 10vw;
  height: 6vh;
  margin: auto;
  border: 2px solid #4545E5;
  border-radius: 10px;
  font-weight: 500;
  background: #01001F;
  transition:  transform 1s;
    &:hover{
      border: 3px solid #4545E5;
      -ms-transform: scale(1.1); 
      -webkit-transform: scale(1.1); 
      transform: scale(1.1);
    }
   
`;
