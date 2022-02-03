import React from "react";
import { Container, Section, Skills } from "./styles";
import HeaderLogo from "../../components/headerLogo/index";
import LogoEstacio from "../../assets/logos/estacio.png";
import LogoFreeCode from "../../assets/logos/free.png";
import LogoDigital from "../../assets/logos/digital.png";
import TitlePage from "../../components/titlePage/index";
import AnimatedBackground from "../../components/background/index";
import {
  SiRedux,
  SiStyledComponents,
  SiJquery,
  SiSass,
  SiMaterialUi,
  SiWebpack,
  SiNodeDotJs,
} from "react-icons/si";
import { VscCompareChanges, VscEditorLayout } from "react-icons/vsc";
import { RiLayoutMasonryFill } from "react-icons/ri";

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
  FaBrain,
  FaBalanceScale,
  FaUsersCog,
  FaCogs,
} from "react-icons/fa";

function Resumo() {
  return (
    <>
      <AnimatedBackground />
      <Container>
        <HeaderLogo />
        <TitlePage subtitle="Resumo" title="Resumir" />
        <Section>
          <h1>Minha Educação</h1>
          <div>
            <div>
              <span>2018 - 2020</span>
              <p>Análise e Desenvolvimento de Sistemas</p>
              <p>Universidade Estácio</p>
              <a
                href="https://estacio.br/cursos/graduacao/analise-e-desenvolvimento-de-sistemas"
                target="blank"
              >
                <img src={LogoEstacio} alt="Logo Estácio" />{" "}
              </a>
            </div>
            <div>
              <span>2020 - 2021</span>
              <p>JavaScript Algorithms and Data Structures</p>
              <p>FreeCodeCamp</p>
              <a
                href="https://www.freecodecamp.org/certification/fcc07f30d36-40e3-46b4-a612-b085a50d2773/javascript-algorithms-and-data-structures"
                target="blank"
              >
                <img src={LogoFreeCode} alt="Logo Estácio" />{" "}
              </a>
            </div>
            <div>
              <span>2020 - 2021</span>
              <p>Bootcamp Become Remote</p>
              <p>Digital Innovation One</p>
              <a
                href="https://certificates.digitalinnovation.one/6CF589DE"
                target="blank"
              >
                <img src={LogoDigital} alt="Logo Estácio" />{" "}
              </a>
            </div>
            <div>
              <span>2020 - 2021</span>
              <p>Responsive Web Design</p>
              <p>FreeCodeCamp</p>
              <a
                href="https://www.freecodecamp.org/certification/fcc07f30d36-40e3-46b4-a612-b085a50d2773/responsive-web-design"
                target="blank"
              >
                <img src={LogoFreeCode} alt="Logo Estácio" />{" "}
              </a>
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
              <li>
                <FaBrain size={20} />
                <span>Criatividade</span>
              </li>
              <li>
                <FaBalanceScale size={20} />
                <span>Ética</span>
              </li>
              <li>
                <FaUsersCog size={20} />
                <span>Flexibilidade</span>
              </li>
              <li>
                <VscCompareChanges size={20} />
                <span>Resiliência</span>
              </li>
            </ul>
          </div>
          <div>
            <h1>Hard Skills</h1>
            <ul>
              <li>
                <FaHtml5 size={20} />
                <span>Html</span>
              </li>
              <li>
                <FaCss3Alt size={20} />
                <span>Css</span>
              </li>
              <li>
                <FaJsSquare size={20} />
                <span>Javascript</span>
              </li>
              <li>
                <FaBootstrap size={20} />
                <span>Bootstrap</span>
              </li>
              <li>
                <FaReact size={20} />
                <span>React</span>
              </li>
              <li>
                <SiRedux size={20} />
                <span>Redux</span>
              </li>
              <li>
                <FaGitSquare size={20} />
                <span>Git</span>
              </li>
              <li>
                <SiNodeDotJs size={20} />
                <span>Noções de node</span>
              </li>
              <li>
                <SiStyledComponents size={20} />
                <span>Styled-components</span>
              </li>
              <li>
                <SiJquery size={20} />
                <span>Jquery</span>
              </li>
              <li>
                <SiSass size={20} />
                <span>Sass</span>
              </li>
              <li>
                <RiLayoutMasonryFill size={20} />
                <span>Noções de UX/UI</span>
              </li>
              <li>
                <VscEditorLayout size={20} />
                <span>Layouts responsivos</span>
              </li>
              <li>
                <SiMaterialUi size={20} />
                <span>Material-UI</span>
              </li>
              <li>
                <FaCogs size={20} />
                <span>Consumo de API</span>
              </li>
            </ul>
          </div>
        </Skills>
      </Container>
    </>
  );
}

export default Resumo;
