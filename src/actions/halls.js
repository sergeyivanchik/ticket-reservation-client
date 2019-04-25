import axios from "axios";
import { 
  GET_HALLS_BY_CINEMA_SUCCESS, 
  GET_HALLS_BY_CINEMA_FAILURE
} from '../constants/halls.js';


export const getHallsByCinemaSuccess = hall => ({
  type: GET_HALLS_BY_CINEMA_SUCCESS,
  payload: hall
})

export const getHallsByCinemaFailure = error => ({
  type: GET_HALLS_BY_CINEMA_FAILURE,
  payload: error
})

export const getHallsByCinemaAsync = cinemaId => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/cinemas/${cinemaId}?select=halls`);
      dispatch(getHallsByCinemaSuccess(data))
    }
    catch (error) {
      dispatch(getHallsByCinemaFailure(error));
    }
  }
}