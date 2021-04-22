import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Pokedex } from '../components/Pokedex'
import { Details } from '../components/Details'
import Home from '../components/HomePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <Home />
        </Route>

        <Route exact path="/pokedex" component={Pokedex} />

        <Route exact path="/pokedex/details/:id" component={Details} />

        <Route>
          <p>Erro 404: página não encontrada</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
