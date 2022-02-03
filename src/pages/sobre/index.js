import React from "react";
import HeaderLogo from "../../components/headerLogo/index";
import { Container, Section, Aside, Button } from "./styles";
import TitlePage from "../../components/titlePage/index";
import img from "../../assets/images/eu1.png";
import AnimatedBackground from "../../components/background/index";

function Sobre() {
  return (
    <>
      <AnimatedBackground />
      <Container>
        <HeaderLogo />
        <TitlePage subtitle="Sobre Mim" title="Conheça-me mais" />
        <Section>
          <div>
            <h1>
              Eu me chamo <strong>Djayson Rodrigues</strong>
            </h1>
            <p>
              Minha jornada de dev começa em 2018 quando comecei a estudar
              Análise e Desenvolvimento de Sistemas na faculdade Estácio,
              durante o curso conheci diversas linguagens de programação e uma
              delas era o javascript usado em páginas da web para tornar a
              interface mais interativa, graças a esta apresentação acabei
              escolhendo a área de front-end para atuar.{" "}
            </p>

            <p>
              Sou um desenvolvedor que visa promover a entregar produtos da
              melhor qualidade. Alguém que acredita que perseverança, esforço e
              determinação levam aos melhores resultados. Estou sempre focado em
              provar as melhores práticas, fundamentos e consistência através do
              código.
            </p>
            <p>
              Venha ver alguns dos meus projetos e se você tem algum projeto a
              ser feito, eu posso ajuda a construir o seu projeto, tudo isso a
              um preço acessível.
            </p>
          </div>
          <Aside>
            <ul>
              <li>
                Nome:
                <span>Djayson Alves Rodrigues</span>
              </li>
              <li>
                Cidade:
                <span>Fortaleza, Ceará</span>
              </li>
              <li>
                Email:
                <span>
                  <a href="mailto:djayson.dev@gmail.com">
                    djayson.dev@gmail.com
                  </a>
                </span>
              </li>
            </ul>

            <Button
              href="https://drive.google.com/file/d/1VB3LdS_VjDh-VKvtGiP4lqSFoql3wyjg/view?usp=sharing"
              target="blank"
              rel="noopener noreferrer"
            >
              <strong>📋 Currículo</strong>
            </Button>
          </Aside>
        </Section>
        <img src={img} alt="Imagem de fundo" />
      </Container>
    </>
  );
}

export default Sobre;
