import React from 'react'
import { Link } from 'react-router-dom';
import ImgLogo from '../../assets/images/logo.png'
import { Container } from './styles';

export default function HeaderLogo() {
    return (
        <Container>
            <Link to="/">
                <img src={ImgLogo} alt="logo" />
            </Link>
        </Container>
    )
}
