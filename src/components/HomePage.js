import React, { useContext } from 'react';
import Card from './Card';
import { GlobalStateContext } from '../App';

const Home = () => {
  const receivedData = useContext(GlobalStateContext);

  return (
    <div>
      <header>
        <button>Ver minha POKEDEX</button>
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
