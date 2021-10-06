import React from 'react'
import axios from 'axios'
import GlobalStateContext from '../global/GlobalStateContext'
import { BASE_URL } from '../constants/BASE_URL'
import { useState, useEffect } from 'react';

const GlobalState = (props) => {
    const [pokemonNames, setPokemonNames] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])

    useEffect(() => {
        getPokemonNames()
    }, [])

    useEffect(() => {
        const newList = []
        pokemonNames.forEach(element => {
            axios.get(element.url).then((response) => {
                newList.push(response.data)
                if (newList.length === 20) {
                    setPokemons(newList)
                }
            }).catch((err) => {
                alert(err.message)
            })
        });

    }, [pokemonNames])

    const getPokemonNames = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/pokemon`)
            setPokemonNames(response.data.results)
        } catch (err) {
            alert(err.message)
        }
    }

    const data = { pokemons, setPokemons, pokedex, setPokedex }

    return (
        <>
            <GlobalStateContext.Provider value={data}>
                {props.children}
            </GlobalStateContext.Provider>
        </>
    )
}

export default GlobalState