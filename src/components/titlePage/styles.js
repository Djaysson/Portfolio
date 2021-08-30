import styled from 'styled-components';

export const Container = styled.header`
   margin-top: -100px;
  display: flex;
  justify-content: center;
strong{
    position: absolute;
    font-size: 100px;
    font-family: 'Rampart One', cursive;
    text-align: center;
    opacity:0.1 ;
    color: ${props => props.theme.fontLight};

}
span{  
    position: relative;
    text-align: center;
    font-size: 25px;
    font-weight: 700;
    top: 70px;
    bottom: 30px;
    left: 5px;
    right: 95px;
}

`;