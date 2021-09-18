import React from "react";
import HeaderLogo from "../../components/headerLogo/index";
import Typical from "react-typical";
import { Container, Section, Button } from "./styles";
import Image from "../../assets/images/image.png";
import AnimatedBackground from "../../components/background/index";
import { FaAngleDoubleDown } from "react-icons/fa";

function Home() {
  return (
    <>
      <AnimatedBackground />
      <Container>
        <HeaderLogo />
        <Section>
          <h1>Seja bem-vindo</h1>
          <strong>
            Eu sou
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "Djayson Rodrigues",
                3000,
                "um Frontend Developer",
                3000,
                "um Freelancer",
                3000,
              ]}
            />
          </strong>
          <Button to="/sobre">
            <strong>
              Saiba mais... <FaAngleDoubleDown size={25} />{" "}
            </strong>
          </Button>
        </Section>
        <img src={Image} alt="background" />
      </Container>
    </>
  );
}

export default Home;
