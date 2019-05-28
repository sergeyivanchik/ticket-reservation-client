import axios from "axios";
import { 
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  GET_MOVIE_BY_ID_SUCCESS,
  GET_MOVIE_BY_ID_FAILURE
} from '../constants/movies.js';

export const getMoviesSuccess = movies => ({
  type: GET_MOVIES_SUCCESS,
  payload: movies
})

export const getMoviesFailure = error => ({
  type: GET_MOVIES_FAILURE,
  payload: error
})

export const getMoviesAsync = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/movies`);
      dispatch(getMoviesSuccess(data))
      }
    catch (error) {
      dispatch(getMoviesFailure(error));
    }
  }
}

export const getMovieByIdSuccess = movie => ({
  type: GET_MOVIE_BY_ID_SUCCESS,
  payload: movie
})

export const getMovieByIdFailure = error => ({
  type: GET_MOVIE_BY_ID_FAILURE,
  payload: error
})

export const getMovieByIdAsync = movieId => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/movies/${movieId}`);
      dispatch(getMovieByIdSuccess(data))
    }
    catch (error) {
      dispatch(getMovieByIdFailure(error));
    }
  }
}
