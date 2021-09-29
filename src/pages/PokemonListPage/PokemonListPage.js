
import useRequestData from "../../hooks/useRequestData";
import '../PokemonListPage/PokemonListPage.css'
import { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';
import { BASE_URL } from "../../constants/BASE_URL";
import { BASE_IMG } from './../../constants/BASE_IMG';
// import { TYPE_URL } from './../../constants/TYPE_URL';
import PokemonDetailsPage from '../PokemonDetailsPage/PokemonDetailsPage'
import { useHistory } from "react-router";

import { PokemonListPageContainer, PokemonListCards, PokemonCard } from './ListPageStyled'



const PokemonListPage = () => {
  const pokemonList = useRequestData(BASE_URL, {});
  const [cardDetails, setCardDetails] = useState([])
  const [selectedId, setSelectId] = useState('showPokemon')
  // const [type, setType] = useState('')

  const history = useHistory()

  useEffect(() => {
    selectedId !== "selected" ? document.title = "Pokédex | Lista" : document.title = `Pokédex | ${cardDetails.species.name.toUpperCase()}`

  }, [cardDetails, selectedId]);

  const handleOnClick = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}${id}`)
      setCardDetails(response.data)
      setSelectId("selected")

      //      setType(cardDetails.types[0].type.name)

    } catch (err) {
      alert(err.message)
    }
  };


  const pageDetails = (id) => {
    history.push(`/pokemon-details/${id}`)
  }

  const pokemonListResults =
    pokemonList.results && pokemonList.results.map((pokemon, id) => {
      const pokemonName = pokemon.name.toUpperCase()
      const pokemonId = String(id + 1)
      //const tipo = pokemonList.types[0].type.name


      return (
        <PokemonCard onClick={() => pageDetails(id + 1)}>
          <img onClick={() => handleOnClick(pokemonId)} key={pokemonName} src={`${BASE_IMG}${pokemonId}.png`} alt={`Imagem ${pokemonName.name}`} />
          <span className="poke-number"><b>Nº {pokemonId}</b></span>
          <span><b>{pokemonName}</b></span>
          <div className="types">
          </div>
        </PokemonCard>
      )
    })
  // ${pokemon.types.map(item => ' ' + item.type.name).toString()}

  return (
    <PokemonListPageContainer>
      {selectedId !== "selected" ? <PokemonListCards>
        {pokemonListResults}
      </PokemonListCards> :
        <PokemonDetailsPage pokemonListResults={pokemonListResults} handleOnClick={(id) => handleOnClick} />}
    </PokemonListPageContainer>
  )
}

export default PokemonListPage;