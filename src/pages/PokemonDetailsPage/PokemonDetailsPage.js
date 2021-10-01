import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { BASE_URL } from './../../constants/BASE_URL';
import { FRONT_GIF, BACK_GIF } from '../../constants/BASE_GIF'
import useRequestData from '../../hooks/useRequestData';
import styled from 'styled-components';
import Background from '../../assets/background.png'

const PokemonDetailsCard = styled.div`
    display: flex;
    /* flex-direction: column; */
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;

    .sprites {
        display: flex;
        justify-content: space-around;
        width: 600px;
        height: 400px;
        align-items: center;
        background-image: url(${Background});
        background-size: cover;
        border-radius: 8px;
        box-shadow: 2px 2px 8px gray;
    }

    img {
        width: 160px;
        height: 160px;        
    }

    .back {
        display: flex;
        flex-direction: column !important;
        margin-top: 220px;
        margin-left: 20px;
    }

    .front {
        display: flex;
        flex-direction: column !important;
        width: 100px;
        height: 100px;
        margin-bottom: 140px;
        margin-left: 200px;
    }

    .stats {
        display: flex;
        flex-direction: column;
    }

    .types {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 200px;
        margin-top: 20px;

        .types span {

        }
        
        .fire {
            display: flex;
            color: #fff;
            background-color: #fd7d24;
            box-shadow: 2px 2px 4px gray;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            width: 80px;
            height: 28px;
            /* background-image: url('https://cdn-icons-png.flaticon.com/512/785/785116.png');
            background-size: 20px ;
            background-repeat: no-repeat; */
        }

        .grass {
            display: flex;
            color: #212121;
            background-color: #9bcc50;
            box-shadow: 2px 2px 4px gray;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            width: 80px;
            height: 28px;
            /* background-image: url('https://cdn-icons-png.flaticon.com/512/188/188333.png');
            background-size: 20px ;
            background-repeat: no-repeat; */
        }

        .electric {
            display: flex;
            color: #212121;
            background-color: #eed535;
            box-shadow: 2px 2px 4px gray;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            width: 80px;
            height: 28px;
        }

        .water {
            display: flex;
            color: #fff;
            background-color: #4592c4;
            box-shadow: 2px 2px 4px gray;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            width: 80px;
            height: 28px;
            /* background-image: url('https://cdn-icons-png.flaticon.com/512/414/414974.png');
            background-size: 20px ;
            background-repeat: no-repeat; */
        }

        .ground {
            display: flex;
            color: #212121;
            background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
            background-color: #f7de3f;
            box-shadow: 2px 2px 4px gray;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            width: 80px;
            height: 28px;
        }

        .rock {
            display: flex;
            color: #fff;
            background-color: #a38c21;
            box-shadow: 2px 2px 4px gray;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            width: 80px;
            height: 28px;
        }

        .fairy {
            display: flex;
            color: #212121;
            background-color: #fdb9e9;
            box-shadow: 2px 2px 4px gray;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            width: 80px;
            height: 28px;
        }

        .poison {
            display: flex;
            color: #fff;
            background-color: #b97fc9;
            box-shadow: 2px 2px 4px gray;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            width: 80px;
            height: 28px;
            /* background-image: url('https://cdn-icons-png.flaticon.com/512/427/427957.png');
            background-size: 20px ;
            background-repeat: no-repeat; */
        }

        .bug {
            display: flex;
            color: #fff;
            background-color: #729f3f;
            box-shadow: 2px 2px 4px gray;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            width: 80px;
            height: 28px;
        }

        .dragon {
            display: flex;
            background-color: #97b3e6;
            box-shadow: 2px 2px 4px gray;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            width: 80px;
            height: 28px;
        }

        .psychic {
            display: flex;
            color: #fff;
            background-color: #f366b9;
            box-shadow: 2px 2px 4px gray;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            width: 80px;
            height: 28px;
        }

        .flying {
            display: flex;
            color: #212121;
            background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
            background-color: #3dc7ef;
            box-shadow: 2px 2px 4px gray;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            width: 80px;
            height: 28px;
            /* background-image: url('https://cdn-icons-png.flaticon.com/512/2756/2756521.png');
            background-size: 20px ;
            background-repeat: no-repeat; */
        }

        .fighting {
            display: flex;
            color: #fff;
            background-color: #d56723;
            box-shadow: 2px 2px 4px gray;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            width: 80px;
            height: 28px;
        }

        .normal {
            display: flex;
            color: #212121;
            background-color: #a4acaf;
            box-shadow: 2px 2px 4px gray;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            width: 80px;
            height: 28px;
            /* background-image: url('https://img-premium.flaticon.com/png/512/1169/premium/1169608.png?token=exp=1633052808~hmac=7c2dea813a92a762c952349eb244e3a8');
            background-size: 20px ;
            background-repeat: no-repeat; */
        }

        .steel {
            display: flex;
            color: #212121;
            background-color: #9eb7b8;
            box-shadow: 2px 2px 4px gray;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            width: 80px;
            height: 28px;
        }

        .ice {
            display: flex;
            color: #212121;
            background-color: #51c4e7;
            box-shadow: 2px 2px 4px gray;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            width: 80px;
            height: 28px;
        }

        .ghost {
            display: flex;
            color: #fff;
            background-color: #7b62a3;
            box-shadow: 2px 2px 4px gray;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            width: 80px;
            height: 28px;
        }

        .dragon {
            display: flex;
            color: #fff;
            background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
            background-color: #53a4cf;
            box-shadow: 2px 2px 4px gray;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            width: 80px;
            height: 28px;
        }
    }
`

const PokemonDetailsPage = () => {
    useEffect(()=> {
        document.title = 'Pokédex | Detalhes'
    }, [])

    const params = useParams({});

    const history = useHistory();

    const pokemon = useRequestData(`${BASE_URL}${params.name}`, {});

    const {name, types, weight, height, stats} = pokemon
   

    const goBack = () => {
        history.goBack()
    }

    return (
        <PokemonDetailsCard>
            <button onClick={goBack}>Voltar</button>
            {name && <h1>{name.toUpperCase()}</h1>}
            <div className="height">
                <span>Altura: {height / 10} m.</span>
            </div>
            <div className="weight">
                <span>Peso: {weight / 10} Kg.</span>
            </div>
            <div className="stats">
                {stats && <span>HP: {stats[0].base_stat}</span>}
                {stats && <span>Attack: {stats[1].base_stat}</span>}
                {stats && <span>Defense: {stats[2].base_stat}</span>}
                {stats && <span>Special Attack: {stats[3].base_stat}</span>}
                {stats && <span>Special Defense: {stats[4].base_stat}</span>}
                {stats && <span>Speed: {stats[5].base_stat}</span>}
            </div>
            <div className="sprites">
                <img className="back" src={`${BACK_GIF}${pokemon.id}.gif`} alt={name}/>
                <img className="front" src={`${FRONT_GIF}${pokemon.id}.gif`} alt={name}/>
            </div>
            <div className="types">
                {types && <span className={`${types[0].type.name}`}>{types[0].type.name}</span>}
                {types && types.length > 1 ? <span className={`${types[1].type.name}`}>{types[1].type.name}</span> : ""}
            </div>
        </PokemonDetailsCard>
    )
}

export default PokemonDetailsPage;