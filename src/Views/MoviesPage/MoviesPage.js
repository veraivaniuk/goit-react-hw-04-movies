import { useHistory, useLocation } from "react-router-dom";
import SearchMovies from "../../Views/SearchMovies/SearchMovies";
import List from '../List/List'
import { fetchSearchMovies } from "../../services/themoviedb-api";
import { useState, useEffect} from 'react';



function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [moviesArr, setMoviesArr] = useState([]);
  
  const onClick = (data) => {
    history.push({ ...location, search: `query=${data}` });
  }

  useEffect(() => {
    setQuery(new URLSearchParams(location.search).get("query"));
    if (query === '') return;
    if (query !== null) {
      fetchSearchMovies(query).then(res => setMoviesArr(res.data.results))
        .catch(err=>{console.log();});
    }
  }, [query, location.search])

  return (
    <div>
      <SearchMovies onSubmit={onClick} />
      {moviesArr.length > 0 && <List movies={moviesArr} />}
    </div>
  );
}

export default MoviesPage;
