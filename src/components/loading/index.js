import React from 'react';
import { Container,Spinner } from './styles';
function Loading() {
    return(
    <Container>
        <Spinner />
        <h1>Carregando...</h1>  
    </Container>
    );
}


export default Loading;