import React from "react";
import { goToDetails } from "../routes/coordinator";
import { goToHome } from "../routes/coordinator";
import { useHistory } from 'react-router';

const Pokedex = () => {
    const history = useHistory()


    return (
        <>
            <h1>Pokedex</h1>

            <button onClick={() => goToHome(history)}>Home</button>
            <button onClick={() => goToDetails(history)} >Detalhes</button>
        </>
    )
}

export default Pokedex;