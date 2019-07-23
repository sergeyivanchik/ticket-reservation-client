import axios from "axios";
import {
  GET_CINEMAS_SUCCESS,
  GET_CINEMAS_FAILURE
} from '../constants/cinemas.js';


export const getCinemasSuccess = cinemas => ({
  type: GET_CINEMAS_SUCCESS,
  payload: cinemas
})

export const getCinemasFailure = error => ({
  type: GET_CINEMAS_FAILURE,
  payload: error
})

export const getCinemasAsync = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('cinemas');
      dispatch(getCinemasSuccess(data))
    }
    catch (error) {
      dispatch(getCinemasFailure(error))
    }
  }
}
