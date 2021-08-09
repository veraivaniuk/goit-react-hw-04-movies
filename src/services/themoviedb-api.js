import axios from "axios";

const API_KEY = 'api_key=0e08f2d9a1d16a70935cfe89eeb4c6cf';
const BASE_URL = 'https://api.themoviedb.org/3/'


export const fetchTrendingMovies = () => {
  return axios
    .get(
      `${BASE_URL}trending/movie/day?${API_KEY}`
    )
    .then((response) => response);
};


export const fetchSearchMovies = (searchQuery) => {
  return axios
    .get(
      `${BASE_URL}search/movie?${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
    )
    .then((response) => response);
};

export const fetchMovieById = (movie_id) => {
  return axios
    .get(
      `${BASE_URL}movie/${movie_id}?${API_KEY}`
    )
    .then((response) => response);
};

export const fetchCast = (movie_id) => {
  return axios
    .get(
      `${BASE_URL}movie/${movie_id}/credits?${API_KEY}`
    )
    .then((response) => response);
};

export const fetchReviews = (movie_id) => {
  return axios
    .get(
      `${BASE_URL}movie/${movie_id}/reviews?${API_KEY}`
    )
    .then((response) => response);
};
