import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 110px;
  button {
    border: none;
    background: none;
    margin: 0 30px;
    padding: 10px;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
      color: ${(props) => props.theme.secondary};
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    top: 90px;
    button {
      margin: 0 20px;
      padding: 10px;
      font-size: 16px;
    }
  }
  @media (min-width: 300px) and (max-width: 768px) {
    top: 60px;
    button {
      margin: 0 5px;
      padding: 5px;
      font-size: 14px;
    }
  }
`;
