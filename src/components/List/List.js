import { Link, useLocation } from "react-router-dom";

export default function List({ movies }) {
     const location = useLocation();
    
    return (
        <ul>
            {movies.map((movie) => {
                return (<li key={movie.id}>
                    <Link to={{ pathname: `movies/${movie.id}`, state: { from: location } }} >
                        <img src={"https://image.tmdb.org/t/p/w300"+movie.poster_path} alt={movie.title}/>
                        <h4>{movie.title}</h4>
                    </Link>
                </li>)
            })}
        </ul>
)
} 