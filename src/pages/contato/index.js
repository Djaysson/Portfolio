import React from 'react';
import HeaderLogo from '../../components/headerLogo/index'
import { Container, Section, ContainerContato, ContainerForm, Button } from './styles';
import Footer from '../../components/footer/index';
import TitlePage from '../../components/titlePage/index';
import AnimatedBackground from '../../components/background/index'

import {
    FaWhatsappSquare,
    FaPhoneSquareAlt,
    FaEnvelopeSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaGithubSquare,
    FaYoutubeSquare
} from 'react-icons/fa';

function Contato() {
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

                                <FaPhoneSquareAlt size={30} color="#4545E5" />
                                <a target="blank" href="tel:(85)99177-4335">(85)99177-4335</a>

                            </li>
                            <li>
                                <FaWhatsappSquare size={30} color="#4545E5" />
                                <a target="blank" href={'https://api.whatsapp.com/send?phone=5585991774335'}>Whatsapp</a>

                            </li>
                            <li>
                                <FaEnvelopeSquare size={30} color="#4545E5" />
                                <a target="blank" href="mailto:djayson.dev@gmail.com">Email</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1>Me siga</h1>
                        <ul>
                            <li>
                                <a target="blank" href="https://instagram.com/djayson_alves">
                                    <FaInstagramSquare size={30} color="#4545E5" />
                                </a>
                            </li>
                            <li>

                                <a target="blank" href="https://www.linkedin.com/in/djaysonrodrigues">
                                    <FaLinkedin size={30} color="#4545E5" />
                                </a>
                            </li>
                            <li>

                                <a target="blank" href="https://github.com/Djaysson">
                                    <FaGithubSquare size={30} color="#4545E5" />
                                </a>
                            </li>
                            <li>

                                <a target="blank" href="https://www.youtube.com/channel/UCAkanB0GDpy5UfRQnU2zbBg">
                                    <FaYoutubeSquare size={30} color="#4545E5" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </ContainerContato>
                <ContainerForm action="">
                    <label>Envie-me uma mensagem</label>
                    <div>
                        <input type="text" id="name" name="name" placeholder="Nome" required />
                        <input type="email" id="email" name="email" placeholder="Email" required />
                    </div>
                    <textarea name="message" id="message" placeholder="Conte-me mais sobre sua necessidade....." required />
                    <Button id="button" type="submit" value="Enviar" />

                </ContainerForm>
            </Section>
            <Footer />
        </Container>
        </>
    );
}

export default Contato;