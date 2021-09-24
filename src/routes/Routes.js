import React from 'react'
import Home from '../pages/Home'
import {ListPokemons} from '../pages/ListPokemons'
import Pokedex from '../pages/Pokedex'
import PokemonDetails from '../pages/PokemonDetails'
import Error from '../pages/Error'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Routes = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"}>
                        <Home />
                    </Route>
                    <Route exact path={"/list"}>
                        <ListPokemons />
                    </Route>
                    <Route exact path={"/pokedex"}>
                        <Pokedex />
                    </Route>
                    <Route exact path={"/pokemon-details"}>
                        <PokemonDetails />
                    </Route>
                    <Route>
                        <Error />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Routes