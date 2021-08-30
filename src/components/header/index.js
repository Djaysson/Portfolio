import React from 'react';
import { FaLinkedin, FaGithubSquare, FaYoutubeSquare } from 'react-icons/fa'
import ImgPerfil from '../../assets/images/perfil.png';
import { Container, Nav, Links, Footer } from './styles';


function Header() {
    return (
        <Container>
            <div>
                <img src={ImgPerfil} alt="Imagem de perfil" />
                <strong>Djayson Rodrigues</strong>
            </div>
            <Nav>
                <ul>
                    <li><Links to="/">Home</Links></li>
                    <li><Links to="/sobre">Sobre mim</Links></li>
                    <li><Links to="/resumo">Resumo</Links></li>
                    <li><Links to="/portfolio">Portfolio</Links></li>
                    <li><Links to="/contato">Contato</Links></li>
                </ul>
            </Nav>
            <Footer>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/djaysonrodrigues" target="blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} color="#FFF" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Djaysson" target="blank" rel="noopener noreferrer">
                            <FaGithubSquare size={30} color="#FFF" />
                        </a>

                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCAkanB0GDpy5UfRQnU2zbBg" target="blank" rel="noopener noreferrer">
                            <FaYoutubeSquare size={30} color="#FFF" />
                        </a>

                    </li>
                </ul>
             
            </Footer>
        </Container>
    );
}

export default Header;