import styled from 'styled-components';

export const Container = styled.div`
 width: 100vw;
 height: 100vh;
 display: flex;
 flex-direction:column;
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
  display: flex;
  flex-direction: row;
  margin-top: 160px;
  
 
 div{
    flex-direction: column;
    width: 50vw;
    margin-left: 20px;
    h1{
      margin-bottom: 20px;
      font-size: 25px;
      font-weight: 700;
    }
    p{
      font-size:16px; 
      text-indent:10px;
      line-height: 20px;
      text-align: justify;
      font-weight: 500;
    }
    strong{
      color: #C81D76;
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
      border-bottom: 1px solid #90235C;
    }
    span{
      padding-left: 4px;
     
      a{
        transition: color.2s;
       &:hover{
          color: #90235C;
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
     border: 2px solid #90235C;
      border-radius: 15px;
      color: #FFFFFF;
      font-size: 18px;
      font-weight: 500;
      padding: 5px;
      margin: 5px;
     
    &:hover{
      border: 3px solid #90235C;
    }
  }
  &:hover{
      -ms-transform: scale(1.1); 
      -webkit-transform: scale(1.1); 
      transform: scale(1.1);
    }
`;
