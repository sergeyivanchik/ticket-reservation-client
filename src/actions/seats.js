import axios from "axios";
import {
  SELECT_SEAT,
  DELETE_SELECTED_SEATS,
  BUY_SEATS_SUCCESS,
  BUY_SEATS_FAILURE
} from '../constants/seats.js';


export const deleteSelectedSeats = () => ({
  type: DELETE_SELECTED_SEATS
});

export const selectSeat = seat => ({
  type: SELECT_SEAT,
  payload: seat
});

export const buySeatsSuccess = seats => ({
  type: BUY_SEATS_SUCCESS,
  payload: seats
});

export const buySeatsFailure = error => ({
  type: BUY_SEATS_FAILURE,
  payload: error
});

export const buySeatsAsync = (sessionId, row, seat, price) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`http://localhost:8080/sessions/insert/${sessionId}`, { row, seat, price } );
      dispatch(buySeatsSuccess(data))
    }
    catch (error) {
      dispatch(buySeatsFailure(error));
      console.log(error)
    }
  }
} 
