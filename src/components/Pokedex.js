import React from 'react'
import {useHistory} from 'react-router-dom'



const Pokedex = () => {

const history = useHistory()

    const  goHome = () => {
        history.push('/')
    }


    return (
<>
<button onClick = {goHome}>Voltar</button>
<h1>Pokedex</h1>
</>
    )
}

export default Pokedex