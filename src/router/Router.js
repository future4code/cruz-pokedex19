import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import HomePage from '../components/HomePage'
import Pokedex from '../components/Pokedex'
import DetailsPage from '../components/DetailsPage'

const Router = () => {
    return (
        <>
           <BrowserRouter>
<Switch>
  <Route exact path = "/">
      <HomePage/>
  </Route>
  <Route exact path = "/pokedex">
      <Pokedex/>
    </Route>
    <Route exact path = "/details">
        <DetailsPage/>
    </Route>
    <Route exact path = "">
   <h1>Página não encotrada(404)</h1>
    </Route>
    
</Switch>

</BrowserRouter> 
        </>
  
    )
    

} 
export default Router;