import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "./../../constants/BASE_URL";
import { FRONT_GIF, BACK_GIF } from "../../constants/BASE_GIF";
import useRequestData from "../../hooks/useRequestData";
import {
  PokemonDetailsContainer,
  PokemonDetailsCard,
} from "./styles";
import Header from "../../components/Header";
import { useHistory } from 'react-router';
import { DivButtons } from './../PokemonListPage/ListPageStyled';
import {CgBackspace} from 'react-icons/cg'

const PokemonDetailsPage = () => {
  useEffect(() => {
    document.title = "Pokédex | Detalhes";
  }, []);

  const params = useParams({});
  const history = useHistory();

  const pokemon = useRequestData(`${BASE_URL}${params.name}`, {});

  const { name, types, weight, height, stats, abilities } = pokemon;

  const goBack = () => {
      history.push('/pokemon-list')
  }

  return (
    <>
      <Header />
      <PokemonDetailsContainer>
        <PokemonDetailsCard>
          <div className="all">
            <div className="sprites">
              <img
                className="back"
                src={`${BACK_GIF}${pokemon.id}.gif`}
                alt={name}
              />
              <img
                className="front"
                src={`${FRONT_GIF}${pokemon.id}.gif`}
                alt={name}
              />
            </div>
            <div className="infos__types">
              <div className="name__number">
                {name && (
                  <h1 style={{ color: "#212121" }}>{name.toUpperCase()}</h1>
                )}
                {pokemon.id && (
                  <h1 style={{ color: "gray" }}># {pokemon.id}</h1>
                )}
              </div>
              <div className="infos">
                <div className="info_1">
                  <span style={{ color: "#fff" }}>Height:</span>
                  <span style={{ color: "#212121" }}>
                    <b>{height / 10} m</b>
                  </span>{" "}
                  <span style={{ color: "#fff" }}>Weight:</span>
                  <span style={{ color: "#212121" }}>
                    <b>{weight / 10} kg</b>
                  </span>
                  <span style={{ color: "#fff" }}>Abilities:</span>
                  {abilities && (
                    <span style={{ color: "#212121" }}>
                      <b>{abilities[0].ability.name}</b>
                    </span>
                  )}
                </div>
                <div className="info_2">
                  <span style={{ color: "#fff" }}>HP:</span>
                  {stats && (
                    <span style={{ color: "#212121" }}>
                      <b>{stats[0].base_stat}</b>
                    </span>
                  )}
                  <span style={{ color: "#fff" }}>Attack:</span>
                  {stats && (
                    <span style={{ color: "#212121" }}>
                      <b>{stats[1].base_stat}</b>
                    </span>
                  )}
                  <span style={{ color: "#fff" }}>Defense:</span>
                  {stats && (
                    <span style={{ color: "#212121" }}>
                      <b>{stats[2].base_stat}</b>
                    </span>
                  )}
                </div>
                <div className="info_3">
                  <span style={{ color: "#fff" }}>Special Attack: </span>
                  {stats && (
                    <span style={{ color: "#212121" }}>
                      <b>{stats[3].base_stat}</b>
                    </span>
                  )}

                  <span style={{ color: "#fff" }}>Special Defense:</span>
                  {stats && (
                    <span style={{ color: "#212121" }}>
                      <b>{stats[4].base_stat}</b>
                    </span>
                  )}
                  <span style={{ color: "#fff" }}>Speed:</span>
                  {stats && (
                    <span style={{ color: "#212121" }}>
                      <b>{stats[5].base_stat}</b>
                    </span>
                  )}
                </div>
              </div>
              <div className="types">
                <h2 style={{ color: "#212121" }}>Type</h2>
                <div className="types_names">
                  {types && (
                    <span className={`${types[0].type.name}`}>
                      {types[0].type.name}
                    </span>
                  )}
                  {types && types.length > 1 ? (
                    <span className={`${types[1].type.name}`}>
                      {types[1].type.name}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <DivButtons>
            <button class="btn-grad" onClick={goBack}>
              Back Details
              <CgBackspace size="36" color="red" />
            </button>
          </DivButtons>
          </div>

        </PokemonDetailsCard>
      </PokemonDetailsContainer>
    </>
  );
};

export default PokemonDetailsPage;
