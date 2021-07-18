import React from 'react';
import { Container, Title, Section, Footer, Button } from './styles';
import HeaderLogo from '../../components/headerLogo/index'
import { GiDiploma } from "react-icons/gi";
import { SiRedux } from "react-icons/si";
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
            <Title>
                <strong>Rusumo</strong>
                <span>Resumir</span>
            </Title>
            <Section>
                <h1>Minha Educação</h1>
                <div>
                    <div>
                        <span>2018 - 2020</span>
                        <p>Análise e Desenvolvimento de Sistemas</p>
                        <a href="http://" target="blank">Universidade  <GiDiploma size={25} color="#90235C" /></a>
                    </div>
                    <div>
                        <span>2018 - 2020</span>
                        <p>Análise e Desenvolvimento de Sistemas</p>
                        <a href="http://" target="blank">Universidade Estácio <GiDiploma size={25} color="#90235C" /></a>
                    </div>
                    <div>
                        <span>2018 - 2020</span>
                        <p>Análise e Desenvolvimento de Sistemas</p>
                        <a href="http://" target="blank">Universidade Estácio <GiDiploma size={25} color="#90235C" /></a>
                    </div>
                    <div>
                        <span>2018 - 2020</span>
                        <p>Análise e Desenvolvimento de Sistemas</p>
                        <a href="http://" target="blank">Universidade Estácio <GiDiploma size={25} color="#90235C" /></a>
                    </div>
                    <div>
                        <span>2018 - 2020</span>
                        <p>Análise e Desenvolvimento de Sistemas</p>
                        <a href="http://" target="blank">Universidade Estácio <GiDiploma size={25} color="#90235C" /></a>
                    </div>
                    <div>
                        <span>2018 - 2020</span>
                        <p>Análise e Desenvolvimento de Sistemas</p>
                        <a href="http://" target="blank">Universidade Estácio <GiDiploma size={25} color="#90235C" /></a>
                    </div>
                </div>

            </Section>
            <Footer>
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
            </Footer>
            <Button href="https://drive.google.com/file/d/1BlQascd2UED4FeVPEJk88prpn4N84QpR/view?usp=sharing" target="_blank">
                <strong>📋 Currículo</strong>
            </Button>
        </Container>
    );
}

export default Resumo;