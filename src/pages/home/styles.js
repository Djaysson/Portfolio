import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height:100vh;
  display: flex;
  flex-direction: column;

  header{
      text-align: right;
      margin: 10px;

      img{
          max-width: 120px;
      }
  }
`;
export const Section = styled.section`

  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1{
  font-size: 30px;
  font-weight: bold;
  }
  strong{
  font-size: 50px;
  font-weight: bold;
  }
`;
export const Button = styled(Link)`
  text-decoration: none;
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
      border: 5px solid #90235C;
  }
  }
`;

