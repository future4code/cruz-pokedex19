import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Router from './router/Router';

import { BASE_URL } from './constants/constants';

export const GlobalStateContext = React.createContext();

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  const getPokemonList = () => {
    axios
      .get(BASE_URL)
      .then((response) => {
        setPokemonList(response.data.results);
      })
      .catch((error) => {
        console.log('Erro na requisição');
        console.log(error.message);
      });
  };


  useEffect(() => {
    getPokemonList();
    console.log(pokemonList)
  }, []);





  const data = {
    pokemonList,
    setPokemonList,
    pokedex,
    setPokedex,
    getPokemonList
  };

  return (
    <GlobalStateContext.Provider value={data}>
      <Router />
    </GlobalStateContext.Provider>
  );
};

export default App;
