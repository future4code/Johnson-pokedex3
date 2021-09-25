import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { goToHomePage, goToPokedexPage, goToPokemonListPage } from '../../routes/coordinator'

const PokemonDetailsPage = () => {
    const history = useHistory()

    useEffect(() => {
        document.title = "Pokédex | Detalhes";
      }, []);

    return (
        <div>
            <h1>Detalhes de Pokemon</h1>
            <button onClick={() => goToHomePage(history)}>Início</button>
            <button onClick={() => goToPokemonListPage(history)}>Pokémon</button>
            <button onClick={() => goToPokedexPage(history)}>Pokédex</button>
        </div>
    )
}

export default PokemonDetailsPage;