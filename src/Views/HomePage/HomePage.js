import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../services/themoviedb-api";
import List from '../List/List';

export default function HomePage() {
    
    const [moviesArr, setMoviesArr] = useState([]);

    useEffect(() => {
        fetchTrendingMovies().then(res =>
        setMoviesArr(res.data.results))
    },[])

    return (
        <List movies = {moviesArr} />
    )
    
}
