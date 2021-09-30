// import { BASE_IMG } from './../../constants/BASE_IMG';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { BASE_URL } from './../../constants/BASE_URL';
import useRequestData from '../../hooks/useRequestData';

const PokemonDetailsPage = () => {
    const params = useParams({});
    const history = useHistory();

    const pokemon = useRequestData(`${BASE_URL}${params.name}`, {});

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            {pokemon.name && <h1>{pokemon.name.toUpperCase()}</h1>}
            {pokemon.sprites
            && pokemon.sprites.other
            && pokemon.sprites.other.dream_world
            && pokemon.sprites.other.dream_world.front_default 
            && (<img src={pokemon.sprites.other.dream_world.front_default}/>)}
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}

export default PokemonDetailsPage;