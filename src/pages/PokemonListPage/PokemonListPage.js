// import React from "react";
import { BASE_URL } from "../../constants/BASE_URL";
import styled from "styled-components";
import useRequestData from "../../hooks/useRequestData";
import '../PokemonListPage/PokemonListPage.css'
import { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';

const PokemonListPageContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  overflow-x: hidden;
  justify-content: center;
  `

const PokemonListCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  width: 56%;
  justify-items: center;
  margin-top: 12vh;
  `

const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 200px;
  height: 280px;
  border-radius: 20px;
  margin: 0 8px 48px 8px;
	box-shadow: 0 3px 24px rgba(100, 100, 100, 0.5);
  background-color: white;
  :hover {
    transform: scale(1.02);
  }

  span {
    margin-left: 8px;
    font-size: 20px;
  }
  
  .poke-number {
    font-size: 14px;
    color: grey;
  }

  img {
    width: 200px;
    height: 200px;
    background-color: lightgrey;
    border-radius: 4px;

    :hover {
      cursor: pointer;
    }
  }
`

const PokemonListPage = () => {
  const pokemonList = useRequestData(BASE_URL, {});
  const [cardDetails, setCardDetails] = useState([])
  const [selectedId, setSelectId] = useState('showPokemon')

  useEffect(() => {
    selectedId !== "selected" ? document.title = "Pokédex | Lista" : document.title = `Pokédex | ${cardDetails.species.name.toUpperCase()}`

  }, [cardDetails, selectedId]);

   const handleOnClick = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}${id}`)
      setCardDetails(response.data)
      setSelectId("selected")
    } catch (err) {
      alert(err.message)
    }
  };

  const backListPokemon = () => {
    setSelectId('showPokemon')
  }

  const pokemonListResults =
    pokemonList.results && pokemonList.results.map((pokemon, id) => {
      const pokemonName = pokemon.name.toUpperCase()
      const pokemonId = String(id + 1)

      return (
        <PokemonCard>
          <img onClick={() => handleOnClick(pokemonId)} key={pokemonName} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`} alt={`Imagem ${pokemonName.name}`} />
          <span className="poke-number"><b>Nº {pokemonId}</b></span>
          <span><b>{pokemonName}</b></span>
          <div className="types">

          </div>
        </PokemonCard>
      )
    })

   
  return (
    <PokemonListPageContainer>
      {selectedId !== "selected" ? <PokemonListCards>
        {pokemonListResults}
      </PokemonListCards> : <div>
        <img src={cardDetails.sprites.front_default} alt={cardDetails.species.name} style={{width: "200px", height: "200px"}}/>
        <h1>{cardDetails.species.name.toUpperCase()}</h1>
        <p>HP: {cardDetails.stats[0].base_stat}</p>
        <p>Ataque: {cardDetails.stats[1].base_stat}</p>
        <p>Defesa: {cardDetails.stats[2].base_stat}</p>
        <p>Ataque Especial: {cardDetails.stats[3].base_stat}</p>
        <p>Defesa Especial: {cardDetails.stats[4].base_stat}</p>
        <p>Velocidade: {cardDetails.stats[5].base_stat}</p>
        <p>Peso: {cardDetails.weight / 10} Kg</p>
        <p>Tipo 1: {cardDetails.types[0].type.name}</p>
        {cardDetails.types.length > 1 ? <p>Tipo 2: {cardDetails.types[1].type.name}</p> : ""}
        <button onClick={backListPokemon}>Voltar</button>
      </div>}
    </PokemonListPageContainer>
  )
}

export default PokemonListPage;