import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { BASE_URL } from '../constants/constants';
import { GlobalStateContext } from '../App';
import {
  Image,
  Div,
  Name,
  TitleContainer,
  ButtonContainer,
  ButtonPrimary
} from './CardStyles';

const Card = (props) => {
  const [pokeDetail, setPokeDetail] = useState({});

  const { pokedex, setPokedex } = useContext(GlobalStateContext);

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
  const addToPokedex = (name) => {
    setPokedex([...pokedex, pokeDetail]);
    alert(`${name} adicionado a pokedex`);
  };

  return (
    <Div>
      <TitleContainer>
        <Name>{props.pokeName}</Name>
      </TitleContainer>
      <Image
        src={
          pokeDetail.sprites &&
          pokeDetail.sprites.versions['generation-v']['black-white'].animated
            .front_default
        }
        alt={props.pokeName}
      />
      <ButtonContainer>
        <ButtonPrimary onClick={() => addToPokedex(props.pokeName)}>
          Adicionar
        </ButtonPrimary>
      </ButtonContainer>
    </Div>
  );
};

export default Card;
