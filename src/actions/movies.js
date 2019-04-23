import axios from "axios";
import { GET_ALL_MOVIES } from '../constants/movies.js';

export const getAllMovies = movies => ({
  type: GET_ALL_MOVIES,
  payload: movies
})

export function getMovies() {
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