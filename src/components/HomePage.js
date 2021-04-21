import React, { useContext } from 'react';
import Card from './Card';
import { GlobalStateContext } from '../App';
import { useHistory } from 'react-router';
import { goToPokedex } from '../router/Cordinator'

const Home = () => {
  const receivedData = useContext(GlobalStateContext);
  const history = useHistory();

  return (
    <div>
      <header>
        <button onClick={() => goToPokedex(history)}>Ver minha POKEDEX</button>
        <h1>Lista de Pokemons</h1>
      </header>
      <main className="CardContainer">
        {receivedData.pokemonList.map((pokemon) => {
          return (
            <Card
              key={pokemon.url}
              pokeName={pokemon.name}
              pokeUrl={pokemon.url}
            />
          );
        })}
      </main>
    </div>
  );
};

export default Home;
