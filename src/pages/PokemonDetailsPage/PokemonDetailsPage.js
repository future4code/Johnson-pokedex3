// import { BASE_IMG } from './../../constants/BASE_IMG';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { BASE_URL } from './../../constants/BASE_URL';



const PokemonDetailsPage = () => {
    const urlPokemon = document.URL.substr(38, 50)
    const [pokemon, setPokemon] = useState({})
    const [pokemonType, setPokemonType] = useState("");
    const history = useHistory();

    const goBack = () => {
        history.push("/pokemon-list")
    }

    const getPokemonDetails = () => {

        axios.get(`${BASE_URL}${urlPokemon}`).then(res => {

            setPokemon(res.data)
            setPokemonType(res.data.types[0].type.name);
        }).catch(err => {
            alert(err.message)
        })
    }

    useEffect(() => {
        getPokemonDetails()
    }, [])

    console.log(pokemon)
    console.log(getPokemonDetails())

    return (
        <div>
            <h1>Nome: {pokemon.name}</h1>
            <h1>Peso: {Number(pokemon.weight / 10)} kg</h1>
            <h1>Tipos: {pokemonType} </h1>




            <button onClick={goBack}>Voltar</button>
        </div>
    )
}

export default PokemonDetailsPage;