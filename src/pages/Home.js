import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { goToPokedex } from '../routes/coordinator'
import "./Home.css";
import GottaCatchEmAll from "../assets/catch.png"

const Home = () => {
    const history = useHistory()

    useEffect(() => {
        document.title = "Home";
    }, []);
    return (
        <div class="poke_box">
            <img src={GottaCatchEmAll} alt="Logo Pokemon" />
            <div class="pokeball">
                <div onClick={() => goToPokedex(history)} class="pokeball__button"></div>
            </div>
        </div>
    )
}

export default Home;