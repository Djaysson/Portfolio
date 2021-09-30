import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  animation: bounceInDown;
  animation-duration: 2s;
  overflow: hidden;
  overflow-y: initial;

  @media (min-width: 768px) and (max-width: 1024px) {
    overflow-y: initial;
  }
  @media (min-width: 300px) and (max-width: 767px) {
    overflow-y: initial;
  }
`;
export const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 172px;
  padding: 0px 30px;
  @media (min-width: 768px) and (max-width: 1024px) {
    overflow-y: initial;
    margin-top: 150px;
    padding: 0px 20px;
  }
  @media (min-width: 300px) and (max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 80px;
    padding: 0px 5px;
  }
`;

export const ContainerContato = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;

  div:first-child {
    width: 18vw;

    margin-bottom: 50px;

    h1 {
      font-size: 1.6em;
      font-weight: 500;
      padding: 10px 0px;
      text-transform: capitalize;
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    li {
      display: flex;
      align-items: center;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.4;
      }
      a {
        font-size: 1em;
        font-weight: 400;
        color: ${(props) => props.theme.fontLight};
      }
      a:nth-child(2) {
        padding-left: 5px;
      }
    }
  }

  div:last-child {
    width: 18vw;
    h1 {
      text-align: center;
      font-size: 1.6em;
      font-weight: 500;
      text-transform: capitalize;
      padding: 10px 0px;
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
    li {
      transition: opacity 0.2s;
      &:hover {
        opacity: 0.4;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 0;
    div:first-child {
      width: 20vw;
      margin: 0px;
      margin-bottom: 50px;

      h1 {
        font-size: 1.5em;
        font-weight: 500;
        padding: 10px 0px;
        text-align: center;
        text-transform: capitalize;
      }
      ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
      }
      li {
        display: flex;
        align-items: center;
        transition: opacity 0.2s;
        &:hover {
          opacity: 0.4;
        }
        a {
          font-weight: 400;
          color: ${(props) => props.theme.fontLight};
        }
        a:nth-child(2) {
          display: none;
        }
      }
    }
    div:last-child {
      width: 20vw;
      h1 {
        text-align: center;
        font-size: 1.5em;
        font-weight: 500;
        text-transform: capitalize;
        padding: 10px 0px;
      }
      ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
      }
      li {
        transition: opacity 0.2s;
        &:hover {
          opacity: 0.4;
        }
      }
    }
  }
  @media (min-width: 300px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: fadeInLeft;
    animation-duration: 2s;
    z-index: 0;
    div:first-child {
      width: 50vw;
      margin: 50px 0;

      h1 {
        font-size: 1.4em;
        font-weight: 500;
        padding: 10px 0px;
        text-align: center;
        text-transform: capitalize;
      }
      ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
      }
      li {
        display: flex;
        align-items: center;
        transition: opacity 0.2s;
        &:hover {
          opacity: 0.4;
        }
        a {
          font-weight: 400;
          color: ${(props) => props.theme.fontLight};
        }
        a:nth-child(2) {
          display: none;
        }
      }
    }

    div:last-child {
      width: 70vw;
      margin-bottom: 50px;

      h1 {
        text-align: center;
        font-size: 1.4em;
        font-weight: 500;
        text-transform: capitalize;
        padding: 10px 0px;
      }
      ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
      }
      li {
        transition: opacity 0.2s;
        &:hover {
          opacity: 0.4;
        }
      }
    }
  }
`;
export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 57vw;
  z-index: 1;
  label {
    padding: 5px 20px;
    font-size: 1.6em;
    font-weight: 500;
    text-transform: capitalize;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    input {
      border: none;
      border-bottom: 4px solid ${(props) => props.theme.secondary};
      background: ${(props) => props.theme.itemBackgroundColor};
      width: 26vw;
      height: 60px;
      padding-left: 10px;
      border-radius: 10px;
      margin-bottom: 20px;
      transition: border 0.2s;
      &::placeholder {
        color: ${(props) => props.theme.fontLight};
        font-weight: 400;
        opacity: 0.3;
      }
      &:focus {
        border: none;
        background: ${(props) => props.theme.itemBackgroundColor};
        border-bottom: 4px solid ${(props) => props.theme.primary};
      }
      &:-webkit-autofill {
        box-shadow: 0 0 0 30px ${(props) => props.theme.itemBackgroundColor}
          inset;
        -webkit-text-fill-color: ${(props) => props.theme.fontLight} !important;
      }
    }
  }

  textarea {
    margin: 0 auto;
    resize: none;
    width: 55vw;
    height: 250px;
    border: none;
    border-bottom: 4px solid ${(props) => props.theme.secondary};
    background: ${(props) => props.theme.itemBackgroundColor};
    padding: 10px;
    border-radius: 10px;
    transition: border 0.2s;
    &::placeholder {
      color: ${(props) => props.theme.fontLight};
      font-weight: 400;
      opacity: 0.3;
    }
    &:focus {
      border: none;
      background: ${(props) => props.theme.itemBackgroundColor};
      border-bottom: 4px solid ${(props) => props.theme.primary};
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    overflow-y: initial;
    display: flex;
    flex-direction: column;
    width: 70vw;
    z-index: 0;
    label {
      padding: 10px 0px;
      text-align: left;
      font-size: 1.5em;
      font-weight: 500;
      text-transform: capitalize;
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      input {
        border: none;
        border-bottom: 4px solid ${(props) => props.theme.secondary};
        background: ${(props) => props.theme.itemBackgroundColor};
        width: 70vw;
        height: 50px;
        padding-left: 10px;
        border-radius: 10px;
        margin-bottom: 20px;
      }
    }

    textarea {
      margin: 0 auto;
      resize: none;
      width: 70vw;
      height: 200px;
      border: none;
      border-bottom: 4px solid ${(props) => props.theme.secondary};
      background: ${(props) => props.theme.itemBackgroundColor};
      padding: 10px;
      border-radius: 10px;
      transition: border 0.2s;
    }
  }
  @media (min-width: 300px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    z-index: 0;
    animation: fadeInLeft;
    animation-duration: 2s;
    label {
      padding: 10px 0px;
      text-align: center;
      font-size: 1.4em;
      font-weight: 500;
      text-transform: capitalize;
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      input {
        border: none;
        border-bottom: 4px solid ${(props) => props.theme.secondary};
        background: ${(props) => props.theme.itemBackgroundColor};
        width: 80vw;
        height: 40px;
        padding-left: 10px;
        border-radius: 10px;
        margin-bottom: 18px;
        transition: border 0.2s;
      }
    }

    textarea {
      margin: 0 auto;
      resize: none;
      width: 80vw;
      height: 150px;
      border: none;
      border-bottom: 4px solid ${(props) => props.theme.secondary};
      background: ${(props) => props.theme.itemBackgroundColor};
      padding: 10px;
      border-radius: 10px;
      transition: border 0.2s;
    }
  }
`;
export const Button = styled.input`
  width: 25vw;
  height: 40px;
  margin: 15px auto;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  background: ${(props) => props.theme.secondary};
  box-shadow: 0px 0px 15px ${(props) => props.theme.darkTransparent};
  transition: transform 1s;
  &:hover {
    background: ${(props) => props.theme.primary};
    -ms-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 24.5vw;
    height: 40px;
    margin: 20px auto;
  }
  @media (min-width: 300px) and (max-width: 767px) {
    width: 24vw;
    height: 40px;
    margin: 18px auto;
  }
`;
