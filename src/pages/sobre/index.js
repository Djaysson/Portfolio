import React from 'react';
import HeaderTitle from '../../components/headerLogo/index';

import { Container, Title, Section, Aside, Button } from './styles';

function Sobre() {
    return (

        <Container>
            <HeaderTitle />
            <Title>
                <strong>Sobre Mim</strong>
                <span>Conheça-me mais</span>
            </Title>
            <Section>
                <div>
                    <h1>Eu sou <strong>Djayson Rodrigues</strong>, um Frontend Developer</h1>
                    <p> Eu sou formado em Análise e Desenvolvimento de sistemas pela a univesidade Estácio,sou um desenvolvedor que visa promover e entregar produtos da melhor qualidade. Alguém que acredita que perseverança, esforço e determinação levam aos melhores resultados. Estou sempre focado em provar as melhores práticas, fundamentos e consistência através do código.</p>
                    <p> Eu sou formado em Análise e Desenvolvimento de sistemas pela a univesidade Estácio,sou um desenvolvedor que visa promover e entregar produtos da melhor qualidade. Alguém que acredita que perseverança, esforço e determinação levam aos melhores resultados. Estou sempre focado em provar as melhores práticas, fundamentos e consistência através do código.</p>
                </div>
                <Aside>
                    <ul>
                        <li>Nome:
                            <span>Djayson Rodrigues</span>
                        </li>
                        <li>
                            Cidade:
                            <span>Fortaleza, Ceara</span>
                        </li>
                        <li>
                            Email:
                            <span><a href="mailto:djayson.dev@gmail.com"> djayson.dev@gmail.com</a></span>
                        </li>
                    </ul>

                    <Button href="https://drive.google.com/file/d/1BlQascd2UED4FeVPEJk88prpn4N84QpR/view?usp=sharing" target="blank" rel="noopener noreferrer">
                        <strong>📋 Currículo</strong>
                    </Button>
                </Aside>
            </Section>
        </Container>

    );
}

export default Sobre;