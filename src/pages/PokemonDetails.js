import React, {useEffect} from 'react'
import { useHistory } from 'react-router'
import { goToPokedex, goToHome } from '../routes/coordinator'

export default function PokemonDetails() {
    const history = useHistory()

    useEffect(() => {
        document.title = "Pokédex | Detalhes";
      }, []);

    return (
        <div>
            <h1>Detalhes de Pokemon</h1>
            <button onClick={() => goToHome(history)}>Início</button>
            <button onClick={() => goToPokedex(history)}>Pokedex</button>
        </div>
    )
}