import React from 'react';
import { Container } from './styles';
import Logoimg from '../../assets/images/logo.png';

function Footer() {
    return (
        <Container>
               <h2>All Rights Reserved - Djayson Rodrigues <img src={Logoimg} alt="logo" /></h2>
        </Container>
    );
}

export default Footer;