import React, {useEffect} from 'react'
import Background from '../assets/pikachu.png'
import styled from 'styled-components'

const ErrorContainer = styled.div`
    background-image: url(${Background});
    display: flex;
    width: 100vw;
    height: 90vh;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    justify-content: center;
    color: white;
`

export default function Error() {

    useEffect(() => {
        document.title = "Pokédex | Erro 404";
      }, []);

    return (        
        <ErrorContainer>
            <h1>Conteúdo não encontrado</h1>
        </ErrorContainer>
    )
}