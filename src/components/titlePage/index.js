import React from 'react';
import { Container } from './styles';

function TitlePage(props) {
    return (
        <Container>
            <strong>{props.subtitle}</strong>
            <span>{props.title}</span>
        </Container>
    );
}

export default TitlePage;