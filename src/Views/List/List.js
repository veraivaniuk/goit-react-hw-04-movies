import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import img from '../../images/film.png';
import s from "./List.module.css";

export default function List({movies}) {
    const location = useLocation();

    return (
        <Fragment>
            <ul className={s.list}>
                {movies.map((movie) => {
                    return (<li key={movie.id} className= {s.item}>
                        <Link to={{ pathname: `movies/${movie.id}`, state: { from: location }, }} >
                            <img className={s.image} src={movie.poster_path ?`https://image.tmdb.org/t/p/w300${movie.poster_path}`: img} alt={movie.title}/>
                            <h4>{movie.title}</h4>
                        </Link>
                    </li>)
                })}
            </ul>
        </Fragment>)
} 