import useRequestData from "../../hooks/useRequestData";
import '../PokemonListPage/PokemonListPage.css'
import { BASE_URL } from "../../constants/BASE_URL";
import { BASE_IMG } from '../../constants/BASE_IMG';
import { useHistory } from "react-router";
import { PokemonListPageContainer, PokemonListCards, PokemonCard } from './ListPageStyled'

const PokemonListPage = () => {
  const pokemonList = useRequestData(BASE_URL, {});
  const history = useHistory();

  const goToPokemonDetailsPage = (name) => {
    history.push(`/pokemon-details/${name}`)
  }

  const pokemonListResults =
    pokemonList.results && pokemonList.results.map((pokemon, id) => {
      const pokemonId = String(id + 1)

      return (
        <PokemonCard onClick={() => goToPokemonDetailsPage(pokemon.name)} key={pokemon.name}>
          <img src={`${BASE_IMG}${pokemonId}.svg`} alt={`Imagem ${pokemon.name}`}/>
          <span className="poke-number"><b>Nº {pokemonId}</b></span>
          <span><b>{pokemon.name.toUpperCase()}</b></span>
        </PokemonCard>
      )
    })

  return (
    <PokemonListPageContainer>
      <PokemonListCards>
        {pokemonListResults}
      </PokemonListCards>
    </PokemonListPageContainer>
  )
}

export default PokemonListPage;