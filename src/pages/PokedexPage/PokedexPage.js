import React, {useEffect} from "react";
import { goToHomePage, goToPokemonDetailsPage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import styled from "styled-components";


const PokedexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`


const PokedexPage = () => {
    const history = useHistory()

    useEffect(() => {
        document.title = "Pokédex";
      }, []);

    return (
        <PokedexContainer>
            <h1>Pokedex</h1>
            <div>
                <button onClick={() => goToHomePage(history)}>Home</button>
                <button onClick={() => goToPokemonDetailsPage(history)}>Detalhes</button>
            </div>
        </PokedexContainer>
    )
}

export default PokedexPage;