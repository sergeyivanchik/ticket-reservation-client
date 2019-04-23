import axios from "axios";
import { GET_ALL_HALLS_BY_CINEMA } from '../constants/halls.js';


export const getAllHallsByCinema = hall => ({
  type: GET_ALL_HALLS_BY_CINEMA,
  payload: hall
})

export function getHallsByCinema() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/cinemas/5c98af99ef0e720b148e1643?select=halls`);
      dispatch(getAllHallsByCinema(data))
    }
    catch (error) {
      console.log(error);
    }
  }
}