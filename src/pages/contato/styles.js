import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
export const Title = styled.header`
   margin-top: -70px;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 150px;
  padding: 20px;
  animation: fadeIn; 
  animation-duration: 1s; 
  
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
   border: 2px solid #90235C;
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
      border: 4px solid #90235C;
   
  }
   }
  }

  textarea{
    resize: none;
    width: 55vw;
    height: 35vh;
    border: 2px solid #90235C;
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
      border: 4px solid #90235C;
   
  }
  }
`;
export const Button = styled.input`
  width: 10vw;
  height: 6vh;
  margin: auto;
  border: 2px solid #90235C;
  border-radius: 10px;
  font-weight: 500;
  background: #01001F;
  transition:  height border 0.2s;
    &:hover{
      border: 4px solid #90235C;
      height: 7vh;
  }

`;
