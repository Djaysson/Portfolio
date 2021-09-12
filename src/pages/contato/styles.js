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
  margin-top: 180px;
  padding: 20px;
  
`;
export const ContainerContato = styled.div`

display: flex;
flex-direction: column;
z-index: 1;

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
    svg{
      box-shadow: 0px 0px 3px ${props => props.theme.darkTransparent};
    }
    &:hover{
    opacity: 0.4;
    }
    a{
    margin-left: 10px;
    font-size: 17px;
    font-weight: 500;
    color: ${props => props.theme.fontLight};
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
    svg{
      box-shadow: 0px 0px 3px ${props => props.theme.darkTransparent};
    }
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
  z-index: 1;
  label{
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: 500; 
    text-transform: uppercase;
  }
  div{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
    input{
      border: none;
      border-bottom: 4px solid ${props => props.theme.secondary};
      background:${props => props.theme.itemBackgroundColor};
      width: 27vw;
      height: 7vh;
      padding-left: 10px;
      border-radius: 5px;
      margin-bottom: 12px;
      transition:  border 0.2s;
      &::placeholder{
        color: ${props => props.theme.fontLight};
        font-weight: 400;
        opacity: 0.3;
      }
      &:focus{
        border: none;
        background:${props => props.theme.itemBackgroundColor};
        border-bottom: 4px solid ${props => props.theme.primary};
      }
      &:-webkit-autofill {
        box-shadow: 0 0 0 30px ${props => props.theme.itemBackgroundColor} inset;
      -webkit-text-fill-color: ${props => props.theme.fontLight} !important;
    }
    }
  }

  textarea{
    resize: none;
    width: 55vw;
    height: 35vh;
    border: none;
    border-bottom: 4px solid ${props => props.theme.secondary};
    background:${props => props.theme.itemBackgroundColor};
    padding: 10px;
    margin-bottom: 12px;
    border-radius: 10px;
    transition:  border 0.2s;
    &::placeholder{
      color: ${props => props.theme.fontLight};
        font-weight: 400;
        opacity: 0.3;
      }
      &:focus{
        border: none;
        background:${props => props.theme.itemBackgroundColor};
        border-bottom: 4px solid ${props => props.theme.primary};
      }
    }
`;
export const Button = styled.input`
  width: 10vw;
  height: 6vh;
  margin: auto;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  background:${props => props.theme.secondary};
  box-shadow: 0px 0px 15px ${props => props.theme.darkTransparent};
  transition:  transform 1s;
    &:hover{
      background: ${props => props.theme.primary};
      -ms-transform: scale(1.1); 
      -webkit-transform: scale(1.1); 
      transform: scale(1.1);
    }
`;
