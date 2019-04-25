import axios from "axios";
import { GET_ALL_CINEMAS, GET_ALL_CINEMAS_BY_ID } from '../constants/cinemas.js';


export const getAllCinemas = cinemas => ({
  type: GET_ALL_CINEMAS,
  payload: cinemas
})

export const getAllCinemasById = cinema => ({
  type: GET_ALL_CINEMAS_BY_ID,
  payload: cinema
})

export const getCinemas = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('http://localhost:8080/cinemas');
      dispatch(getAllCinemas(data))
    }
    catch (error) {
      console.log(error);
    }
  }
}

export const getCinemasById = cinemaId => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/cinemas/${cinemaId}?select=name`);
      dispatch(getAllCinemasById(data))
    }
    catch (error) {
      console.log(error);
    }
  }
}
