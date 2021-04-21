import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { BASE_URL } from '../constants/constants';
import { GlobalStateContext } from '../App'

const Card = (props) => {
  const [pokeDetail, setPokeDetail] = useState({});

  const { pokedex, setPokedex } = useContext(GlobalStateContext)

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

  // a função que adiciona o pokemon dentro da pokedex
  const addToPokedex = () => {
    setPokedex([...pokedex, pokeDetail])
  } 


  
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
      <button onClick={addToPokedex}>Adicionar</button>
    </div>
  );
};

export default Card;
