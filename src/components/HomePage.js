import Card from './Card';
import { GlobalStateContext } from '../App';
import Pagination from './Paginas/index';
import Header from './Header/Header';
import { Div, MainDiv } from './Styles';
import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const receivedData = useContext(GlobalStateContext);
  const history = useHistory();

  const [pokemons, setPokemons] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const pokesPerPage = '20';

  const { pokedex } = useContext(GlobalStateContext);

  useEffect(() => {
    let storedPokemons = JSON.parse(localStorage.getItem('pokemons'));
    if (storedPokemons && storedPokemons.length > 0) {
      setPokemons(storedPokemons);
    }
  }, [pokedex]);

  const paginate = (pageNumber) => {
    if (
      pageNumber > 0 &&
      pageNumber <= Math.ceil(pokemons.length / pokesPerPage)
    ) {
      setCurrentPage(pageNumber);
      history.push(`/page/${pageNumber}`);
    }
  };

  return (
    <MainDiv>
      <Header />
      <Div id="main">
        <Pagination
          pokesPerPage={pokesPerPage}
          totalPokes={pokemons.length}
          paginate={paginate}
        />
        {receivedData.pokemonList.map((pokemon) => {
          return (
            <Card
              key={pokemon.url}
              pokeName={pokemon.name}
              pokeUrl={pokemon.url}
            />
          );
        })}
      </Div>
    </MainDiv>
  );
};

export default Home;
