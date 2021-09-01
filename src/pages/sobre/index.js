import React from 'react';
import HeaderLogo from '../../components/headerLogo/index';
import { Container, Section, Aside, Button } from './styles';
import TitlePage from '../../components/titlePage/index';
import img from '../../assets/images/eu1.png'
import AnimatedBackground from '../../components/background/index'

function Sobre() {
    return (
        <>
        <AnimatedBackground />
        <Container>
            <HeaderLogo />
            <TitlePage subtitle="Sobre Mim" title="Conheça-me mais" />
            <Section>
                <div>
                    <h1>Eu sou <strong>Djayson Rodrigues</strong>, um Frontend Developer</h1>
                    <p> Minha formação é em Análise e Desenvolvimento de sistemas na Universidade Estácio, sou uma pessoa apaixonado pelo desenvolvimento de software e fascinado por novos desafios na área TI, estou envolvido na área a 3 anos e sou do tipo de pessoa que adora uma boa UX e UI agradáveis ao usuário.  </p>
                    <p> Um desenvolvedor que visa promover a entregar produtos da melhor qualidade. Alguém que acredita que perseverança, esforço e determinação levam aos melhores resultados. Estou sempre focado em provar as melhores práticas, fundamentos e consistência através do código.</p>
                    <p> Venha ver alguns dos meus projetos e se você tem algum projeto a ser feito, eu posso ajuda a construir o seu projeto, tudo isso a um preço acessível. </p>
                    
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
            <img src={img} alt="Imagem de fundo" />

        </Container>
    </>
    );
}

export default Sobre;