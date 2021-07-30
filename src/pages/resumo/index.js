import React from 'react';
import { Container, Section, Skills } from './styles';
import HeaderLogo from '../../components/headerLogo/index'
import LogoEstacio from "../../assets/logos/estacio.png";
import LogoFreeCode from "../../assets/logos/free.png";
import LogoDigital from "../../assets/logos/digital.png";
import { SiRedux } from "react-icons/si";
import Footer from '../../components/footer/index';
import TitlePage from '../../components/titlePage/index';
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaBootstrap,
    FaGitSquare,
    FaReact,
    FaUserAlt,
    FaHandshake,
    FaHeart,
    FaTools,
    FaMicrophone,
    FaLightbulb,
    FaNode
} from "react-icons/fa";


function Resumo() {
    return (
        <Container>
            <HeaderLogo />
            <TitlePage subtitle="Rusumo" title="Resumir" />
            <Section>
                <h1>Minha Educação</h1>
                <div>
                    <div>
                        <span>2018 - 2020</span>
                        <p>Análise e Desenvolvimento de Sistemas</p>
                        <p>Universidade Estácio</p>
                        <a href="http://encurtador.com.br/ezCMN" target="blank"><img src={LogoEstacio} alt="Logo Estácio" /> </a>
                    </div>
                    <div>
                        <span>2018 - 2020</span>
                        <p>JavaScript Algorithms and Data Structures</p>
                        <p>FreeCodeCamp</p>
                        <a href="http://encurtador.com.br/fluAF" target="blank"><img src={LogoFreeCode} alt="Logo Estácio" /> </a>
                    </div>
                    <div>
                        <span>2018 - 2020</span>
                        <p>bootcamp Become Remote</p>
                        <p>Digital Innovation One</p>
                        <a href="http://encurtador.com.br/dCFJT" target="blank"><img src={LogoDigital} alt="Logo Estácio" /> </a>
                    </div>
                    <div>
                        <span>2018 - 2020</span>
                        <p>Responsive Web Design</p>
                        <p>FreeCodeCamp</p>
                        <a href="http://" target="blank"><img src={LogoFreeCode} alt="Logo Estácio" /> </a>
                    </div>


                </div>

            </Section>
            <Skills>
                <div>
                    <h1>Soft Skills</h1>
                    <ul>
                        <li>
                            <FaUserAlt size={20} />
                            <span>Foco no cliente</span>
                        </li>
                        <li>
                            <FaHandshake size={20} />
                            <span>Trabalho em Equipe</span>
                        </li>
                        <li>
                            <FaMicrophone size={20} />
                            <span>Comunicação</span>
                        </li>
                        <li>
                            <FaLightbulb size={20} />
                            <span>Problem-solving</span>
                        </li>
                        <li>
                            <FaHeart size={20} />
                            <span>Paixão por aprender</span>
                        </li>
                        <li>
                            <FaTools size={20} />
                            <span>Persistência</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1>Hard Skills</h1>
                    <ul>
                        <li>
                            <FaHtml5 size={20} />
                            <span>HTML</span>

                        </li>
                        <li>
                            <FaCss3Alt size={20} />
                            <span>CSS</span>

                        </li>
                        <li>
                            <FaJsSquare size={20} />
                            <span>JAVASCRIPT</span>

                        </li>
                        <li>
                            <FaBootstrap size={20} />
                            <span>BOOTSTRAP</span>

                        </li>
                        <li>
                            <FaReact size={20} />
                            <span>REACT</span>

                        </li>
                        <li>
                            <SiRedux size={20} />
                            <span>REDUX</span>

                        </li>
                        <li>
                            <FaGitSquare size={20} />
                            <span>GIT</span>

                        </li>
                        <li>
                            <FaNode size={20} />
                            <span>NODE</span>

                        </li>
                    </ul>
                </div>
            </Skills>

            <Footer />
        </Container>
    );
}

export default Resumo;