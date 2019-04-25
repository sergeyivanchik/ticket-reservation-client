import axios from "axios";
import { GET_ALL_HALLS_BY_CINEMA } from '../constants/halls.js';


export const getAllHallsByCinema = hall => ({
  type: GET_ALL_HALLS_BY_CINEMA,
  payload: hall
})

export const getHallsByCinema = cinemaId => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/cinemas/${cinemaId}?select=halls`);
      dispatch(getAllHallsByCinema(data))
    }
    catch (error) {
      console.log(error);
    }
  }
}