import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  width: 23vw;
  height: 100vh;
  background: ${(props) => props.theme.background};
  box-shadow: 0 0 0.5em ${(props) => props.theme.darkTransparent};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  overflow-x: hidden;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin-top: -50px;
      width: 18vw;
      height: 270px;
    }
    strong {
      padding-top: 10px;
      font-size: 1.3em;
      font-weight: 700;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100vw;
    height: 100px;
    overflow-y: hidden;

    div:nth-child(1) {
      display: none;
    }
    footer:nth-child(3) {
      display: none;
    }
  }
  @media (min-width: 300px) and (max-width: 768px) {
    width: 100vw;
    height: 80px;

    overflow-y: hidden;
    div:nth-child(1) {
      display: none;
    }
    footer:nth-child(3) {
      display: none;
    }
  }
`;
export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  nav {
    ul {
      list-style: none;
      font-weight: bold;
    }
    li {
      font-size: 1em;
      padding: 20px;
      text-align: center;
    }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    nav {
      height: 100vh;
      width: 32vw;
      background: ${(props) => props.theme.background};
      box-shadow: 0 0 0.5em ${(props) => props.theme.darkTransparent};
      transform: translateX(-9999px);
      transition: all 0.5s;
      position: absolute;
      &.open {
        transform: translateX(0px);
      }
      ul {
        position: relative;
        top: 92px;
      }
      li {
        font-size: 1em;
        padding: 35px 20px;
        text-align: center;
        border-bottom: 0.5px solid ${(props) => props.theme.darkTransparent};
        box-shadow: 0 0 4px ${(props) => props.theme.darkTransparent};
      }
    }
  }
  @media (min-width: 300px) and (max-width: 768px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    nav {
      height: 100vh;
      width: 100vw;
      background: ${(props) => props.theme.background};
      box-shadow: 0 0 0.5em ${(props) => props.theme.darkTransparent};
      transform: translateY(-9999px);
      transition: all 0.5s;
      position: absolute;
      overflow-x: hidden;

      &.open {
        transform: translateY(0px);
      }
      ul {
        position: relative;
        top: 90px;
      }
      li {
        font-size: 1.4em;
        padding: 30px 20px;
        text-align: center;
        border-bottom: 0.5px solid ${(props) => props.theme.darkTransparent};
        box-shadow: 0 0 4px ${(props) => props.theme.darkTransparent};
      }
    }
  }
`;

export const NavMobile = styled.header`
  display: none;
  padding: 30px 0px;
  position: fixed;
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    height: 90px;
    background: ${(props) => props.theme.background};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    button {
      margin-top: 5px;
      border: none;
      background: none;
      margin-left: 10px;
    }
    img {
      width: 100px;
      height: 45px;
      margin-right: 10px;
      object-fit: contain;
    }
  }
  @media (min-width: 300px) and (max-width: 768px) {
    width: 100vw;
    height: 12vh;
    background: ${(props) => props.theme.background};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    button {
      border: none;
      background: none;
      padding-left: 10px;
    }
    img {
      width: 20vw;
      height: 47px;
      padding-right: 10px;
      object-fit: contain;
    }
  }
`;
export const Links = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  color: ${(props) => props.theme.font};
  transition: border-bottom 0.2s;
  &:hover {
    border-bottom: 4px solid ${(props) => props.theme.secondary};
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
  }
  li {
    padding: 10px;
    transition: opacity color 0.2s;
    &:hover {
      opacity: 0.4;
    }
  }
`;
