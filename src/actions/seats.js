import {
  SELECT_SEAT,
  DELETE_SELECTED_SEATS
} from '../constants/seats.js';


export const deleteSelectedSeats = () => ({
  type: DELETE_SELECTED_SEATS
})

export const selectSeat = seat => ({
  type: SELECT_SEAT,
  payload: seat
});
