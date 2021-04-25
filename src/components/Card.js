import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { BASE_URL } from '../constants/constants';
import { GlobalStateContext } from '../App'

const Card = (props) => {
  const [pokeDetail, setPokeDetail] = useState({});
  const { pokedex, setPokedex} = useContext(GlobalStateContext)
  //const [verify, setVerify] = useState()


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
 
  
const verify = []
  // a função que adiciona o pokemon dentro da pokedex
  const addToPokedex = (name) => {
   

  for (let index = 0; index < pokedex.length; index++) {
       const element = pokedex[index].name
  
     
      verify.push(element)
    
  console.log(verify)
 
}
const verificar = verify.indexOf(name,0)
console.log(verificar)

if (verificar === -1){
  setPokedex([...pokedex, pokeDetail])
  alert('Pokemon adicionado a pokedex')
}else {
  alert('Pokemon ja existente')
}


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
      <button onClick={() => addToPokedex(props.pokeName,props.id)}>Adicionar</button>
    </div>
  );
};

export default Card;
