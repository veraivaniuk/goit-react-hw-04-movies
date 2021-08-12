import { useState, useEffect, Fragment } from 'react';
import { Route, useParams, useHistory, useLocation  } from "react-router-dom";
import { Link, useRouteMatch } from "react-router-dom";
import { fetchMovieById } from '../../services/themoviedb-api';
import { Cast } from '../Cast/Cast';
import { Review } from '../Review/Review'
import s from "./MoviePage.module.css";
import img from '../../images/film.png'

const MoviePage = () => {
  const history = useHistory();
  const location = useLocation();

  const {url} = useRouteMatch();
  const [infoMovie, setInfoMovie] = useState({});
  const { movieId } = useParams();
  
  useEffect(() => {
    fetchMovieById(movieId).then(res => setInfoMovie(res.data))
  }, [movieId]);

  const handleGoBack = () => {
    history.push(location?.state?.from || "/" );
  };

  return (
    <Fragment>
      <button type="button"onClick= {handleGoBack}className={s.btnGoBack}>Go back</button>
     
      {infoMovie.original_title &&
        <div className={s.moviePage}>
        <div className={s.mainInfo}>
          <img
            src={infoMovie.poster_path ?`https://image.tmdb.org/t/p/w500${infoMovie.poster_path}`: img}
            alt={infoMovie.original_title}
            className={s.poster}
          />
          <div className={s.info}>
            <h3>{infoMovie.original_title}</h3>
            <p>User Score: {infoMovie.vote_average * 10} %</p>
            <h3>Overview</h3><p>{infoMovie.overview}</p>
          <h3>Genres</h3><p>{infoMovie?.genres?.map((genre) => (<span key={genre.id}> {genre.name} </span>))}</p>
          </div>
        </div>
          <div className={s.addInfo}>
            <h4>Additional information</h4>
            <ul >
            <li  key={1}><Link className={s.addItem } to={{ pathname: `${url}/cast`, state: { from: location.state?.from }, }}>Cast</Link></li>
              <li key={2}><Link className={s.addItem } to={{ pathname: `${url}/reviews`, state: { from: location.state?.from }, }}>Reviews</Link></li>
            </ul>
            </div>
            <Route path={`/movies/:movieId/cast`} >
              <Cast />
            </Route>

            <Route path={`/movies/:movieId/reviews`}>
              <Review />
            </Route>
          
        </div>}
    </Fragment>
  );
};


export default MoviePage;
