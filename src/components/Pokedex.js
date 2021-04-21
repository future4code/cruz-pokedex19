import Card from './Card'
import { GlobalStateContext } from '../App'
import { useContext, useEffect } from 'react'
import { useHistory } from 'react-router';
import { goToDetails } from '../router/Cordinator';


export const Pokedex = () => {

    const { pokedex, setPokedex, pokeDetail } = useContext(GlobalStateContext)
    const history = useHistory()

    console.log(pokedex)
        
        useEffect(() => {
            
        })


        console.log(history)

        const pokemonDetails = (id) => {
            goToDetails(history,id)

        }

    const renderPokedex = pokedex.map(poke => {
        return (
                <div className="CardBox">
                  <img
                    src={
                      poke.sprites &&
                      poke.sprites.versions['generation-v']['black-white'].animated
                        .front_default
                    }
                    alt={poke.name}
                  />
                  <h3>{poke.name}</h3>
                  <button>remover</button>
                  <button onClick={() => pokemonDetails(poke.id)}>detalhes</button>
                </div>
        )
    })

    return (
        <>
        {pokedex && renderPokedex}
        <button onClick={history.goBack}>voltar</button>
       
        </>
    )
};

