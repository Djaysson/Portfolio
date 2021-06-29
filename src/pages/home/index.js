import React from 'react';
import HeaderLogo from '../../components/headerLogo/index';
import Typical from "react-typical";
import { Container, Section, Button } from './styles';

function Home() {
    return (
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
                            " Djayson Rodrigues",
                            2000,
                            " um Frontend Developer.",
                            2000,
                            " um Freelancer.",
                            2000,
                        ]}
                    />
                </strong>
                <Button to="/contato">
                    <strong>Contrate-me</strong>
                </Button>

            </Section>
        </Container>
    );
}

export default Home;