import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(90vh - 10px);
  overflow: hidden;
  h1 {
    text-align: center;
    font-size: 0.8em;
    animation: fadeIn 1s alternate infinite;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    height: calc(70vh - 10px);
    h1 {
      font-size: 0.7em;
    }
  }
  @media (min-width: 300px) and (max-width: 767px) {
    height: calc(70vh - 10px);
    h1 {
      font-size: 0.6em;
    }
  }
`;
export const Spinner = styled.div`
  border: 6px solid ${(props) => props.theme.TransparentBackground};
  box-shadow: 0px 0px 5px ${(props) => props.theme.darkTransparent};
  border-left-color: ${(props) => props.theme.secondary};
  height: 110px;
  width: 110px;
  border-radius: 50%;
  position: absolute;
  animation: spin 1s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    border: 5px solid ${(props) => props.theme.TransparentBackground};
    border-left-color: ${(props) => props.theme.secondary};
    height: 90px;
    width: 90px;
    position: absolute;
    animation: spin 1s linear infinite;
  }
  @media (min-width: 300px) and (max-width: 767px) {
    border: 5px solid ${(props) => props.theme.TransparentBackground};
    border-left-color: ${(props) => props.theme.secondary};
    height: 70px;
    width: 70px;
    position: absolute;
    animation: spin 1s linear infinite;
  }
`;
