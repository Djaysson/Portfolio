import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 10px;
    img{
      transition: transform .2s;
      max-width: 120px;
      &:hover{
        -ms-transform: scale(1.1); 
        -webkit-transform: scale(1.1); 
        transform: scale(1.1);
      }
    }
      `;




