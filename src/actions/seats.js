import axios from "axios";
import {
  SELECT_SEAT,
  GET_SELECTED_SEATS_SUCCESS,
  GET_SELECTED_SEATS_FAILURE,
  DELETE_SELECTED_SEATS
} from '../constants/seats.js';


export const deleteSelectedSeats = () => ({
  type: DELETE_SELECTED_SEATS,
  payload: []
})

export const getSeatsSuccess = seats => ({
  type: GET_SELECTED_SEATS_SUCCESS,
  payload: seats
});

export const getSeatsFailure = error => ({
  type: GET_SELECTED_SEATS_FAILURE,
  payload: error
});

export const selectSeat = seat => ({
  type: SELECT_SEAT,
  payload: seat
});


export const getSeatsAsync = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/sessions`);
      dispatch(getSeatsSuccess(data))
    }
    catch (error) {
      dispatch(getSeatsFailure(error))
    }
  }
}