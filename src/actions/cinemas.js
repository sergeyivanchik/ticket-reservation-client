import axios from "axios";
import { GET_CINEMAS, GET_CINEMA_BY_ID } from '../constants/cinemas.js';


export const getCinemas = cinemas => ({
  type: GET_CINEMAS,
  payload: cinemas
})

export const getCinemasById = cinema => ({
  type: GET_CINEMA_BY_ID,
  payload: cinema
})

export const getCinemasAsync = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('http://localhost:8080/cinemas');
      dispatch(getCinemas(data))
    }
    catch (error) {
      console.log(error);
    }
  }
}

export const getCinemasByIdAsync = cinemaId => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/cinemas/${cinemaId}?select=name`);
      dispatch(getCinemasById(data))
    }
    catch (error) {
      console.log(error);
    }
  }
}
