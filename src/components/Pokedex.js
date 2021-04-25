import Card from './Card'
import { GlobalStateContext } from '../App'
import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { goToDetails } from '../router/Cordinator';


export const Pokedex = () => {
  
    const { pokedex, setPokedex, pokeDetail } = useContext(GlobalStateContext)
    const history = useHistory()

    
        
 /*   const removePodedex = (name) => {
      if (window.confirm(`Deseja mesmo excluir o ${name}?`)){
        const name = pokedex.
        
        history.push('/pokedex')
      }else {
        console.log(pokedex)
      }
   
    } */
    console.log(pokedex)

    const removePokemon = (itemToRemove) => {
      const index = pokedex.findIndex((i) => i.id === itemToRemove);
      let newPokedex = [...pokedex];
      if (newPokedex[index]=== 1) {
        
        newPokedex.splice(index, 1);
      } else {
        newPokedex[index] -= 1;
      }
      window.confirm("Deseja mesmo excluir esse pokemon? ")
      setPokedex(newPokedex);
      console.log(pokedex)

    };

   

        const pokemonDetails = (id) => {
            goToDetails(history,id)

        }

        useEffect(() => {
          
      },[])



    const renderPokedex = pokedex.map(poke => {
        return (
                <div className="CardBox">
                  <img key = {poke.name}
                    src={
                      poke.sprites &&
                      poke.sprites.versions['generation-v']['black-white'].animated
                        .front_default
                    }
                    alt={poke.name}
                  />
                  <h3 key = {poke.id}>{poke.name}</h3>
                
                  <button onClick = {() => removePokemon(poke.id)}
                  
                  >remover</button>
                 
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

