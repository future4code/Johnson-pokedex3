import React, {useEffect} from "react";
import { goToDetails } from "../routes/coordinator";
import { goToHome } from "../routes/coordinator";
import { useHistory } from "react-router";
import styled from "styled-components";


const PokedexContainer = styled.div`
    background-image: url("https://geekblog.com.br/wp-content/uploads/2021/02/o-que-e-erro-404-950x500.png");
    background-size: 100%;
    display: flex;
    width: 100vw;
    height: 100vh;
`


const Pokedex = () => {
    const history = useHistory()

    useEffect(() => {
        document.title = "Pokedex";
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