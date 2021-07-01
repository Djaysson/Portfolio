import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height:100vh;
  display: flex;
  flex-direction: column;
`;
export const Section = styled.section`

  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1{
  font-size: 30px;
  font-weight: 500;
  }
  strong{
  font-size: 50px;
  font-weight: 700;
  }
`;
export const Button = styled(Link)`
  margin-top: 20px;
  strong{
     border: 3px solid #90235C;
      border-radius: 15px;
      color: #FFFFFF;
      font-size: 20px;
      padding: 10px;
      margin: 10px;
      transition: border 0.2s;
    &:hover{
      border: 4px solid #90235C;
  }
  }
`;

