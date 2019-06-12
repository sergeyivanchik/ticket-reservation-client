import axios from "axios";
import { 
  GET_HALL_BY_CINEMA_SUCCESS, 
  GET_HALL_BY_CINEMA_FAILURE
} from '../constants/halls.js';


export const getHallByCinemaSuccess = hall => ({
  type: GET_HALL_BY_CINEMA_SUCCESS,
  payload: hall
})

export const getHallByCinemaFailure = error => ({
  type: GET_HALL_BY_CINEMA_FAILURE,
  payload: error
})

export const getHallByCinemaAsync = (hallId, cinemaId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/halls/${hallId}/${cinemaId}`);
      dispatch(getHallByCinemaSuccess(data))
    }
    catch (error) {
      dispatch(getHallByCinemaFailure(error));
    }
  }
}
