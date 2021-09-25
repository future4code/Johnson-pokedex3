import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import HomePage from '../pages/HomePage/HomePage'
import PokedexPage from '../pages/PokedexPage/PokedexPage'
import PokemonDetailsPage from '../pages/PokemonDetailsPage/PokemonDetailsPage'
import PokemonListPage from '../pages/PokemonListPage/PokemonListPage'

const Routes = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"}>
                        <HomePage />
                    </Route>
                    <Route exact path={"/pokemon-list"}>
                        <PokemonListPage />
                    </Route>
                    <Route exact path={"/pokedex"}>
                        <PokedexPage />
                    </Route>
                    <Route exact path={"/pokemon-details/:name"}>
                        <PokemonDetailsPage />
                    </Route>
                    <Route>
                        <ErrorPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Routes