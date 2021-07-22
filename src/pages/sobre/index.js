import React from 'react';
import HeaderTitle from '../../components/headerLogo/index';
import { Container, Title, Section, LinkButton, Aside, Button } from './styles';

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
                    <p> Minha formação é em Análise e Desenvolvimento de sistemas na Universidade Estácio, sou uma pessoa apaixonado pelo desenvolvimento de software e fascinado por novos desafios na área TI, estou envolvido na área a 3 anos e sou do tipo de pessoa que adora uma boa UX e UI agradáveis ao usuário.  </p>
                    <p> Um desenvolvedor que visa promover a entregar produtos da melhor qualidade. Alguém que acredita que perseverança, esforço e determinação levam aos melhores resultados. Estou sempre focado em provar as melhores práticas, fundamentos e consistência através do código.</p>
                    <p> Venha ver alguns dos meus projetos e se você tem algum projeto a ser feito, eu posso ajuda a construir o seu projeto, tudo isso a um preço acessível. </p>
                    <LinkButton to="/contato">
                        <span>Entre em contato</span>
                    </LinkButton>
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