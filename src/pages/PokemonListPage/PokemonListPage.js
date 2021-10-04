import useRequestData from "../../hooks/useRequestData";
import axios from 'axios'
import { useEffect, useState } from "react";
import "../PokemonListPage/PokemonListPage.css";
import { BASE_URL } from "../../constants/BASE_URL";
import { BASE_IMG } from "../../constants/BASE_IMG";
import { useHistory } from "react-router";
import { CgPokemon } from "react-icons/cg";
import {
  PokemonListPageContainer,
  PokemonListCards,
  PokemonCard,
  DivButtons,
  DivImage,
} from "./ListPageStyled";

const PokemonListPage = () => {
  useEffect(() => {
    document.title = "Pokédex | Lista Pokémon";
  });
  const pokemonList = useRequestData(BASE_URL, {});
  const [isPokedex, setPokedex] = useState(false)
  const history = useHistory();

  const goToPokemonDetailsPage = (name) => {
    history.push(`/pokemon-details/${name}`);
  };

  const addPokedex = (pokemon) => {
    setPokedex(true)
    alert("Adicionado na Pokédex")
  }

  useEffect(() => {
    axios.get(BASE_URL)
  }, [isPokedex])

  const pokemonListResults =
    pokemonList.results &&
    pokemonList.results.map((pokemon, id) => {
      const pokemonId = String(id + 1);

      return (
        <>
          {isPokedex !== true ?
            <PokemonCard>
              <DivImage>
                <img
                  onClick={() => goToPokemonDetailsPage(pokemon.name)}
                  src={`${BASE_IMG}${pokemonId}.png`}
                  alt={`Imagem ${pokemon.name}`}
                />
              </DivImage>
              <span className="poke-number">
                <b># {pokemonId}</b>
              </span>
              <span>
                <b>{pokemon.name.toUpperCase()}</b>
              </span>
              <DivButtons>
                <button class="btn-grad" onClick={() => addPokedex()}>
                  add
                  <CgPokemon size="26" color="red" />
                </button>

              </DivButtons>
            </PokemonCard>
            : <h1>No data</h1>}
        </>
      );
    });

  return (
    <PokemonListPageContainer>
      <PokemonListCards>{pokemonListResults}</PokemonListCards>
    </PokemonListPageContainer>
  );
};

export default PokemonListPage;
