import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { goToPokemonListPage } from "../../routes/coordinator"
import "./HomePage.css";
import GottaCatchEmAll from "../../assets/catch.png"

const HomePage = () => {
    const history = useHistory()

    useEffect(() => {
        document.title = "Pokédex | Home";
    }, []);
    return (
        <div class="poke_box">
            <img src={GottaCatchEmAll} alt="Logo Pokemon" />
            <div onClick={() => goToPokemonListPage(history)} class="pokeball">
                <div class="pokeball__button"></div>
            </div>
        </div>
    )
}

export default HomePage;