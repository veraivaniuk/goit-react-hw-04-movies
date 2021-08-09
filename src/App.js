//import SearchMovies from './components/SearchMovies/SearchMovies';
//import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/HomePage/HomePage';
import MoviesPage from './components/MoviesPage/MoviesPage';
import MoviePage from './components/MoviePage/MoviePage';
import NotFoundView from './components/NotFoundView/NotFoundView';



function App() {

    
  return (
    <div className="App">
      <Container>
      <Navigation />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId" >
          <MoviePage />       
        </Route>
        
        <Route>
          <NotFoundView />
        </Route>

        </Switch>
        </Container>
      
    </div>
  );
}

export default App;
