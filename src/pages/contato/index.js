import React from "react";
import HeaderLogo from "../../components/headerLogo/index";
import emailjs from "emailjs-com";
import {
  Container,
  Section,
  ContainerContato,
  ContainerForm,
  Button,
} from "./styles";
import Footer from "../../components/footer/index";
import TitlePage from "../../components/titlePage/index";
import AnimatedBackground from "../../components/background/index";

import {
  FaWhatsappSquare,
  FaPhoneSquareAlt,
  FaEnvelopeSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

function Contato() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        e.target,
        `${process.env.REACT_APP_USER_ID}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <>
      <AnimatedBackground />
      <Container>
        <HeaderLogo />
        <TitlePage subtitle="Contato" title="Entrar em contato" />
        <Section>
          <ContainerContato>
            <div>
              <h1>Contato alternativo</h1>
              <ul>
                <li>
                  <a target="blank" href="tel:(85)99177-4335">
                    <FaPhoneSquareAlt size={35} color="#4545E5" />
                  </a>
                  <a target="blank" href="tel:(85)99177-4335">
                    (85)99177-4335
                  </a>
                </li>
                <li>
                  <a target="blank" href="tel:(85)99177-4335">
                    <FaWhatsappSquare size={35} color="#4545E5" />
                  </a>
                  <a
                    target="blank"
                    href={"https://api.whatsapp.com/send?phone=5585991774335"}
                  >
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a target="blank" href="tel:(85)99177-4335">
                    <FaEnvelopeSquare size={35} color="#4545E5" />
                  </a>
                  <a target="blank" href="mailto:djayson.dev@gmail.com">
                    Email
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h1>Me siga</h1>
              <ul>
                <li>
                  <a target="blank" href="https://instagram.com/djayson_alves">
                    <FaInstagramSquare size={35} color="#4545E5" />
                  </a>
                </li>
                <li>
                  <a
                    target="blank"
                    href="https://www.linkedin.com/in/djaysonrodrigues"
                  >
                    <FaLinkedin size={35} color="#4545E5" />
                  </a>
                </li>
                <li>
                  <a target="blank" href="https://github.com/Djaysson">
                    <FaGithubSquare size={35} color="#4545E5" />
                  </a>
                </li>
                <li>
                  <a
                    target="blank"
                    href="https://www.youtube.com/channel/UCAkanB0GDpy5UfRQnU2zbBg"
                  >
                    <FaYoutubeSquare size={35} color="#4545E5" />
                  </a>
                </li>
              </ul>
            </div>
          </ContainerContato>
          <ContainerForm onSubmit={sendEmail}>
            <label>Envie uma mensagem</label>
            <div>
              <input type="text" name="user_name" placeholder="Nome" required />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Conte-me mais sobre sua necessidade....."
              required
            />
            <Button type="submit" value="Enviar" />
          </ContainerForm>
        </Section>
        <Footer />
      </Container>
    </>
  );
}

export default Contato;
