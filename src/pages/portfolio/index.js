import React, { useState } from "react";
import HeaderLogo from "../../components/headerLogo/index";

import { Container, ContainerImg, ContainerButtons } from "./styles";
import { FaLaptopCode, FaGithub } from "react-icons/fa";
import TitlePage from "../../components/titlePage/index";
import AnimatedBackground from "../../components/background/index";
import Loading from "../../components/loading/index";
import Button from "../../components/filterButton/index";
import projetos from "../../server/data";

const allButtons = ["Todos", ...new Set(projetos.map((item) => item.category))];

function Portfolio() {
  const [data, setData] = useState(projetos);
  const [load, setLoad] = useState(true);
  const [button, setButtons] = useState(allButtons);

  const filter = async (button) => {
    if (button === "Todos") {
      setData(projetos);
      return;
    }

    const filteredData = await projetos.filter(
      (item) => item.category === button
    );
    setData(filteredData);
  };
  setTimeout(() => {
    setLoad(false);
  }, 3000);

  return (
    <>
      <AnimatedBackground />
      <Container>
        <HeaderLogo />
        <TitlePage subtitle="Portfolio" title="Meus projetos" />

        <Button filter={filter} button={button} />

        {load && <Loading />}
        {!load && (
          <ContainerImg>
            {data.map((projetos) => (
              <article key={projetos.id}>
                <div>
                  <div>
                    <strong>{projetos.title}</strong>
                    <p>{projetos.description}</p>
                    <p>{projetos.tech}</p>
                    <span>
                      <ContainerButtons>
                        <strong>
                          <a href={projetos.linkGithub} target="blank">
                            <FaGithub size={12} /> Github
                          </a>
                        </strong>
                        <strong>
                          <a href={projetos.linkDemo} target="blank">
                            <FaLaptopCode size={12} /> Demo
                          </a>
                        </strong>
                      </ContainerButtons>
                    </span>
                  </div>
                  <img src={projetos.image} alt="imagem do projeto" />
                </div>
              </article>
            ))}
          </ContainerImg>
        )}
      </Container>
    </>
  );
}

export default Portfolio;
