import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthProvider from "./Context/auth";
import FavoriteBookProvider from "./Context/fav";
import FavoritesPage from "./Pages/Favorites";
import FormAccountPage from "./Pages/FormAccount";
import HomePage from "./Pages/Home";
import SearchPage from "./Pages/Search";
import TestePage from "./Pages/Teste";
import "./styles.css";
//AuthProvider é pra ter acesso as variaveis globalmente

export default function App() {
  return (
    <AuthProvider>
      <FavoriteBookProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/favorites">
              <FavoritesPage />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/teste">
              <TestePage />
            </Route>
            <Route path="/formAccount">
              <FormAccountPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </FavoriteBookProvider>
    </AuthProvider>
  );
}
