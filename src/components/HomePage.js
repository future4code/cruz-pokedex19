import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import {baseUrl} from '../constants/Url'


const HomePage = () => {
  
  const [pokemons, setPokemons] = useState([])
  const [imagePokemons, setImagePokemons] = useState('')
  const history = useHistory()
  
 
  const  goPokedex = () => {
     history.push('/pokedex')
 }


useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")
    .then((res)=>{
      setPokemons(res.data.results)
      getImagePokemon()
    }).catch((e)=>{
      console.log(e)
    }) 

},[])


const getImagePokemon = (name) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  .then((res)=>{
    
    setImagePokemons(res.data.sprites.front_default)
    
  }).catch((e)=>{
    console.log(e)
  })
}

const mapPokemons = pokemons.map((pokemons)=>{
  return <p>{pokemons.name}</p>

})
  
console.log(mapPokemons.props)
  return (
<>
<h1>HomePage</h1>
<img></img>
<button onClick = {goPokedex}>Ir para a pokedex</button>
{mapPokemons}


</>
    )
}

export default HomePage