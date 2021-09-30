// import { BASE_IMG } from './../../constants/BASE_IMG';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { BASE_URL } from './../../constants/BASE_URL';
import useRequestData from '../../hooks/useRequestData';
import styled from 'styled-components';

const PokemonDetailsCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;
    height: 800px;
    border: 2px solid black;
    justify-content: space-between;
    align-items: center;

    img {
        width: 400px;
        height: 400px;
    }
`

const PokemonDetailsPage = () => {
    const params = useParams({});
    const history = useHistory();

    const pokemon = useRequestData(`${BASE_URL}${params.name}`, {});

    const {name, sprites, types} = pokemon

    const goBack = () => {
        history.goBack()
    }
console.log(types && types.length)
    return (
        <PokemonDetailsCard>
            {name && <h1>{name.toUpperCase()}</h1>}

            <div>
                {sprites
                && sprites.other
                && sprites.other.dream_world
                && sprites.other.dream_world.front_default
                && (<img src={sprites.other.dream_world.front_default}/>)}
            </div>

            {types && types[0].type && types[0].type.name && <span>Tipo: {types[0].type.name}</span>}
            {types && types.length > 1 ? types[1].type && types[1].type.name && <span>Tipo 2: {types[1].type.name}</span> : ""}
            <button onClick={goBack}>Voltar</button>
        </PokemonDetailsCard>
    )
}

export default PokemonDetailsPage;