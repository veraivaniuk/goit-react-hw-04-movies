import { Link, useLocation,useHistory } from "react-router-dom";

export default function List({ movies }) {
    const location = useLocation();
    const history = useHistory();
    console.log(history, location);
    console.log(Link);
    
    return (
        <ul>
            {movies.map((movie) => {
                return (<li key={movie.id}>
                    <Link to={ {pathname: `movies/${movie.id}`, search: `query=${location}&page=${1}`, state: {from: location}}} >
                        <img src={"https://image.tmdb.org/t/p/w300"+movie.poster_path} alt={movie.title}/>
                        <h4>{movie.title}</h4>
                    </Link>
                </li>)
            })}
        </ul>
)
} 