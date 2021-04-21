import { useHistory, useParams } from "react-router"
import { useContext, useEffect, useState } from 'react'
import { GlobalStateContext } from '../App'

export const Details = () => {

    const history = useHistory()
    const { pokedex, setPokedex, pokeDetail } = useContext(GlobalStateContext)
    const [details, setDetails ] = useState();
    const { id } = useParams()
    console.log()    

    useEffect(() => {
        const filteredPokedex = pokedex.filter(poke => {
            return poke.id == id
        })
        return setDetails(filteredPokedex)
    },[])

    // console.log(details)


    // const filteredPokedex = pokedex.filter(poke => {
    //     return poke.id == id
    // })
    // console.log('filtrou', filteredPokedex)


    return (
        <>
        {details && details.map((item) => {
            return (
                <>
                <h2>{item.name}</h2>
                <img
                 src={
                    item.sprites &&
                    item.sprites.versions['generation-v']['black-white'].animated
                    .front_default
                    }
                    alt={item.name}
                 />
                <p>XP: {item.base_experience}</p>
                <p>TIPO: {item.types && item.types[0].type.name}</p>
                <p>HABILIDADE: {item.abilities && item.abilities[0].ability.name}</p>
                <p>{item.stats && item.stats[0].stat.name}: {item.stats[0].base_stat}</p>
                <p>{item.stats && item.stats[1].stat.name}: {item.stats[1].base_stat}</p>
                <p>{item.stats && item.stats[2].stat.name}: {item.stats[2].base_stat}</p>
                <p>{item.stats && item.stats[3].stat.name}: {item.stats[3].base_stat}</p>
                <p>{item.stats && item.stats[4].stat.name}: {item.stats[4].base_stat}</p>
                </>
            )
        })}

        <button onClick={history.goBack}>voltar</button>
        </>
    )
}