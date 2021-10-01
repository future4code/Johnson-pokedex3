import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { BASE_URL } from './../../constants/BASE_URL';
import { FRONT_GIF, BACK_GIF } from '../../constants/BASE_GIF'
import useRequestData from '../../hooks/useRequestData';
import styled from 'styled-components';
import typebug from "../../assets/typebug.png";

const PokemonDetailsCard = styled.div`
    display: flex;
    flex-direction: column;
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
        background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aa15ff7d-d333-4bf9-b115-95e18f63fe91/d65wjxe-ed312de4-e5e1-43fd-8608-e5d95d2a5913.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FhMTVmZjdkLWQzMzMtNGJmOS1iMTE1LTk1ZTE4ZjYzZmU5MVwvZDY1d2p4ZS1lZDMxMmRlNC1lNWUxLTQzZmQtODYwOC1lNWQ5NWQyYTU5MTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0anMc3eXnY9MAnVtwa6RIOV_w6ObUs70iySTkhge4IM");
        background-size: cover;
        border-radius: 30px;
        box-shadow: 10px 4px 10px gray;

    }

    img {
        width: 120px;
        height: 120px;        
    }

    .back {
        display: flex;
        flex-direction: column !important;
        width: 140px;
        height: 140px;
        height: auto;
        margin-top: 200px;
    }

    .types {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 200px;
        height: 40px;
        
        .fire {
            background-color: #FDDFDF;
            box-shadow: 10px 4px 10px gray;
            text-align: center;
            border-radius: 20px;
            width: 80px;
            height: 28px;
            background-image: url('https://cdn-icons-png.flaticon.com/512/785/785116.png');
            background-size: 20px ;
            background-repeat: no-repeat;
        }

        .grass {
            background-color: #DEFDE0;
            box-shadow: 10px 4px 10px gray;
            text-align: center;
            border-radius: 20px;
            width: 80px;
            height: 28px;
            background-image: url('https://cdn-icons-png.flaticon.com/512/188/188333.png');
            background-size: 20px ;
            background-repeat: no-repeat;
        }

        .electric {
            background-color: #FCF7DE;
            box-shadow: 10px 4px 10px gray;
            text-align: center;
            border-radius: 20px;
            width: 80px;
            height: 28px;
        }

        .water {
            background-color: #DEF3FD;
            box-shadow: 10px 4px 10px gray;
            text-align: center;
            border-radius: 20px;
            width: 80px;
            height: 28px;
            background-image: url('https://cdn-icons-png.flaticon.com/512/414/414974.png');
            background-size: 20px ;
            background-repeat: no-repeat;
        }

        .ground {
            background-color: #f4e7da;
            box-shadow: 10px 4px 10px gray;
            text-align: center;
            border-radius: 20px;
            width: 80px;
            height: 28px;
        }

        .rock {
            background-color: #d5d5d4;
             box-shadow: 10px 4px 10px gray;
            text-align: center;
            border-radius: 20px;
            width: 80px;
            height: 28px;
        }

        .fairy {
            background-color: #fceaff;
             box-shadow: 10px 4px 10px gray;
            text-align: center;
            border-radius: 20px;
            width: 80px;
            height: 28px;
        }

        .poison {
            background-color: #98dF;
             box-shadow: 10px 4px 10px gray;
            text-align: center;
            border-radius: 20px;
            width: 80px;
            height: 28px;
            background-image: url('https://cdn-icons-png.flaticon.com/512/427/427957.png');
            background-size: 20px ;
            background-repeat: no-repeat;

        }

        .bug {
            background-color: #f8d5a3;
            box-shadow: 10px 4px 10px gray;
            text-align: center;
            border-radius: 20px;
            width: 80px;
            height: 28px;
            background-image: url(${typebug});
            background-size: 20px ;
            background-repeat: no-repeat;
        }

        .dragon {
            background-color: #97b3e6;
             box-shadow: 10px 4px 10px gray;
            text-align: center;
            border-radius: 20px;
            width: 80px;
            height: 28px;
        }

        .psychic {
            background-color: #eaeda1;
             box-shadow: 10px 4px 10px gray;
            text-align: center;
            border-radius: 20px;
            width: 80px;
            height: 28px;
        }

        .flying {
            background-color: #F5F5F5;
             box-shadow: 10px 4px 10px gray;
            text-align: center;
            border-radius: 20px;
            width: 80px;
            height: 28px;
            background-image: url('https://cdn-icons-png.flaticon.com/512/2756/2756521.png');
            background-size: 20px ;
            background-repeat: no-repeat;
        }

        .fighting {
            background-color: #e6e024;
             box-shadow: 10px 4px 10px gray;
            text-align: center;
            border-radius: 20px;
            width: 80px;
            height: 28px;
        }

        .normal {
            background-color: #F0F0F0;
             box-shadow: 10px 4px 10px gray;
            text-align: center;
            border-radius: 20px;
            width: 80px;
            height: 28px;
            background-image: url('https://img-premium.flaticon.com/png/512/1169/premium/1169608.png?token=exp=1633052808~hmac=7c2dea813a92a762c952349eb244e3a8');
            background-size: 20px ;
            background-repeat: no-repeat;
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

    const {name, types, weight, height} = pokemon
   

    const goBack = () => {
        history.goBack()
    }

    return (
        <PokemonDetailsCard>
            {name && <h1>{name.toUpperCase()}</h1>}
            <div className="height">
                <span>Altura: {height / 10} m.</span>
            </div>
            <div className="weight">
                <span>Peso: {weight / 10} Kg.</span>
            </div>

            <div className="sprites">
                <img className="back" src={`${BACK_GIF}${pokemon.id}.gif`} alt={name}/>
                <img className="front" src={`${FRONT_GIF}${pokemon.id}.gif`} alt={name}/>
            </div>
            <div className="types">
                {types && <span className={`${types[0].type.name}`}>{types[0].type.name}</span>}
                {types && types.length > 1 ? <span className={`${types[1].type.name}`}>{types[1].type.name}</span> : ""}
            </div>
            <button onClick={goBack}>Voltar</button>
        </PokemonDetailsCard>
    )
}

export default PokemonDetailsPage;