import React, {useEffect} from "react";
import { goToDetails } from "../routes/coordinator";
import { goToHome } from "../routes/coordinator";
import { useHistory } from "react-router";
import styled from "styled-components";


const PokedexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`


const Pokedex = () => {
    const history = useHistory()

    useEffect(() => {
        document.title = "Pokédex";
      }, []);

    return (
        <PokedexContainer>
            <h1>Pokedex</h1>
            <div>
                <button onClick={() => goToHome(history)}>Home</button>
                <button onClick={() => goToDetails(history)}>Detalhes</button>
            </div>
        </PokedexContainer>
    )
}

export default Pokedex;