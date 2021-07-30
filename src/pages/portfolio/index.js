import React, { useState, useEffect } from 'react';
import HeaderLogo from '../../components/headerLogo/index'
import api from "../../server/api";
import { Container, ContainerImg, ContainerButtons } from './styles';
import { FaLaptopCode, FaGithub, } from 'react-icons/fa'
import TitlePage from '../../components/titlePage/index';
import Footer from '../../components/footer/index';

function Portfolio() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get('/projetos');
            const data = response.data;
            setData(data);
        }
        fetchData();

    }, []);

    return (
        <Container>
            <HeaderLogo />
            <TitlePage subtitle="Portfolio" title="Meus projetos" />

            <ContainerImg >
                {data.map(projetos => (
                    <article key={projetos.id} >
                        <div>
                            <div >
                                <strong>{projetos.title}</strong>
                                <span>
                                    <ContainerButtons>
                                        <strong><a href={projetos.linkGithub} target="_blank" ><FaGithub size={12} /> Github</a></strong>
                                        <strong><a href={projetos.linkDemo} target="_blank"><FaLaptopCode size={12} /> Demo</a></strong>
                                    </ContainerButtons>
                                </span>
                            </div>
                            <img src={projetos.image} alt="imagem do projeto" />
                        </div>
                    </article>
                ))}
            </ContainerImg>
            <Footer />
        </Container>
    );
}

export default Portfolio;