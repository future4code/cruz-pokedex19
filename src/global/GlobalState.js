/*import React, { useEffect, useState } from 'react'

import axios from 'axios'
import {baseUrl} from '../constants/Url'



export const GlobalState = (props) => {
    const [pokemon,setPokemon] = useState([])    
    const [pokedex,setPokedex] = useState([])

useEffect(()=>{

requests.getPokemons()

},[])

const getPokemons = () => {
    axios.get(`${baseUrl}/limit=20`)
    .then((res)=>{
        setPokemon(res.data.results)
    }).catch((e)=>{
        console.log(e)
    })
}

const states = {pokedex,pokemon}

const setters = {setPokemon,setPokedex}

const requests = {getPokemons}

return (
    <GlobalStateContext.Provider value = {data}>
    {props.children}
    </GlobalStateContext.Provider>
)
}

export default GlobalState
*/