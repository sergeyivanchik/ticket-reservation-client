import axios from "axios";
import { GET_HALLS_BY_CINEMA } from '../constants/halls.js';


export const getHallsByCinema = hall => ({
  type: GET_HALLS_BY_CINEMA,
  payload: hall
})

export const getHallsByCinemaAsync = cinemaId => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/cinemas/${cinemaId}?select=halls`);
      dispatch(getHallsByCinema(data))
    }
    catch (error) {
      console.log(error);
    }
  }
}