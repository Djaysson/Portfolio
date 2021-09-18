import React, { useState } from "react";
import { FaLinkedin, FaGithubSquare, FaYoutubeSquare } from "react-icons/fa";
import ImgPerfil from "../../assets/images/perfil.png";
import { Container, NavContainer, NavMobile, Links, Footer } from "./styles";
import { MdMenu, MdClose } from "react-icons/md";
import Logoimg from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <Container>
      <div>
        <img src={ImgPerfil} alt="Imagem de perfil" />
        <strong>Djayson Rodrigues</strong>
      </div>
      <NavContainer>
        <NavMobile>
          <button onClick={handleOpenMenu}>
            {openMenu !== true ? (
              <MdMenu size="40" color="#FFF" />
            ) : (
              <MdClose size="40" color="#FFF" />
            )}
          </button>
          <Link to="/">
            <img src={Logoimg} alt="logo" />
          </Link>
        </NavMobile>
        <nav className={openMenu !== true ? "" : "open"}>
          <ul>
            <li onClick={handleOpenMenu}>
              <Links to="/" exact activeStyle={{ color: "#4717F6" }}>
                Home
              </Links>
            </li>
            <li onClick={handleOpenMenu}>
              <Links to="/sobre" activeStyle={{ color: "#4717F6" }}>
                Sobre mim
              </Links>
            </li>
            <li onClick={handleOpenMenu}>
              <Links to="/resumo" activeStyle={{ color: "#4717F6" }}>
                Resumo
              </Links>
            </li>
            <li onClick={handleOpenMenu}>
              <Links to="/portfolio" activeStyle={{ color: "#4717F6" }}>
                Portfolio
              </Links>
            </li>
            <li onClick={handleOpenMenu}>
              <Links to="/contato" activeStyle={{ color: "#4717F6" }}>
                Contato
              </Links>
            </li>
          </ul>
        </nav>
      </NavContainer>
      <Footer>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/djaysonrodrigues"
              target="blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} color="#FFF" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Djaysson"
              target="blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare size={30} color="#FFF" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCAkanB0GDpy5UfRQnU2zbBg"
              target="blank"
              rel="noopener noreferrer"
            >
              <FaYoutubeSquare size={30} color="#FFF" />
            </a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
}

export default Header;
