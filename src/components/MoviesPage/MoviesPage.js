//import s from "./List.module.css";
//import PropTypes from "prop-types";
import {  useHistory, useLocation } from "react-router-dom";
import SearchMovies from "../SearchMovies/SearchMovies";
import List from '../List/List'
import { fetchSearchMovies } from "../../services/themoviedb-api";
import { useState, useEffect} from 'react';



function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  
  const [query, setQuery] = useState('');
  const [moviesArr, setMoviesArr] = useState([]);

  useEffect(() => {
    if (query === '') return;
    fetchSearchMovies(query).then(res => setMoviesArr(res.data.results))
  }, [query]);
  
  const onClick = (data) => {
    history.push({ ...location,  search: `query=${data}` })
    setQuery(data);
  }
  

  useEffect(() => {
    const backSaerch = new URLSearchParams(location.search).get("query");
    if (backSaerch !== null) {
      fetchSearchMovies(backSaerch).then(res => setMoviesArr(res.data.results));
    }
     
  }, [location])

  

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
