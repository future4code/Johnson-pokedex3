import useRequestData from "../../hooks/useRequestData";
import { useEffect } from "react";
import "../PokemonListPage/PokemonListPage.css";
import { BASE_URL } from "../../constants/BASE_URL";
import { BASE_IMG } from "../../constants/BASE_IMG";
import { useHistory } from "react-router";
import { CgPokemon, CgDetailsMore } from "react-icons/cg";
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
  const history = useHistory();

  const goToPokemonDetailsPage = (name) => {
    history.push(`/pokemon-details/${name}`);
  };

  const pokemonListResults =
    pokemonList.results &&
    pokemonList.results.map((pokemon, id) => {
      const pokemonId = String(id + 1);

      return (
        <PokemonCard>
          <DivImage>
            <img
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
            <button class="btn-grad" onClick={() => alert("Sem funciomaneoto")}>
              add
              <CgPokemon size="20" color="red" /> 
            </button>

            <button
              key={pokemon.name}
              onClick={() => goToPokemonDetailsPage(pokemon.name)}
            >
              details
              <CgDetailsMore size="20" />
            </button>
          </DivButtons>
        </PokemonCard>
      );
    });

  return (
    <PokemonListPageContainer>
      <PokemonListCards>{pokemonListResults}</PokemonListCards>
    </PokemonListPageContainer>
  );
};

export default PokemonListPage;
