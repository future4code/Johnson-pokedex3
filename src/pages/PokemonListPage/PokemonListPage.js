// import React from "react";
import { BASE_URL } from "../../constants/BASE_URL";
import styled from "styled-components";
import useRequestData from "../../hooks/useRequestData";
import { useHistory } from "react-router-dom";
import '../PokemonListPage/PokemonListPage.css'

const PokemonListPageContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  overflow-x: hidden;
  justify-content: center;
  `

const PokemonListCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  width: 56%;
  justify-items: center;
  margin-top: 12vh;
  `

const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 200px;
  height: 280px;
  border-radius: 20px;
  margin: 0 8px 48px 8px;
	box-shadow: 0 3px 24px rgba(100, 100, 100, 0.5);
  background-color: white;
  :hover {
    transform: scale(1.02);
  }

  span {
    margin-left: 8px;
    font-size: 20px;
  }
  
  .poke-number {
    font-size: 14px;
    color: grey;
  }

  img {
    width: 200px;
    height: 200px;
    background-color: lightgrey;
    border-radius: 4px;

    :hover {
      cursor: pointer;
    }
  }
`

// const colors = {
//   fire: '#FDDFDF',
//   grass: '#DEFDE0',
//   electric: '#FCF7DE',
//   water: '#DEF3FD',
//   ground: '#f4e7da',
//   rock: '#d5d5d4',
//   fairy: '#fceaff',
//   poison: '#98d7a5',
//   bug: '#f8d5a3',
//   dragon: '#97b3e6',
//   psychic: '#eaeda1',
//   flying: '#F5F5F5',
//   fighting: '#E6E0D4',
//   normal: '#F5F5F5'
// };

const PokemonListPage = () => {
  const pokemonList = useRequestData(BASE_URL, {});
  const history = useHistory();

  const goToPokemonDetailsPage = (name) => {
    history.push(`/pokemon-details/${name}`)
  }

  const pokemonListResults =
    pokemonList.results && pokemonList.results.map((pokemon, id) => {
      const pokemonName = pokemon.name.toUpperCase()
      const pokemonId = String(id + 1).padStart(3, '0')


      return (
        <PokemonCard>
          <img onClick={() => goToPokemonDetailsPage(pokemonName)} key={pokemonName} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonId}.png`} alt={`Imagem ${pokemonName.name}`} />
          <span className="poke-number"><b>Nº {pokemonId}</b></span>
          <span><b>{pokemonName}</b></span>
          <div className="types">

          </div>
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

// const [pokemon, setPokemon] = useState([{}]);
// const [pokemonDetails, setPokemonDetails] = useState("");

// useEffect(() => {
//   axios
//     .get(BASE_URL)
//     .then((response) => {
//       setPokemon(response.data.results);
//     })
//     .catch((err) => {
//       alert("Algo deu ruim");
//     });
// }, []);

// const handleOnClick = (id) => {
//   axios.get(`${BASE_URL}${id}`).then(res => {
//       setPokemonDetails(res.data)
//       })
// };

// const 
// const { sprites, stats, types, weight } = pokemonDetails;

// let conversao = weight / 10

// return pokemon.map((item, id) => {
//   return (
//     <div>
//       {pokemonDetails === "" ? (
//         <PokemonListPageContainer>
//           <h1>{item.name}</h1>
//           {/* <img src={details.sprites.front_default} /> */}
//           <button onClick={() => handleOnClick(item.name)}>Detalhes</button>
//         </PokemonListPageContainer>
//       ) : 
//           <div>
//               {pokemonDetails.id === id ?
//               <div>
//                   <img src={sprites.front_default}/>
//                   <p>HP: {stats[0].base_stat}</p>
//                   <p>Ataque: {stats[1].base_stat}</p>
//                   <p>Defesa: {stats[2].base_stat}</p>
//                   <p>Ataque Especial: {stats[3].base_stat}</p>
//                   <p>Defesa Especial: {stats[4].base_stat}</p>
//                   <p>Velocidade: {stats[5].base_stat}</p>
//                   <p>Peso: {conversao} Kg</p>
//                   <p>Tipo 1: {types[0].type.name}</p>
//                   {types.length > 1 ? <p>Tipo 2: {types[1].type.name}</p> : ""}
//               </div> : ""}
//           </div>
//       }
//     </div>
//   );
// });

export default PokemonListPage;