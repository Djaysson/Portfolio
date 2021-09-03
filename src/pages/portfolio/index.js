import React, { useState, useEffect } from 'react';
import HeaderLogo from '../../components/headerLogo/index'
import api from "../../server/api";
import { Container, ContainerImg, ContainerButtons } from './styles';
import { FaLaptopCode, FaGithub, } from 'react-icons/fa'
import TitlePage from '../../components/titlePage/index';
import AnimatedBackground from '../../components/background/index'
import Loading from '../../components/loading/index'

function Portfolio() {
    const [data, setData] = useState([]);
    const [load,setLoad] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
        const fetchData = async () => {
            const response = await api.get('/projetos');
            const data = response.data;
            setData(data);
        }
        fetchData();
        setLoad(false);
    }, 3000);

    return () => clearTimeout(timer);
    }, []);

    return (
        <>
        <AnimatedBackground />
        <Container>
            <HeaderLogo />
            <TitlePage subtitle="Portfolio" title="Meus projetos" />

                {load && <Loading/>}
                {!load  &&
                <ContainerImg >
                    {data.map(projetos => (
                        <article key={projetos.id} >
                            <div>
                                <div >
                                    <strong>{projetos.title}</strong>
                                    <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos.indústria tipográfica e de impressos.indústria tipográfica e de impressos.</p>
                                    <p>HTML - CSS - JS - REACT</p>
                                    <span>
                                        <ContainerButtons>
                                            <strong><a href={projetos.linkGithub} target="blank" ><FaGithub size={12} /> Github</a></strong>
                                            <strong><a href={projetos.linkDemo} target="blank"><FaLaptopCode size={12} /> Demo</a></strong>
                                        </ContainerButtons>
                                    </span>
                                </div>
                                <img src={projetos.image} alt="imagem do projeto" />
                            </div>
                        </article>
                    ))}
                </ContainerImg>
                }
        </Container>
                </>

    );
}

export default Portfolio;