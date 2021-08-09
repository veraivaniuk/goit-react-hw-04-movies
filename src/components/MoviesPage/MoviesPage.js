//import s from "./List.module.css";
//import PropTypes from "prop-types";
import { useHistory, useLocation  } from "react-router-dom";

import SearchMovies from "../SearchMovies/SearchMovies";
import List from '../List/List'
import { fetchSearchMovies } from "../../services/themoviedb-api";
import { useState, useEffect } from 'react';



function MoviesPage() {
  const location = useLocation();
  const history = useHistory();

  const [query, setQuery] = useState('');
  const [moviesArr, setMoviesArr] = useState([]);

  useEffect(() => {
    fetchSearchMovies(query).then(res=>setMoviesArr(res.data.results))
  }, [query])
  
  const onClick = (data) => {

    history.push({
      ...location,
      search: `query=${data}&page=${1}`,
    });

    setQuery(data);
  }

  

  return (
    <div>
      <SearchMovies onSubmit={onClick} />
      {moviesArr.length > 0 && <List movies={moviesArr} />}        
    </div>
  );
}

// ImageGallery.propTypes = {
//   images: PropTypes.array.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

export default MoviesPage;
