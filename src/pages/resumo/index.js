import React from "react";
import { Container, Section, Skills } from "./styles";
import HeaderLogo from "../../components/headerLogo/index";
import LogoEstacio from "../../assets/logos/estacio.png";
import LogoFreeCode from "../../assets/logos/free.png";
import LogoDigital from "../../assets/logos/digital.png";
import TitlePage from "../../components/titlePage/index";
import AnimatedBackground from "../../components/background/index";
import TechCard from "../../components/techCard/index";
import EducationCard from "../../components/educationCard/index";

import { SiRedux, SiStyledcomponents, SiJquery, SiSass } from "react-icons/si";
import { VscEditorLayout } from "react-icons/vsc";
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
  FaCogs,
  FaNodeJs,
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
            <EducationCard
              date="2018 - 2020"
              course="Análise e Desenvolvimento de Sistemas"
              entity="Universidade Estácio"
              link="https://estacio.br/cursos/graduacao/analise-e-desenvolvimento-de-sistemas"
              image={LogoEstacio}
              description="Logo Estácio"
            />
            <EducationCard
              date="2021 - 2022"
              course="Bootcamp Inter Frontend Developer"
              entity="Digital Innovation One"
              link="https://firebasestorage.googleapis.com/v0/b/portifolio-af8ac.appspot.com/o/certificado%2F0D2434AE.pdf?alt=media&token=2ab0c4ff-c1b1-4d37-b7a6-2cf4b037fcc2"
              image={LogoDigital}
              description="Logo Digital Innovation One"
            />
            <EducationCard
              date="2020 - 2021"
              course="JavaScript Algorithms and Data Structures"
              entity="FreeCodeCamp"
              link="https://www.freecodecamp.org/certification/fcc07f30d36-40e3-46b4-a612-b085a50d2773/javascript-algorithms-and-data-structures"
              image={LogoFreeCode}
              description="Logo FreeCodeCamp"
            />
            <EducationCard
              date="2020 - 2021"
              course="Bootcamp Become Remote"
              entity="Digital Innovation One"
              link="https://firebasestorage.googleapis.com/v0/b/portifolio-af8ac.appspot.com/o/certificado%2F6CF589DE.pdf?alt=media&token=030fc92a-86dc-46b1-9dac-1481b2f2bb66"
              image={LogoDigital}
              description="Logo Digital Innovation One"
            />
            <EducationCard
              date="2020 - 2021"
              course="Responsive Web Design"
              entity="FreeCodeCamp"
              link="https://www.freecodecamp.org/certification/fcc07f30d36-40e3-46b4-a612-b085a50d2773/responsive-web-design"
              image={LogoFreeCode}
              description="Logo FreeCodeCamp"
            />
            <EducationCard
              date="2021 - 2022"
              course="Projetos ágeis com SCRUM"
              entity="Digital Innovation One"
              link="https://firebasestorage.googleapis.com/v0/b/portifolio-af8ac.appspot.com/o/certificado%2F4C25BFBF.pdf?alt=media&token=111f32e6-9e24-43fe-9499-b5db277a3afe"
              image={LogoDigital}
              description="Logo Digital Innovation One"
            />
          </div>
        </Section>
        <Skills>
          <div>
            <h1>Soft Skills</h1>
            <ul>
              <TechCard icon={<FaUserAlt />} tech="Foco no cliente" />
              <TechCard icon={<FaHandshake />} tech="Trabalho em Equipe" />
              <TechCard icon={<FaMicrophone />} tech="Comunicação" />
              <TechCard icon={<FaLightbulb />} tech="Problem-solving" />
              <TechCard icon={<FaHeart />} tech="Paixão por aprender" />
              <TechCard icon={<FaTools />} tech="Persistência" />
              <TechCard icon={<FaBrain />} tech="Criatividade" />
            </ul>
          </div>
          <div>
            <h1>Hard Skills</h1>
            <ul>
              <TechCard icon={<FaHtml5 />} tech="Html" />
              <TechCard icon={<FaCss3Alt />} tech="Css" />
              <TechCard icon={<FaJsSquare />} tech="Javascript" />
              <TechCard icon={<FaBootstrap />} tech="Bootstrap" />
              <TechCard icon={<FaReact />} tech="React" />
              <TechCard icon={<SiRedux />} tech="Redux" />
              <TechCard icon={<FaGitSquare />} tech="Git" />
              <TechCard icon={<FaNodeJs />} tech="Noções de node" />
              <TechCard
                icon={<SiStyledcomponents />}
                tech="Styled-components"
              />
              <TechCard icon={<SiJquery />} tech="Jquery" />
              <TechCard icon={<SiSass />} tech="Sass" />
              <TechCard icon={<RiLayoutMasonryFill />} tech="Noções de UX/UI" />
              <TechCard icon={<VscEditorLayout />} tech="Layouts responsivo" />
              <TechCard icon={<FaCogs />} tech="Consumo de API" />
            </ul>
          </div>
        </Skills>
      </Container>
    </>
  );
}

export default Resumo;
