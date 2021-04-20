import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../constants/constants';

const Card = (props) => {
  const [pokeDetail, setPokeDetail] = useState({});

  useEffect(() => {
    getPokemonDetail(props.pokeName);
  }, [props.pokeName]);

  const getPokemonDetail = (name) => {
    axios
      .get(`${BASE_URL}/${name}`)
      .then((response) => {
        setPokeDetail(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="CardBox">
      <img
        src={
          pokeDetail.sprites &&
          pokeDetail.sprites.versions['generation-v']['black-white'].animated
            .front_default
        }
        alt={props.pokeName}
      />
      <h3>{props.pokeName}</h3>
      <button>Adicionar</button>
    </div>
  );
};

export default Card;
