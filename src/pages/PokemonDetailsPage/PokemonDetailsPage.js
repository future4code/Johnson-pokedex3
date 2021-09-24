import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { goToHomePage, goToPokedexPage } from '../../routes/coordinator'

const PokemonDetailsPage = () => {
    const history = useHistory()

    useEffect(() => {
        document.title = "Pokédex | Detalhes";
      }, []);

    return (
        <div>
            <h1>Detalhes de Pokemon</h1>
            <button onClick={() => goToHomePage(history)}>Início</button>
            <button onClick={() => goToPokedexPage(history)}>Pokedex</button>
        </div>
    )
}

export default PokemonDetailsPage;