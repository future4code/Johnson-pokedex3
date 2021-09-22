import React from 'react'
import { useHistory } from "react-router-dom";
import { goToPokedex } from '../routes/coordinator'



const Home = () => {
    const history = useHistory()
    return (
        <>
            <h1> Home Pokedex </h1>
            <button onClick={() => goToPokedex(history)}>Ir Pokedex</button>
        </>
    )
}

export default Home;