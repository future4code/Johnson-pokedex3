import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";
import "../pages/ListPokemon/listPokemon.css";

export const ListPokemons = () => {
  const [pokemons, setPokemons] = useState([{}]);
  const [url, setUrl] = useState({});
  const [details, setDetails] = useState("");

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => {
        setPokemons(response.data.results);
      })
      .catch((err) => {
        alert("Algo deu ruim");
      });
  }, []);

  const handleOnClick = (id) => {
    axios.get(`${BASE_URL}${id}`).then(res => {
        setDetails(res.data)
        })
  };

  let conversao = details.weight / 10


  return pokemons.map((item, id) => {
    return (
      <div>
        {details === "" ? (
          <div>
            <h1>Pokemon: {item.name}</h1>
            {/* <img src={details.sprites.front_default} /> */}
            <button onClick={() => handleOnClick(id+1)}>Detalhes</button>
          </div>
        ) : 
            <div>
                {details.id === id ? 
                <div>
                    <img src={details.sprites.front_default}/>
                    <p>HP: {details.stats[0].base_stat}</p>
                    <p>Ataque: {details.stats[1].base_stat}</p>
                    <p>Defesa: {details.stats[2].base_stat}</p>
                    <p>Ataque Especial: {details.stats[3].base_stat}</p>
                    <p>Defesa Especial: {details.stats[4].base_stat}</p>
                    <p>Velocidade: {details.stats[5].base_stat}</p>
                    <p>Peso: {conversao} Kg</p>
                    <p>Tipo 1: {details.types[0].type.name}</p>
                    {details.types.length > 1 ? <p>Tipo 2: {details.types[1].type.name}</p> : ""}
                </div> : ""}
            </div>
        }
      </div>
    );
  });
};
