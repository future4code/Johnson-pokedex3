import { useEffect, useContext } from "react";
import GlobalStateContext from '../../global/GlobalStateContext'
import "../PokemonListPage/PokemonListPage.css";
import { BASE_IMG } from "../../constants/BASE_IMG";
import { useHistory } from "react-router";
import { CgPokemon } from "react-icons/cg";
import Header from './../../components/Header';
import {
  PokemonListPageContainer,
  PokemonListCards,
  PokemonCard,
  DivButtons,
  DivImage,
} from "./ListPageStyled";

const PokemonListPage = () => {
  const { pokemons } = useContext(GlobalStateContext)


  useEffect(() => {
    document.title = "Pokédex | Lista Pokémon";
  });


  const history = useHistory();

  const goToPokemonDetailsPage = (name) => {
    history.push(`/pokemon-details/${name}`);
  };

  const addPokedex = (pokemon) => {
    alert("Adicionado na Pokédex")
  }

  const pokemonListResults =
    pokemons &&
    pokemons.map((pokemon, id) => {
      const pokemonId = String(id + 1);

      return (
        <>
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
        </>
      );
    });

  return (
    <>
      <Header />
      <PokemonListPageContainer>
        <PokemonListCards>{pokemonListResults}</PokemonListCards>
      </PokemonListPageContainer>
    </>
  );
};

export default PokemonListPage;
