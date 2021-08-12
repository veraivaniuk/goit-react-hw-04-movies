import { Switch, Route, Redirect } from 'react-router-dom';
import Container from './components/Container/Container';
import Navigation from './components/Navigation/Navigation';
import Loaderr from'./components/Loader/Loader';
import React, { lazy, Suspense } from 'react';
const HomePage = lazy(() => import('./Views/HomePage/HomePage' /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() => import("./Views/MoviesPage/MoviesPage" /* webpackChunkName: "movies-page" */));
const MoviePage = lazy(() => import("./Views/MoviePage/MoviePage" /* webpackChunkName: "movie-page" */));




function App() {

    
  return (
    <div className="App">
      <Container>
      <Navigation />

        <Suspense fallback={<Loaderr/>}>
      <Switch>
        <Route path="/" exact component={ HomePage } />
        <Route path="/movies" exact component={ MoviesPage } />
        <Route path="/movies/:movieId" component={ MoviePage } />
        <Redirect to="/" />
      

          </Switch>
          </Suspense>
        </Container>
      
    </div>
  );
}

export default App;
