import axios from "axios";
import { GET_ALL_MOVIES, GET_MOVIE_BY_ID } from '../constants/movies.js';

export const getAllMovies = movies => ({
  type: GET_ALL_MOVIES,
  payload: movies
})

export const getMovieById = movie => ({
  type: GET_MOVIE_BY_ID,
  payload: movie
})

export const getMovieByIdAsync = movieId => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/movies/${movieId}`);
      dispatch(getMovieById(data))
    }
    catch (error) {
      console.log(error);
    }
  }
}

export const getMovies = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('http://localhost:8080/movies');
      dispatch(getAllMovies(data))
    }
    catch (error) {
      console.log(error);
    }
  }
}