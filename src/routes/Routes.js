import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import HomePage from '../pages/HomePage/HomePage';
import PokedexPage from '../pages/PokedexPage/PokedexPage';
import PokemonListPage from '../pages/PokemonListPage/PokemonListPage';
import PokemonDetailsPage from '../pages/PokemonDetailsPage/PokemonDetailsPage';
import { ContextPokedex } from '../context/ContextPokedex'

const Routes = () => {
    return (
        <>
            <BrowserRouter>

                <Switch>

                    <Route exact path={"/"}>
                        <HomePage />
                    </Route>
                    <ContextPokedex.Provider>
                        <Route exact path={"/pokemon-list"}>
                            <PokemonListPage />
                        </Route>

                        <Route exact path={"/pokedex"}>
                            <PokedexPage />
                        </Route>

                        <Route exact path={"/pokemon-details/:name"}>
                            <PokemonDetailsPage />
                        </Route>

                    </ContextPokedex.Provider>
                    <Route>
                        <ErrorPage />
                    </Route>
                </Switch>

            </BrowserRouter>
        </>
    )
}

export default Routes;